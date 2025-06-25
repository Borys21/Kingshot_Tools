const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  ButtonBuilder,
  ButtonStyle,
  InteractionType
} = require('discord.js');
require('dotenv').config();

const roles = require('./roles'); // <--- cała logika ról w osobnym pliku

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commands = [
  new SlashCommandBuilder()
    .setName('addrank')
    .setDescription('Promote or demote a user to a chosen rank with your alliance tag')
    .addUserOption(option =>
      option.setName('target').setDescription('User to promote/demote').setRequired(true)
    )
];

const rest = new REST({ version: '10' }).setToken(token);

// === Rejestracja komend ===
(async () => {
  try {
    console.log('Registering slash commands...');
    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands }
    );
    console.log('Slash commands registered.');
  } catch (error) {
    console.error(error);
  }
})();

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

async function replyE(interaction, options) {
  options.ephemeral = true;
  return interaction.reply(options);
}
async function updateE(interaction, options) {
  options.ephemeral = true;
  return interaction.update(options);
}

// --- Własna lista rang do wyboru w menu ---
const rankOptions = [
  { label: 'R1', value: 'R1', description: 'Rookie', emoji: '1️⃣' },
  { label: 'R2', value: 'R2', description: 'Member', emoji: '2️⃣' },
  { label: 'R3', value: 'R3', description: 'Officer', emoji: '3️⃣' },
  { label: 'R4', value: 'R4', description: 'Marshall', emoji: '4️⃣' }
];

client.on('interactionCreate', async interaction => {
  if (interaction.isChatInputCommand() && interaction.commandName === 'addrank') {
    // --- Zbieramy targeta ---
    const targetUser = interaction.options.getUser('target');
    if (!targetUser) return replyE(interaction, { content: 'No target user specified.' });

    // --- Tworzymy select menu z rangami ---
    const selectMenu = new StringSelectMenuBuilder()
      .setCustomId(`rank_select_${targetUser.id}`)
      .setPlaceholder('Select rank to assign')
      .addOptions(rankOptions);

    const row = new ActionRowBuilder().addComponents(selectMenu);

    await replyE(interaction, {
      content: `Choose a rank for <@${targetUser.id}> with your alliance tag:`,
      components: [row]
    });
  }

  // --- Obsługa wyboru rangi z select menu ---
  else if (interaction.isStringSelectMenu() && interaction.customId.startsWith('rank_select_')) {
    const targetId = interaction.customId.split('_').pop();
    const rank = interaction.values[0];

    // --- Sprawdzamy czy wywołujący ma uprawnienia i tag ---
    const target = await interaction.guild.members.fetch(targetId);
    if (!target) return updateE(interaction, { content: 'User not found.', components: [] });

    // Wywołujemy funkcję z roles.js
    return roles.handleRankAssignment(interaction, target, rank);
  }
});

client.login(token);