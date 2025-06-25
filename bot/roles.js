const { EmbedBuilder } = require('discord.js');

function hasPermissionForRank(member, targetRank) {
  if (member.roles.cache.some(r => r.name === 'R5')) return true;
  if (member.roles.cache.some(r => r.name === 'R4') && ['R1', 'R2', 'R3'].includes(targetRank)) return true;
  return false;
}

// Usuwanie WSZYSTKICH sojuszowych ról (nie używaj tej funkcji w flow nadawania rangi!)
// Pozostawiam dla innych zastosowań administracyjnych
async function removeAllAllianceRoles(member, guild) {
  const rolesToRemove = [];
  for (const name of ['R1', 'R2', 'R3', 'R4']) {
    const role = guild.roles.cache.find(r => r.name === name);
    if (role && member.roles.cache.has(role.id)) rolesToRemove.push(role.id);
  }
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

  // Przygotuj role do nadania
  const rankRole = interaction.guild.roles.cache.find(r => r.name === newRank);
  if (!rankRole)
    return interaction.update({ content: `Role "${newRank}" not found. Inform the admin.`, components: [] });

  const tagRoleName = (newRank === 'R4') ? `[${tagName}] Marshal` : `[${tagName}]`;
  const tagRole = interaction.guild.roles.cache.find(r => r.name === tagRoleName);
  if (!tagRole)
    return interaction.update({ content: `Role "${tagRoleName}" not found. Inform the admin.`, components: [] });

  // Nadaj nowe role
  await target.roles.add([rankRole, tagRole]);

  // Odczekaj, aż Discord odświeży role
  await sleep(500);

  // Usuń wszystkie inne role sojuszowe poza właśnie nadanymi
  const rolesToRemove = [];
  for (const name of ['R1', 'R2', 'R3', 'R4']) {
    const role = interaction.guild.roles.cache.find(r => r.name === name);
    if (role && target.roles.cache.has(role.id) && role.id !== rankRole.id) rolesToRemove.push(role.id);
  }
  target.roles.cache.forEach(r => {
    if (
      (/^\[.+\]$/.test(r.name) || /^\[.+\] Marshal$/.test(r.name)) &&
      r.id !== tagRole.id
    ) {
      rolesToRemove.push(r.id);
    }
  });
  if (rolesToRemove.length > 0) {
    await target.roles.remove(rolesToRemove);
  }

  // Odczytaj starą rangę (najwyższą posiadaną przed zmianą)
  let oldRank = ['R4', 'R3', 'R2', 'R1'].find(rank => target.roles.cache.some(r => r.name === rank)) || null;

  let actionStr = '';
  if (!oldRank) actionStr = 'Assigned';
  else if (rankToNumber(newRank) > rankToNumber(oldRank)) actionStr = 'Promoted';
  else if (rankToNumber(newRank) < rankToNumber(oldRank)) actionStr = 'Demoted';
  else actionStr = 'Updated';

  const embed = new EmbedBuilder()
    .setTitle('Alliance Rank Updated')
    .setDescription(
      `**${target.user.tag}**\n` +
      `**Tag:** [${tagName}]\n` +
      `**${actionStr} to:** ${newRank}${newRank === 'R4' ? ' Marshal' : ''}\n\n` +
      `All previous alliance tag/rank roles removed (except the new ones).`
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