const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ButtonBuilder,
  ButtonStyle,
  InteractionType
} = require('discord.js');
require('dotenv').config();

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const baseIconUrl = 'https://borys21.github.io/Kingshot_Tools/calculators/hero-star-shard-calculator/icons/';

const tierShardCosts = {
  0: [1, 1, 2, 2, 2, 2],
  1: [5, 5, 5, 5, 5, 15],
  2: [15, 15, 15, 15, 15, 40],
  3: [40, 40, 40, 40, 40, 100],
  4: [100, 100, 100, 100, 100, 100]
};

const currentStarOptions = [
  { label: '‎', value: '0', emoji: { id: '1378770593389744218', name: 'star0' } },
  { label: '‎', value: '1', emoji: { id: '1378770594719469641', name: 'star1' } },
  { label: '‎', value: '2', emoji: { id: '1378770597332517025', name: 'star2' } },
  { label: '‎', value: '3', emoji: { id: '1378770599740047662', name: 'star3' } },
  { label: '‎', value: '4', emoji: { id: '1378770602185195622', name: 'star4' } },
];

const targetStarOptions = [
  { label: '‎', value: '1', emoji: { id: '1378770594719469641', name: 'star1' } },
  { label: '‎', value: '2', emoji: { id: '1378770597332517025', name: 'star2' } },
  { label: '‎', value: '3', emoji: { id: '1378770599740047662', name: 'star3' } },
  { label: '‎', value: '4', emoji: { id: '1378770602185195622', name: 'star4' } },
  { label: '‎', value: '5', emoji: { id: '1378770604479610970', name: 'star5' } },
];

const tierOptions = [
  { label: '‎', value: '0', emoji: { id: '1378770593389744218', name: 'star0' } },
  { label: '‎', value: '1', emoji: { id: '1378770606417514507', name: 'tier1' } },
  { label: '‎', value: '2', emoji: { id: '1378770608200093898', name: 'tier2' } },
  { label: '‎', value: '3', emoji: { id: '1378770609873490091', name: 'tier3' } },
  { label: '‎', value: '4', emoji: { id: '1378770611807191040', name: 'tier4' } },
  { label: '‎', value: '5', emoji: { id: '1378770613271007233', name: 'tier5' } },
];

const userSelections = new Map();

const commands = [
  new SlashCommandBuilder()
    .setName('cshards')
    .setDescription('Calculate shards using interactive menu'),
  new SlashCommandBuilder()
    .setName('addtag')
    .setDescription('Add an alliance tag to a member')
    .addUserOption(option => 
      option.setName('target').setDescription('User to give the tag to').setRequired(true)
    )
    .addStringOption(option => 
      option.setName('tag').setDescription('Tag to give').setRequired(true)
    ),
  new SlashCommandBuilder()
    .setName('addr4')
    .setDescription('Add the R4 role to a member')
    .addUserOption(option => 
      option.setName('target').setDescription('User to give R4 to').setRequired(true)
    )
];

const rest = new REST({ version: '10' }).setToken(token);

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

// === Helper ===
async function replyE(interaction, options) {
  options.ephemeral = true;
  return interaction.reply(options);
}

async function updateE(interaction, options) {
  options.ephemeral = true;
  return interaction.update(options);
}

function createSelectMenu(customId, placeholder, options) {
  return new StringSelectMenuBuilder()
    .setCustomId(customId)
    .setPlaceholder(placeholder)
    .addOptions(
      options.map(opt => ({
        label: opt.label,
        value: opt.value,
        emoji: opt.emoji
      }))
    );
}

function calculateNeededShards(currentStar, currentTier, targetStar, ownedShards) {
  let total = 0;
  for (let star = parseInt(currentStar); star < parseInt(targetStar); star++) {
    const startTier = star === parseInt(currentStar) ? parseInt(currentTier) : 0;
    for (let tier = startTier; tier < 6; tier++) {
      total += tierShardCosts[star][tier];
    }
  }
  const missing = Math.max(total - ownedShards, 0);
  const percent = total > 0 ? (ownedShards / total) * 100 : 0;
  return { total, missing, percent };
}

