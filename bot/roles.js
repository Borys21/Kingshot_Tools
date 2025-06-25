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
 * Zwraca wszystkie możliwe role tagowe dla danego tagu
 */
function getAllTagRoles(tag) {
  return [
    `[${tag}]`,
    `[${tag}] Marshal`
  ];
}

/**
 * Zwraca wszystkie role rangi (R1-R4) — bez taga
 */
function getAllRankRoles() {
  return ['R1', 'R2', 'R3', 'R4'];
}

/**
 * Usuwa wszystkie role [TAG], [TAG] Marshal oraz R1-R4 z targeta
 */
async function removeAllAllianceRoles(member, tag, guild) {
  // Szukamy roli [TAG] i [TAG] Marshal
  const tagRole = guild.roles.cache.find(r => r.name === `[${tag}]`);
  const marshalRole = guild.roles.cache.find(r => r.name === `[${tag}] Marshal`);
  // Szukamy roli R1-R4
  const rankRoles = getAllRankRoles().map(roleName => guild.roles.cache.find(r => r.name === roleName));

  const rolesToRemove = [];
  if (tagRole && member.roles.cache.has(tagRole.id)) rolesToRemove.push(tagRole);
  if (marshalRole && member.roles.cache.has(marshalRole.id)) rolesToRemove.push(marshalRole);
  for (const role of rankRoles) {
    if (role && member.roles.cache.has(role.id)) rolesToRemove.push(role);
  }
  if (rolesToRemove.length > 0) {
    await member.roles.remove(rolesToRemove);
  }
}

/**
 * Główna funkcja do przydzielania rangi
 */
async function handleRankAssignment(interaction, target, newRank) {
  // Pobierz [TAG] z roli osoby przydzielającej
  const authorTagMatch = interaction.member.roles.cache.find(r => /^\[.+\]$/.test(r.name));
  if (!authorTagMatch)
    return interaction.update({ content: 'You must have a [TAG] role to use this command.', components: [] });

  // Wyciągnij tekst tagu bez nawiasów []
  const tagName = authorTagMatch.name.replace(/^\[(.+)\]$/, '$1').replace(/ Marshal$/, '');

  // Uprawnienia
  if (!hasPermissionForRank(interaction.member, newRank))
    return interaction.update({ content: 'You do not have permission to assign this rank.', components: [] });

  // Odczytaj starą rangę targeta (jeśli była) — patrzymy na same role R1-R4
  let oldRank = null;
  for (const roleName of getAllRankRoles()) {
    if (target.roles.cache.some(r => r.name === roleName)) oldRank = roleName;
  }

  // Usuwamy WSZYSTKIE role R1-R4 i [TAG] oraz [TAG] Marshal
  await removeAllAllianceRoles(target, tagName, interaction.guild);

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