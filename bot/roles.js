const { EmbedBuilder } = require('discord.js');

/**
 * Sprawdza, czy wywołujący ma uprawnienia do nadania danej rangi.
 * R5 nadaje każdą, R4 do R3 włącznie.
 */
function hasPermissionForRank(member, targetRank) {
  if (member.roles.cache.some(r => r.name === 'R5')) return true;
  if (member.roles.cache.some(r => r.name === 'R4') && ['R1', 'R2', 'R3'].includes(targetRank)) return true;
  return false;
}

/**
 * Zwraca obiekt z nazwami wszystkich ról R1-R4 + [TAG] i R4 + [TAG] Marshall
 */
function getAllTagRankNames(tag) {
  return [
    `R1 ${tag}`,
    `R2 ${tag}`,
    `R3 ${tag}`,
    `R4 ${tag}`,
    `R4 ${tag} Marshall`
  ];
}

/**
 * Usuwa wszystkie role R1-R4 + [TAG] i R4 + [TAG] Marshall
 */
async function removeAllTagRanks(member, tag, guild) {
  const rolesToRemove = getAllTagRankNames(tag)
    .map(name => guild.roles.cache.find(r => r.name === name))
    .filter(role => role && member.roles.cache.has(role.id));

  for (const role of rolesToRemove) {
    await member.roles.remove(role);
  }
}

/**
 * Główna funkcja: obsługa nadania rangi z awansem/degradacją, permisje, Marshall, embed.
 */
async function handleRankAssignment(interaction, target, newRank) {
  // --- Pobieramy tag wywołującego w formacie [TAG] ---
  const authorTagRole = interaction.member.roles.cache.find(r => /^\[.+\]$/.test(r.name));
  if (!authorTagRole)
    return interaction.update({ content: 'You must have a [TAG] role to use this command.', components: [] });

  // --- Uprawnienia ---
  if (!hasPermissionForRank(interaction.member, newRank))
    return interaction.update({ content: 'You do not have permission to assign this rank.', components: [] });

  // --- Czy target ma ten sam tag ---
  const targetTagRole = target.roles.cache.find(r => r.name === authorTagRole.name);
  if (!targetTagRole)
    return interaction.update({ content: `Target user does not have your tag (${authorTagRole.name}).`, components: [] });

  // --- Rozpoznanie starej rangi ---
  const oldRankRole = getAllTagRankNames(authorTagRole.name).find(roleName =>
    target.roles.cache.some(r => r.name === roleName)
  );
  let oldRank = null;
  if (oldRankRole) {
    if (oldRankRole.includes('Marshall')) oldRank = 'R4';
    else oldRank = oldRankRole.split(' ')[0]; // 'R1', 'R2', ...
  }

  // --- Usuwamy WSZYSTKIE role tagowe R1-R4 (+ Marshall) ---
  await removeAllTagRanks(target, authorTagRole.name, interaction.guild);

  // --- Nowa rola do nadania ---
  const giveMarshall = (newRank === 'R4');
  const newRoleName = giveMarshall
    ? `R4 ${authorTagRole.name} Marshall`
    : `${newRank} ${authorTagRole.name}`;

  const newRole = interaction.guild.roles.cache.find(r => r.name === newRoleName);
  if (!newRole)
    return interaction.update({ content: `Role "${newRoleName}" not found. Inform the admin.`, components: [] });

  await target.roles.add(newRole);

  // --- Komunikat o awansie/degradacji ---
  let actionStr = '';
  if (!oldRank) actionStr = 'Assigned';
  else if (rankToNumber(newRank) > rankToNumber(oldRank)) actionStr = 'Promoted';
  else if (rankToNumber(newRank) < rankToNumber(oldRank)) actionStr = 'Demoted';
  else actionStr = 'Updated';

  // --- Finalny embed ---
  const embed = new EmbedBuilder()
    .setTitle('Alliance Rank Updated')
    .setDescription(
      `**${target.user.tag}**\n` +
      `**Tag:** ${authorTagRole.name}\n` +
      `**${actionStr} to:** ${giveMarshall ? 'R4 Marshall' : newRoleName.split(' ')[0]}\n\n` +
      `All previous tag ranks removed.`
    )
    .addFields(
      { name: 'New Rank', value: newRoleName, inline: true }
    )
    .setColor(actionStr === 'Promoted' ? 0x57F287 : (actionStr === 'Demoted' ? 0xED4245 : 0xFFC857))
    .setTimestamp();

  return interaction.update({ embeds: [embed], components: [] });
}

// --- Pomocnik: przeliczanie rangi na liczbę (do porównywania) ---
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