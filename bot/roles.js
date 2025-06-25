const { EmbedBuilder } = require('discord.js');

/**
 * Pozwala: R5 nadaje wszystko (R1-R4 Marshal), R4 do R3 max
 */
function hasPermissionForRank(member, targetRank) {
  if (member.roles.cache.some(r => r.name === 'R5')) return true;
  if (member.roles.cache.some(r => r.name === 'R4') && ['R1', 'R2', 'R3'].includes(targetRank)) return true;
  return false;
}

/**
 * Usuwa WSZYSTKIE role sojuszowe: R1, R2, R3, R4 + wszystkie role tagowe ([TAG], [TAG] Marshal) z targeta.
 */
async function removeAllAllianceRoles(member, guild) {
  // Usuń wszystkie rangi R1-R4
  const rankRoles = ['R1', 'R2', 'R3', 'R4'].map(name => guild.roles.cache.find(r => r.name === name));
  // Usuń WSZYSTKIE tagi [TAG] i [TAG] Marshal, jakie user ma!
  const tagRoles = member.roles.cache.filter(r => /^\[.+\](| Marshal)$/.test(r.name));
  // Tworzymy listę do usunięcia
  const rolesToRemove = [];

  rankRoles.forEach(role => { if (role && member.roles.cache.has(role.id)) rolesToRemove.push(role.id); });
  tagRoles.forEach(role => rolesToRemove.push(role.id));

  if (rolesToRemove.length > 0) {
    await member.roles.remove(rolesToRemove);
  }
}

/**
 * Główna funkcja do przydzielania rangi
 */
async function handleRankAssignment(interaction, target, newRank) {
  // Pobierz [TAG] osoby nadającej
  const authorTagMatch = interaction.member.roles.cache.find(r => /^\[.+\]$/.test(r.name));
  if (!authorTagMatch)
    return interaction.update({ content: 'You must have a [TAG] role to use this command.', components: [] });

  // Wyciągnij tekst tagu bez nawiasów i Marshal
  const tagName = authorTagMatch.name.replace(/^\[(.+)\]$/, '$1').replace(/ Marshal$/, '');

  // Uprawnienia
  if (!hasPermissionForRank(interaction.member, newRank))
    return interaction.update({ content: 'You do not have permission to assign this rank.', components: [] });

  // Odczytaj starą rangę (patrzymy tylko na role R1-R4)
  let oldRank = null;
  for (const rank of ['R1', 'R2', 'R3', 'R4']) {
    if (target.roles.cache.some(r => r.name === rank)) oldRank = rank;
  }

  // Usuwamy WSZYSTKO: stare rangi + WSZYSTKIE możliwe tagi, Marshal itd.
  await removeAllAllianceRoles(target, interaction.guild);

  // Przygotuj role do nadania
  const rankRole = interaction.guild.roles.cache.find(r => r.name === newRank);
  if (!rankRole)
    return interaction.update({ content: `Role "${newRank}" not found. Inform the admin.`, components: [] });

  let tagRoleName = (newRank === 'R4')
    ? `[${tagName}] Marshal`
    : `[${tagName}]`;

  const tagRole = interaction.guild.roles.cache.find(r => r.name === tagRoleName);
  if (!tagRole)
    return interaction.update({ content: `Role "${tagRoleName}" not found. Inform the admin.`, components: [] });

  // Nadaj DWIE role naraz
  await target.roles.add([rankRole, tagRole]);

  // Typ operacji: awans, degradacja, czy update
  let actionStr = '';
  if (!oldRank) actionStr = 'Assigned';
  else if (rankToNumber(newRank) > rankToNumber(oldRank)) actionStr = 'Promoted';
  else if (rankToNumber(newRank) < rankToNumber(oldRank)) actionStr = 'Demoted';
  else actionStr = 'Updated';

  // Embed z info
  const embed = new EmbedBuilder()
    .setTitle('Alliance Rank Updated')
    .setDescription(
      `**${target.user.tag}**\n` +
      `**Tag:** [${tagName}]\n` +
      `**${actionStr} to:** ${newRank}${newRank === 'R4' ? ' Marshal' : ''}\n\n` +
      `All previous alliance tag/rank roles removed.`
    )
    .addFields(
      { name: 'New Roles', value: `${rankRole.name}, ${tagRole.name}`, inline: true }
    )
    .setColor(actionStr === 'Promoted' ? 0x57F287 : (actionStr === 'Demoted' ? 0xED4245 : 0xFFC857))
    .setTimestamp();

  return interaction.update({ embeds: [embed], components: [] });
}

function rankToNumber(rank) {
  switch (rank) {
    case 'R1': return 1;
    case 'R2': return 2;
    case 'R3': return 3;
    case 'R4': return 4;
    default: return 0;
  }
}

module.exports = {
  handleRankAssignment
};