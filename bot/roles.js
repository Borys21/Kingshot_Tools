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
function getAllTagRankNames(tag) {
  return [
    `R1 ${tag}`,
    `R2 ${tag}`,
    `R3 ${tag}`,
    `R4 ${tag} Marshal`
  ];
}

/**
 * Usuwa wszystkie role R1-R4 + [TAG] Marshal z targeta
 */
async function removeAllTagRanks(member, tag, guild) {
  const names = getAllTagRankNames(tag);
  for (const roleName of names) {
    const role = guild.roles.cache.find(r => r.name === roleName);
    if (role && member.roles.cache.has(role.id)) {
      await member.roles.remove(role);
    }
  }
}

/**
 * Główna funkcja do przydzielania rangi
 */
async function handleRankAssignment(interaction, target, newRank) {
  // Pobierz tag w formacie [TAG] osoby przydzielającej
  const authorTagRole = interaction.member.roles.cache.find(r => /^\[.+\]$/.test(r.name));
  if (!authorTagRole)
    return interaction.update({ content: 'You must have a [TAG] role to use this command.', components: [] });

  // Uprawnienia
  if (!hasPermissionForRank(interaction.member, newRank))
    return interaction.update({ content: 'You do not have permission to assign this rank.', components: [] });

  // Odczytaj dotychczasową rangę targeta dla tego tagu (jeśli była)
  const possibleRanks = getAllTagRankNames(authorTagRole.name);
  let oldRank = null;
  for (const rankName of possibleRanks) {
    if (target.roles.cache.some(r => r.name === rankName)) {
      if (rankName.startsWith('R4')) oldRank = 'R4';
      else if (rankName.startsWith('R3')) oldRank = 'R3';
      else if (rankName.startsWith('R2')) oldRank = 'R2';
      else if (rankName.startsWith('R1')) oldRank = 'R1';
    }
  }

  // Usuń WSZYSTKO z targeta dla tego taga
  await removeAllTagRanks(target, authorTagRole.name, interaction.guild);

  // Przygotuj nazwę nowej roli
  const newRoleName = (newRank === 'R4')
    ? `R4 ${authorTagRole.name} Marshal`
    : `${newRank} ${authorTagRole.name}`;

  const newRole = interaction.guild.roles.cache.find(r => r.name === newRoleName);
  if (!newRole)
    return interaction.update({ content: `Role "${newRoleName}" not found. Inform the admin.`, components: [] });

  await target.roles.add(newRole);

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
      `**Tag:** ${authorTagRole.name}\n` +
      `**${actionStr} to:** ${newRoleName}\n\n` +
      `All previous tag ranks removed.`
    )
    .addFields(
      { name: 'New Rank', value: newRoleName, inline: true }
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