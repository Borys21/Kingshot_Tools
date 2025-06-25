const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

function hasPermissionForRank(member, targetRank) {
  if (member.roles.cache.some(r => r.name === 'R5')) return true;
  if (member.roles.cache.some(r => r.name === 'R4') && ['R1', 'R2', 'R3'].includes(targetRank)) return true;
  return false;
}

// Dodawanie rangi i tagu (na twardo)
async function handleRankAssignment(interaction, target, newRank) {
  const authorTagMatch = interaction.member.roles.cache.find(r => /^\[.+\]$/.test(r.name));
  if (!authorTagMatch)
    return interaction.update({ content: 'You must have a [TAG] role to use this command.', components: [] });

  const tagName = authorTagMatch.name.replace(/^\[(.+)\]$/, '$1').replace(/ Marshal$/, '');

  if (!hasPermissionForRank(interaction.member, newRank))
    return interaction.update({ content: 'You do not have permission to assign this rank.', components: [] });

  // Usuń WSZYSTKIE stare role sojusznicze (R1-R4, [TAG], [TAG] Marshal)
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

  // Dodaj nowe role
  const rankRole = interaction.guild.roles.cache.find(r => r.name === newRank);
  if (!rankRole)
    return interaction.update({ content: `Role "${newRank}" not found. Inform the admin.`, components: [] });

  const tagRoleName = (newRank === 'R4') ? `[${tagName}] Marshal` : `[${tagName}]`;
  const tagRole = interaction.guild.roles.cache.find(r => r.name === tagRoleName);
  if (!tagRole)
    return interaction.update({ content: `Role "${tagRoleName}" not found. Inform the admin.`, components: [] });

  await target.roles.add([rankRole, tagRole]);

  const embed = new EmbedBuilder()
    .setTitle('Alliance Rank Updated')
    .setDescription(
      `**${target.user.tag}**\n` +
      `**Tag:** [${tagName}]\n` +
      `**Nowa ranga:** ${newRank}${newRank === 'R4' ? ' Marshal' : ''}\n\n` +
      `Poprzednie role sojusznicze zostały usunięte, nowe zostały nadane.`
    )
    .addFields(
      { name: 'Nowe role', value: `${rankRole.name}, ${tagRole.name}`, inline: true }
    )
    .setColor(0xFFC857)
    .setTimestamp();

  return interaction.update({ embeds: [embed], components: [] });
}

// Usuwanie rangi i tagu według logiki wyboru
async function handleRankRemoval(interaction, target, rankToRemove) {
  const authorTagMatch = interaction.member.roles.cache.find(r => /^\[.+\]$/.test(r.name));
  if (!authorTagMatch)
    return interaction.update({ content: 'You must have a [TAG] role to use this command.', components: [] });

  const tagName = authorTagMatch.name.replace(/^\[(.+)\]$/, '$1').replace(/ Marshal$/, '');

  // Usuń wybraną rangę
  const rankRole = interaction.guild.roles.cache.find(r => r.name === rankToRemove);
  if (rankRole && target.roles.cache.has(rankRole.id)) {
    await target.roles.remove(rankRole);
  }

  // Usuń odpowiedni tag według logiki:
  // Jeśli usuwasz R4 -> usuń [TAG], jeśli usuwasz R1-R3 -> usuń [TAG] Marshal
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
      `Usunięto: ${rankToRemove} oraz ${tagRoleName}`
    )
    .setColor(0xED4245)
    .setTimestamp();

  return interaction.update({ embeds: [embed], components: [] });
}

// Przykład do użycia w obsłudze interakcji (np. w bot.js)
// Select menu do wyboru akcji
const actionRow = new ActionRowBuilder().addComponents(
  new StringSelectMenuBuilder()
    .setCustomId('rankAction')
    .setPlaceholder('Wybierz akcję')
    .addOptions([
      { label: 'Dodaj rangę', value: 'add', emoji: '➕' },
      { label: 'Usuń rangę', value: 'remove', emoji: '➖' }
    ])
);

// Select menu do wyboru rangi
const rankRow = new ActionRowBuilder().addComponents(
  new StringSelectMenuBuilder()
    .setCustomId('rankSelect')
    .setPlaceholder('Select rank')
    .addOptions([
      { label: 'R1', value: 'R1' },
      { label: 'R2', value: 'R2' },
      { label: 'R3', value: 'R3' },
      { label: 'R4', value: 'R4' }
    ])
);

// Wysyłasz oba selecty w jednej wiadomości
await interaction.reply({
  content: `Choose what you want to do for <@${target.id}> (uses your [TAG]):`,
  components: [actionRow, rankRow],
  ephemeral: true
});

module.exports = {
  handleRankAssignment,
  handleRankRemoval
};