const { EmbedBuilder } = require('discord.js');

function hasPermissionForRank(member, targetRank) {
  if (member.roles.cache.some(r => r.name === 'R5')) return true;
  if (member.roles.cache.some(r => r.name === 'R4') && ['R1', 'R2', 'R3'].includes(targetRank)) return true;
  return false;
}

// Dodaje wybraną rangę i tag bez usuwania czegokolwiek
async function handleRankAssignment(interaction, target, newRank) {
  const authorTagMatch = interaction.member.roles.cache.find(r => /^\[.+\]$/.test(r.name));
  if (!authorTagMatch)
    return interaction.update({ content: 'You must have a [TAG] role to use this command.', components: [] });

  const tagName = authorTagMatch.name.replace(/^\[(.+)\]$/, '$1').replace(/ Marshal$/, '');

  if (!hasPermissionForRank(interaction.member, newRank))
    return interaction.update({ content: 'You do not have permission to assign this rank.', components: [] });

  // Dodaj tylko wybraną rangę
  const rankRole = interaction.guild.roles.cache.find(r => r.name === newRank);
  if (!rankRole)
    return interaction.update({ content: `Role "${newRank}" not found. Inform the admin.`, components: [] });

  // Dodaj tylko wybrany tag
  const tagRoleName = (newRank === 'R4') ? `[${tagName}] Marshal` : `[${tagName}]`;
  const tagRole = interaction.guild.roles.cache.find(r => r.name === tagRoleName);
  if (!tagRole)
    return interaction.update({ content: `Role "${tagRoleName}" not found. Inform the admin.`, components: [] });

  await target.roles.add([rankRole, tagRole]);

  const embed = new EmbedBuilder()
    .setTitle('Alliance Rank Added')
    .setDescription(
      `**${target.user.tag}**\n` +
      `**Tag:** [${tagName}]\n` +
      `**Added role:** ${newRank}${newRank === 'R4' ? ' Marshal' : ''}\n\n` +
      `Added choosen role and tag.`
    )
    .addFields(
      { name: 'Nowe role', value: `${rankRole.name}, ${tagRole.name}`, inline: true }
    )
    .setColor(0x57F287)
    .setTimestamp();

  return interaction.update({ embeds: [embed], components: [] });
}

// Usuwa tylko wybraną rangę i odpowiedni tag
async function handleRankRemoval(interaction, target, rankToRemove) {
  const authorTagMatch = interaction.member.roles.cache.find(r => /^\[.+\]$/.test(r.name));
  if (!authorTagMatch)
    return interaction.update({ content: 'You must have a [TAG] role to use this command.', components: [] });

  const tagName = authorTagMatch.name.replace(/^\[(.+)\]$/, '$1').replace(/ Marshal$/, '');

  // Usuń tylko wybraną rangę
  const rankRole = interaction.guild.roles.cache.find(r => r.name === rankToRemove);
  if (rankRole && target.roles.cache.has(rankRole.id)) {
    await target.roles.remove(rankRole);
  }

  // Usuń tylko odpowiedni tag
  let tagRoleName;
  if (rankToRemove === 'R4') {
    tagRoleName = `[${tagName}]`;
  } else {
    tagRoleName = `[${tagName}] Marshal`;
  }
  const tagRole = interaction.guild.roles.cache.find(r => r.name === tagRoleName);
  if (tagRole && target.roles.cache.has(tagRole.id)) {
    await target.roles.remove(tagRole);
  }

  const embed = new EmbedBuilder()
    .setTitle('Alliance Rank Removed')
    .setDescription(
      `**${target.user.tag}**\n` +
      `Removed role: ${rankToRemove} and ${tagRoleName}`
    )
    .setColor(0xED4245)
    .setTimestamp();

  return interaction.update({ embeds: [embed], components: [] });
}

module.exports = {
  handleRankAssignment,
  handleRankRemoval
};