function createResultEmbed(selection) {
  const shardIcon = baseIconUrl + 'shard-mythic.png';
  const calc = calculateNeededShards(selection.currentStar, selection.currentTier, selection.targetStar, selection.ownedShards);
  const embed = new EmbedBuilder()
    .setTitle('Kingshot Shard Calculator')
    .setThumbnail(shardIcon)
    .addFields(
      { name: 'Current Star', value: `${selection.currentStar}`, inline: true },
      { name: 'Current Tier', value: `${selection.currentTier}`, inline: true },
      { name: 'Target Star', value: `${selection.targetStar}`, inline: true },
      { name: 'Owned Shards', value: `${selection.ownedShards}`, inline: true },
      { name: 'Total Shards Needed', value: `${calc.total}`, inline: true },
      { name: 'Missing Shards', value: `${calc.missing}`, inline: true },
      { name: 'Progress', value: `${calc.percent.toFixed(2)}%`, inline: true },
    )
    .setColor(0xFFC857);
  return embed;
}

client.on('interactionCreate', async interaction => {
  if (interaction.isChatInputCommand()) {
    if (interaction.commandName === 'cshards') {
      const row1 = new ActionRowBuilder().addComponents(createSelectMenu('currentStar', 'Select Current Star', currentStarOptions));
      const row2 = new ActionRowBuilder().addComponents(createSelectMenu('currentTier', 'Select Current Tier', tierOptions));
      const row3 = new ActionRowBuilder().addComponents(createSelectMenu('targetStar', 'Select Target Star', targetStarOptions));
      const buttonRow = new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId('calculateShards').setLabel('Calculate').setStyle(ButtonStyle.Primary)
      );
      userSelections.set(interaction.user.id, { currentStar: null, currentTier: null, targetStar: null, ownedShards: 0 });
      await replyE(interaction, {
        content: 'Choose your current star, current tier, target star, then press Calculate and enter your owned shards.',
        components: [row1, row2, row3, buttonRow]
      });
    }
  } else if (interaction.isStringSelectMenu()) {
    const selection = userSelections.get(interaction.user.id) || { currentStar: null, currentTier: null, targetStar: null, ownedShards: 0 };
    if (interaction.customId === 'currentStar') selection.currentStar = interaction.values[0];
    else if (interaction.customId === 'currentTier') selection.currentTier = interaction.values[0];
    else if (interaction.customId === 'targetStar') selection.targetStar = interaction.values[0];
    userSelections.set(interaction.user.id, selection);
    await updateE(interaction, {
      content: `Selection updated! Current Star: ${selection.currentStar || '-'}, Current Tier: ${selection.currentTier || '-'}, Target Star: ${selection.targetStar || '-'}. Now press Calculate and enter owned shards.`,
      components: interaction.message.components
    });
  } else if (interaction.isButton()) {
    if (interaction.customId === 'calculateShards') {
      const selection = userSelections.get(interaction.user.id);
      if (!selection || !selection.currentStar || !selection.currentTier || !selection.targetStar)
        return replyE(interaction, { content: 'Please make all selections first.' });
      if (parseInt(selection.targetStar) <= parseInt(selection.currentStar))
        return replyE(interaction, { content: 'Target Star must be **greater** than Current Star!' });
      const modal = new ModalBuilder().setCustomId('shardsModal').setTitle('Enter Owned Shards');
      const shardsInput = new TextInputBuilder()
        .setCustomId('ownedShardsInput').setLabel('Number of Owned Shards')
        .setStyle(TextInputStyle.Short).setPlaceholder('Enter number here').setRequired(true);
      modal.addComponents(new ActionRowBuilder().addComponents(shardsInput));
      await interaction.showModal(modal); // Modal nie ma ephemeral — działa inaczej
    }
  } else if (interaction.type === InteractionType.ModalSubmit) {
    if (interaction.customId === 'shardsModal') {
      const ownedShards = parseInt(interaction.fields.getTextInputValue('ownedShardsInput'), 10);
      if (isNaN(ownedShards) || ownedShards < 0) return replyE(interaction, { content: 'Please enter a valid non-negative number.' });
      const selection = userSelections.get(interaction.user.id);
      if (!selection || !selection.currentStar || !selection.currentTier || !selection.targetStar)
        return replyE(interaction, { content: 'Please make all selections first.' });
      if (parseInt(selection.targetStar) <= parseInt(selection.currentStar))
        return replyE(interaction, { content: 'Target Star must be **greater** than Current Star!' });
      selection.ownedShards = ownedShards;
      userSelections.set(interaction.user.id, selection);
      await replyE(interaction, { embeds: [createResultEmbed(selection)] });
    }
  }
});

client.login(token);
