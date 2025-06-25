const { EmbedBuilder } = require('discord.js');

function hasPermissionForRank(member, targetRank) {
  if (member.roles.cache.some(r => r.name === 'R5')) return true;
  if (member.roles.cache.some(r => r.name === 'R4') && ['R1', 'R2', 'R3'].includes(targetRank)) return true;
  return false;
}

async function handleRankAssignment(interaction, target, newRank) {
  const authorTagMatch = interaction.member.roles.cache.find(r => /^\[.+\]$/.test(r.name));
  if (!authorTagMatch)
    return interaction.reply({ content: 'You must have a [TAG] role to use this command.', ephemeral: true });

  const tagName = authorTagMatch.name.replace(/^\[(.+)\]$/, '$1').replace(/ Marshal$/, '');

  if (!hasPermissionForRank(interaction.member, newRank))
    return interaction.reply({ content: 'You do not have permission to assign this rank.', ephemeral: true });

  // Add only the selected rank
  const rankRole = interaction.guild.roles.cache.find(r => r.name === newRank);
  if (!rankRole)
    return interaction.reply({ content: `Role "${newRank}" not found. Inform the admin.`, ephemeral: true });

  // Add only the selected tag
  const tagRoleName = (newRank === 'R4') ? `[${tagName}] Marshal` : `[${tagName}]`;
  const tagRole = interaction.guild.roles.cache.find(r => r.name === tagRoleName);
  if (!tagRole)
    return interaction.reply({ content: `Role "${tagRoleName}" not found. Inform the admin.`, ephemeral: true });

  await target.roles.add([rankRole, tagRole]);

  const embed = new EmbedBuilder()
    .setTitle('Alliance Rank Assigned')
    .setDescription(
      `**${target.user.tag}**\n` +
      `**Tag:** [${tagName}]\n` +
      `**Assigned rank:** ${newRank}${newRank === 'R4' ? ' Marshal' : ''}\n\n` +
      `Selected rank and tag have been assigned.`
    )
    .addFields(
      { name: 'New roles', value: `${rankRole.name}, ${tagRole.name}`, inline: true }
    )
    .setColor(0x57F287)
    .setTimestamp();

  return interaction.reply({ embeds: [embed], ephemeral: true });
}

async function handleRemoveAllAllianceRoles(interaction, target) {
  const rolesToRemove = target.roles.cache
    .filter(r =>
      ['R1', 'R2', 'R3', 'R4'].includes(r.name) ||
      /^\[.+\]$/.test(r.name) ||
      /^\[.+\] Marshal$/.test(r.name)
    )
    .map(r => r.id);

  if (rolesToRemove.length > 0) {
    await target.roles.remove(rolesToRemove);
  }

  const embed = new EmbedBuilder()
    .setTitle('Alliance Roles Removed')
    .setDescription(
      `**${target.user.tag}**\n` +
      `All alliance roles (ranks and tags) have been removed.`
    )
    .setColor(0xED4245)
    .setTimestamp();

  return interaction.reply({ embeds: [embed], ephemeral: true });
}

module.exports = {
  handleRankAssignment,
  handleRemoveAllAllianceRoles
};