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

// === Shard costs ===
const tierShardCosts = {
  0: [1, 1, 2, 2, 2, 2],
  1: [5, 5, 5, 5, 5, 15],
  2: [15, 15, 15, 15, 15, 40],
  3: [40, 40, 40, 40, 40, 100],
  4: [100, 100, 100, 100, 100, 100]
};

// === Star & Tier Options ===
const currentStarOptions = [
  { label: '‎', value: '0', emoji: { id: '1384252667345244190', name: 'star0' } },
  { label: '‎', value: '1', emoji: { id: '1384252667613675661', name: 'star1' } },
  { label: '‎', value: '2', emoji: { id: '1384252667613675661', name: 'star2' } },
  { label: '‎', value: '3', emoji: { id: '1384252668259733524', name: 'star3' } },
  { label: '‎', value: '4', emoji: { id: '1384252691236130967', name: 'star4' } },
];

const targetStarOptions = [
  { label: '‎', value: '1', emoji: { id: '1384252667345244190', name: 'star1' } },
  { label: '‎', value: '2', emoji: { id: '1384252667613675661', name: 'star2' } },
  { label: '‎', value: '3', emoji: { id: '1384252668259733524', name: 'star3' } },
  { label: '‎', value: '4', emoji: { id: '1384252691236130967', name: 'star4' } },
  { label: '‎', value: '5', emoji: { id: '1384252691487658144', name: 'star5' } },
];

const tierOptions = [
  { label: '‎', value: '0', emoji: { id: '1384252667345244190', name: 'star0' } },
  { label: '‎', value: '1', emoji: { id: '1384252691768934461', name: 'tier1' } },
  { label: '‎', value: '2', emoji: { id: '1384252691978522815', name: 'tier2' } },
  { label: '‎', value: '3', emoji: { id: '1384252719107412029', name: 'tier3' } },
  { label: '‎', value: '4', emoji: { id: '1384252719543488552', name: 'tier4' } },
  { label: '‎', value: '5', emoji: { id: '1384252720252321892', name: 'tier5' } },
];

// === Slash Commands ===
const commands = [
  new SlashCommandBuilder()
    .setName('cshards')
    .setDescription('Calculate shards using interactive menu')
    .toJSON(),

  new SlashCommandBuilder()
    .setName('addtag')
    .setDescription('Add your alliance TAG to a user')
    .addUserOption(opt =>
      opt.setName('member')
        .setDescription('Select member')
        .setRequired(true)
    )
    .toJSON(),

  new SlashCommandBuilder()
    .setName('addr4')
    .setDescription('Add R4 rank to a user')
    .addUserOption(opt =>
      opt.setName('member')
        .setDescription('Select member')
        .setRequired(true)
    )
    .toJSON(),
];

// === Register Commands ===
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

// === On Ready ===
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// === Helper Functions ===
function createSelectMenu(customId, placeholder, options) {
  return new StringSelectMenuBuilder()
    .setCustomId(customId)
    .setPlaceholder(placeholder)
    .addOptions(options.map(opt => ({
      label: opt.label,
      value: opt.value,
      emoji: opt.emoji
    })));
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
  return new EmbedBuilder()
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
}

