const { EmbedBuilder } = require('discord.js');

function hasPermissionForRank(member, targetRank) {
  if (member.roles.cache.some(r => r.name === 'R5')) return true;
  if (member.roles.cache.some(r => r.name === 'R4') && ['R1', 'R2', 'R3'].includes(targetRank)) return true;
  return false;
}

async function removeAllAllianceRoles(member, guild) {
  // Zbierz role sojuszowe do usunięcia
  const rolesToRemove = [];

  // Rangi R1-R4
  for (const name of ['R1', 'R2', 'R3', 'R4']) {
    const role = guild.roles.cache.find(r => r.name === name);
    if (role && member.roles.cache.has(role.id)) rolesToRemove.push(role.id);
  }
  // Wszystkie [TAG] i [TAG] Marshal
  member.roles.cache.forEach(r => {
    if (/^\[.+\]$/.test(r.name) || /^\[.+\] Marshal$/.test(r.name)) rolesToRemove.push(r.id);
  });

  if (rolesToRemove.length > 0) {
    await member.roles.remove(rolesToRemove);
  }
}

// Uniwersalny sleep (Promise)
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function handleRankAssignment(interaction, target, newRank) {
  const authorTagMatch = interaction.member.roles.cache.find(r => /^\[.+\]$/.test(r.name));
  if (!authorTagMatch)
    return interaction.update({ content: 'You must have a [TAG] role to use this command.', components: [] });

  const tagName = authorTagMatch.name.replace(/^\[(.+)\]$/, '$1').replace(/ Marshal$/, '');

  if (!hasPermissionForRank(interaction.member, newRank))
    return interaction.update({ content: 'You do not have permission to assign this rank.', components: [] });

  // Odczytaj starą rangę
  let oldRank = null;
  for (const rank of ['R1', 'R2', 'R3', 'R4']) {
    if (target.roles.cache.some(r => r.name === rank)) oldRank = rank;
  }

  // Usuwamy wszystkie stare rangi/tagi
  await removeAllAllianceRoles(target, interaction.guild);

  // Odczekaj, aż Discord odświeży role (ważne!)
  await sleep(700);

  // POBIERZ usera na świeżo z API (nie z cache!)
  const freshTarget = await interaction.guild.members.fetch(target.id);

  // Przygotuj role do nadania
  const rankRole = interaction.guild.roles.cache.find(r => r.name === newRank);
  if (!rankRole)
    return interaction.update({ content: `Role "${newRank}" not found. Inform the admin.`, components: [] });

  const tagRoleName = (newRank === 'R4') ? `[${tagName}] Marshal` : `[${tagName}]`;
  const tagRole = interaction.guild.roles.cache.find(r => r.name === tagRoleName);
  if (!tagRole)
    return interaction.update({ content: `Role "${tagRoleName}" not found. Inform the admin.`, components: [] });

  await freshTarget.roles.add([rankRole, tagRole]);

  let actionStr = '';
  if (!oldRank) actionStr = 'Assigned';
  else if (rankToNumber(newRank) > rankToNumber(oldRank)) actionStr = 'Promoted';
  else if (rankToNumber(newRank) < rankToNumber(oldRank)) actionStr = 'Demoted';
  else actionStr = 'Updated';

  const embed = new EmbedBuilder()
    .setTitle('Alliance Rank Updated')
    .setDescription(
      `**${freshTarget.user.tag}**\n` +
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