// === Interaction Handler ===
const userSelections = new Map();

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'cshards') {
    const row1 = new ActionRowBuilder().addComponents(createSelectMenu('currentStar', 'Select Current Star', currentStarOptions));
    const row2 = new ActionRowBuilder().addComponents(createSelectMenu('currentTier', 'Select Current Tier', tierOptions));
    const row3 = new ActionRowBuilder().addComponents(createSelectMenu('targetStar', 'Select Target Star', targetStarOptions));
    const buttonRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('calculateShards')
        .setLabel('Calculate')
        .setStyle(ButtonStyle.Primary)
    );
    userSelections.set(interaction.user.id, { currentStar: null, currentTier: null, targetStar: null, ownedShards: 0 });
    await interaction.reply({
      content: 'Choose your current star, tier, target star, then press Calculate.',
      components: [row1, row2, row3, buttonRow],
      ephemeral: true
    });
  }

  else if (interaction.commandName === 'addtag') {
    const member = interaction.options.getMember('member');
    const author = interaction.member;
    const isLeader = author.roles.cache.some(r => r.name.includes('Leader'));
    if (!isLeader) {
      await interaction.reply({ content: '❌ You must be a Leader.', ephemeral: true });
      return;
    }
    const tagRole = author.roles.cache.find(r => r.name.startsWith('[') && r.name.endsWith(']'));
    if (!tagRole) {
      await interaction.reply({ content: '❌ Cannot detect your [TAG] role.', ephemeral: true });
      return;
    }
    const guildTag = interaction.guild.roles.cache.find(r => r.name === tagRole.name);
    if (!guildTag) {
      await interaction.reply({ content: `❌ Tag ${tagRole.name} not found.`, ephemeral: true });
      return;
    }
    await member.roles.add(guildTag);
    await interaction.reply({ content: `✅ Added ${guildTag.name} to ${member.user.tag}` });
  }

  else if (interaction.commandName === 'addr4') {
    const member = interaction.options.getMember('member');
    const author = interaction.member;
    const isLeader = author.roles.cache.some(r => r.name.includes('Leader'));
    if (!isLeader) {
      await interaction.reply({ content: '❌ You must be a Leader.', ephemeral: true });
      return;
    }
    const r4Role = interaction.guild.roles.cache.find(r => r.name === 'R4');
    if (!r4Role) {
      await interaction.reply({ content: '❌ R4 role not found.', ephemeral: true });
      return;
    }
    await member.roles.add(r4Role);
    await interaction.reply({ content: `✅ Added R4 to ${member.user.tag}` });
  }

});

client.on('interactionCreate', async interaction => {
  if (interaction.isStringSelectMenu()) {
    const selection = userSelections.get(interaction.user.id) || { currentStar: null, currentTier: null, targetStar: null, ownedShards: 0 };
    if (interaction.customId === 'currentStar') selection.currentStar = interaction.values[0];
    else if (interaction.customId === 'currentTier') selection.currentTier = interaction.values[0];
    else if (interaction.customId === 'targetStar') selection.targetStar = interaction.values[0];
    userSelections.set(interaction.user.id, selection);
    await interaction.update({
      content: `Updated! Star: ${selection.currentStar || '-'}, Tier: ${selection.currentTier || '-'}, Target: ${selection.targetStar || '-'}.`,
      components: interaction.message.components,
      ephemeral: true
    });
  } else if (interaction.isButton()) {
    if (interaction.customId === 'calculateShards') {
      const selection = userSelections.get(interaction.user.id);
      if (!selection || !selection.currentStar || !selection.currentTier || !selection.targetStar) {
        await interaction.reply({ content: 'Please complete all selections.', ephemeral: true });
        return;
      }
      if (parseInt(selection.targetStar) <= parseInt(selection.currentStar)) {
        await interaction.reply({ content: 'Target Star must be greater than Current Star!', ephemeral: true });
        return;
      }
      const modal = new ModalBuilder()
        .setCustomId('shardsModal')
        .setTitle('Enter Owned Shards')
        .addComponents(new ActionRowBuilder().addComponents(
          new TextInputBuilder()
            .setCustomId('ownedShardsInput')
            .setLabel('Number of Owned Shards')
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
        ));
      await interaction.showModal(modal);
    }
  } else if (interaction.type === InteractionType.ModalSubmit) {
    if (interaction.customId === 'shardsModal') {
      const ownedShardsStr = interaction.fields.getTextInputValue('ownedShardsInput');
      const ownedShards = parseInt(ownedShardsStr, 10);
      if (isNaN(ownedShards) || ownedShards < 0) {
        await interaction.reply({ content: 'Invalid number.', ephemeral: true });
        return;
      }
      const selection = userSelections.get(interaction.user.id);
      if (!selection) return;
      selection.ownedShards = ownedShards;
      userSelections.set(interaction.user.id, selection);
      const embed = createResultEmbed(selection);
      await interaction.reply({ embeds: [embed], ephemeral: true });
    }
  }
});

client.login(token);
