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

// DODAJ Express
const express = require('express');
const cors = require('cors');

const roles = require('./roles');

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const API_KEY = process.env.DASHBOARD_API_KEY; // NOWA ZMIENNA
const PORT = process.env.PORT || 3000;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Express setup
const app = express();
app.use(cors({
  origin: function (origin, callback) {
    // Pozwól na null origin (file://) i wszystkie inne
    callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'x-api-key', 'Authorization'],
  credentials: false,
  optionsSuccessStatus: 200
}));
app.use(express.json({ limit: '50mb' }));

// DODAJ timeout protection:
app.use((req, res, next) => {
  res.setTimeout(30000); // 30 sekund timeout
  next();
});

// API Key middleware
function authenticateApiKey(req, res, next) {
  const apiKey = req.headers['x-api-key'] || req.query.apikey;
  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({ error: 'Unauthorized - Invalid API key' });
  }
  next();
}

const baseIconUrl = 'https://borys21.github.io/Kingshot_Tools/calculators/hero-star-shard-calculator/icons/';
const heroBaseUrl = 'https://borys21.github.io/Kingshot_Tools/bot/heroes/';

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
    .setName('heroes')
    .setDescription('Show hero gallery'),
  new SlashCommandBuilder()
    .setName('rank')
    .setDescription('Assign an alliance rank + tag to a member')
    .addUserOption(option =>
      option.setName('target').setDescription('User to assign rank to').setRequired(true)
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
  
  // NAJPIERW uruchom serwer HTTP
  const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`🌐 Dashboard API running on port ${PORT}`);
    console.log(`🚀 Bot ready and API accessible!`);
    console.log(`🔗 Health check: http://localhost:${PORT}/health`);
  });
  
  // Lepszy graceful shutdown
  const gracefulShutdown = (signal) => {
    console.log(`🛑 ${signal} received, shutting down gracefully...`);
    server.close((err) => {
      if (err) {
        console.error('❌ Error during server shutdown:', err);
        process.exit(1);
      }
      console.log('✅ HTTP server closed');
      client.destroy();
      console.log('✅ Discord client destroyed');
      process.exit(0);
    });
  };
  
  process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
  process.on('SIGINT', () => gracefulShutdown('SIGINT'));
  
  // Keep alive endpoint dla Railway
  setInterval(() => {
    console.log(`💓 Heartbeat - Bot: ${client.isReady()}, Server: running`);
  }, 30000); // Co 30 sekund
});

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
      { name: 'Progress', value: `${calc.percent.toFixed(2)}%`, inline: true }
    )
    .setColor(0xFFC857);
}

// ====== ALLIANCE RANK SYSTEM ======
const rankOptions = [
  { label: 'R1', value: 'R1', description: 'Rookie', emoji: '1️⃣' },
  { label: 'R2', value: 'R2', description: 'Member', emoji: '2️⃣' },
  { label: 'R3', value: 'R3', description: 'Officer', emoji: '3️⃣' },
  { label: 'R4 Marshal', value: 'R4', description: 'Marshal (adds Marshal role)', emoji: '4️⃣' }
];

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

    else if (interaction.commandName === 'heroes') {
      const gen1 = ['Amadeus', 'Saul', 'Helga', 'Jabel'];
      const gen2 = ['Marlin', 'Hilde', 'Zoe'];

      const gen1Buttons = gen1.map(name =>
        new ButtonBuilder()
          .setCustomId(`hero_${name.toLowerCase()}`)
          .setLabel(name)
          .setStyle(ButtonStyle.Success)
      );

      const gen2Buttons = gen2.map(name =>
        new ButtonBuilder()
          .setCustomId(`hero_${name.toLowerCase()}`)
          .setLabel(name)
          .setStyle(ButtonStyle.Primary)
      );

      const row1 = new ActionRowBuilder().addComponents(gen1Buttons);
      const row2 = new ActionRowBuilder().addComponents(gen2Buttons);

      await replyE(interaction, {
        content: '🧙 **Heroes Knowledgebase**\nChoose a hero below:',
        components: [row1, row2]
      });
    }

    // ====== /rank ======
    else if (interaction.commandName === 'rank') {
      const targetUser = interaction.options.getUser('target');
      if (!targetUser) return replyE(interaction, { content: 'No target user specified.' });

      // Select menu for rank selection
      const selectMenu = new StringSelectMenuBuilder()
        .setCustomId(`rank_select_${targetUser.id}`)
        .setPlaceholder('Select alliance rank')
        .addOptions(rankOptions);

      const rowSelect = new ActionRowBuilder().addComponents(selectMenu);

      await interaction.reply({
        content: `Choose an alliance rank for <@${targetUser.id}> (uses your [TAG]):`,
        components: [rowSelect],
        ephemeral: true
      });
    }

  } else if (interaction.isButton()) {

    if (interaction.customId === 'calculateShards') {
      const selection = userSelections.get(interaction.user.id);
      if (!selection || !selection.currentStar || !selection.currentTier || !selection.targetStar)
        return replyE(interaction, { content: 'Please make all selections first.' });
      if (parseInt(selection.targetStar) <= parseInt(selection.currentStar))
        return replyE(interaction, { content: 'Target Star must be **greater** than Current Star!' });

      const modal = new ModalBuilder().setCustomId('shardsModal').setTitle('Enter Owned Shards');
      modal.addComponents(new ActionRowBuilder().addComponents(
        new TextInputBuilder()
          .setCustomId('ownedShardsInput')
          .setLabel('Number of Owned Shards')
          .setStyle(TextInputStyle.Short)
          .setPlaceholder('Enter number here')
          .setRequired(true)
      ));
      await interaction.showModal(modal);
    }

    else if (interaction.customId.startsWith('hero_')) {
      const heroName = interaction.customId.replace('hero_', '');
      const heroFile = heroName.charAt(0).toUpperCase() + heroName.slice(1) + '.png';
      const imageUrl = `${heroBaseUrl}${heroFile}`;
      const gen = ['amadeus', 'saul', 'helga', 'jabel'].includes(heroName) ? 'GEN 1' : 'GEN 2';

      const embed = new EmbedBuilder()
        .setTitle(`${heroFile.replace('.png', '')} — ${gen}`)
        .setDescription(`Here is some info for **${heroFile.replace('.png', '')}**.`)
        .setImage(imageUrl)
        .setColor(gen === 'GEN 1' ? 0x57F287 : 0x5865F2);

      await replyE(interaction, { embeds: [embed] });
    }

    // Alliance rank: Remove all
    else if (interaction.customId.startsWith('rank_removeall_')) {
      const targetId = interaction.customId.split('_').pop();
      const target = await interaction.guild.members.fetch(targetId);
      if (!target) return replyE(interaction, { content: 'User not found.', ephemeral: true });
      await roles.handleRemoveAllAllianceRoles(interaction, target);
    }

    // Alliance rank: Add selected
    else if (interaction.customId.startsWith('rank_add_')) {
      const selection = userSelections.get(interaction.user.id);
      if (!selection || !selection.rank)
        return replyE(interaction, { content: 'Please select a rank from the list first!', ephemeral: true });
      const target = await interaction.guild.members.fetch(selection.targetId);
      if (!target) return replyE(interaction, { content: 'User not found.', ephemeral: true });
      await roles.handleRankAssignment(interaction, target, selection.rank);
    }

  } else if (interaction.isStringSelectMenu()) {
    // ---- Obsługa select menu dla kalkulatora odłamków
    if (interaction.customId === 'currentStar' || interaction.customId === 'currentTier' || interaction.customId === 'targetStar') {
      const selection = userSelections.get(interaction.user.id) || { currentStar: null, currentTier: null, targetStar: null, ownedShards: 0 };
      if (interaction.customId === 'currentStar') selection.currentStar = interaction.values[0];
      else if (interaction.customId === 'currentTier') selection.currentTier = interaction.values[0];
      else if (interaction.customId === 'targetStar') selection.targetStar = interaction.values[0];
      userSelections.set(interaction.user.id, selection);
      await updateE(interaction, {
        content: `Selection updated! Current Star: ${selection.currentStar || '-'}, Current Tier: ${selection.currentTier || '-'}, Target Star: ${selection.targetStar || '-'}. Now press Calculate and enter owned shards.`,
        components: interaction.message.components
      });
      return;
    }

    // ---- Obsługa select menu dla /rank ----
    if (interaction.customId.startsWith('rank_select_')) {
      const rank = interaction.values[0];
      const targetId = interaction.customId.split('_').pop();
      const target = await interaction.guild.members.fetch(targetId);
      if (!target) return updateE(interaction, { content: 'User not found.', components: [] });

      // 1. Remove all alliance roles
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

      // 2. Wait 700ms
      await new Promise(res => setTimeout(res, 700));

      // 3. Add selected rank and tag
      await roles.handleRankAssignment(interaction, target, rank);
    }
  }

  else if (interaction.type === InteractionType.ModalSubmit && interaction.customId === 'shardsModal') {
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
});

// DODAJ: API endpoints (dodaj przed client.login(token))
app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Kingshot Tools API is running!',
    status: 'healthy',
    botReady: client.isReady(),
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.get('/channels', authenticateApiKey, async (req, res) => {
  try {
    const guild = client.guilds.cache.get(guildId);
    if (!guild) {
      return res.status(404).json({ error: 'Guild not found' });
    }

    const channels = guild.channels.cache
      .filter(ch => ch.isTextBased() && ch.permissionsFor(guild.members.me).has('SendMessages'))
      .map(ch => ({
        id: ch.id,
        name: ch.name,
        type: ch.type
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    res.json({ channels });
  } catch (error) {
    console.error('Error fetching channels:', error);
    res.status(500).json({ error: 'Failed to fetch channels' });
  }
});

app.post('/send-embed', authenticateApiKey, async (req, res) => {
  try {
    const { channelId, embed } = req.body;
    
    if (!channelId || !embed) {
      return res.status(400).json({ error: 'Missing channelId or embed data' });
    }

    const channel = client.channels.cache.get(channelId);
    if (!channel || !channel.isTextBased()) {
      return res.status(404).json({ error: 'Channel not found or not text-based' });
    }

    const embedBuilder = new EmbedBuilder();
    
    if (embed.title) embedBuilder.setTitle(embed.title);
    if (embed.description) embedBuilder.setDescription(embed.description);
    if (embed.color) embedBuilder.setColor(embed.color);
    if (embed.footer?.text) embedBuilder.setFooter({ text: embed.footer.text });
    if (embed.image?.url) embedBuilder.setImage(embed.image.url);
    if (embed.thumbnail?.url) embedBuilder.setThumbnail(embed.thumbnail.url);
    if (embed.fields && Array.isArray(embed.fields)) {
      embedBuilder.addFields(embed.fields);
    }

    embedBuilder.setTimestamp();

    const message = await channel.send({ embeds: [embedBuilder] });
    res.json({ messageId: message.id, success: true });

  } catch (error) {
    console.error('Error sending embed:', error);
    res.status(500).json({ error: 'Failed to send embed: ' + error.message });
  }
});

app.post('/edit-embed', authenticateApiKey, async (req, res) => {
  try {
    const { channelId, messageId, embed } = req.body;
    
    if (!channelId || !messageId || !embed) {
      return res.status(400).json({ error: 'Missing required data' });
    }

    const channel = client.channels.cache.get(channelId);
    if (!channel || !channel.isTextBased()) {
      return res.status(404).json({ error: 'Channel not found' });
    }

    const message = await channel.messages.fetch(messageId);
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }

    if (message.author.id !== client.user.id) {
      return res.status(403).json({ error: 'Can only edit bot messages' });
    }

    const embedBuilder = new EmbedBuilder();
    
    if (embed.title) embedBuilder.setTitle(embed.title);
    if (embed.description) embedBuilder.setDescription(embed.description);
    if (embed.color) embedBuilder.setColor(embed.color);
    if (embed.footer?.text) embedBuilder.setFooter({ text: embed.footer.text });
    if (embed.image?.url) embedBuilder.setImage(embed.image.url);
    if (embed.thumbnail?.url) embedBuilder.setThumbnail(embed.thumbnail.url);
    if (embed.fields && Array.isArray(embed.fields)) {
      embedBuilder.addFields(embed.fields);
    }

    embedBuilder.setTimestamp();

    await message.edit({ embeds: [embedBuilder] });
    res.json({ success: true });

  } catch (error) {
    console.error('Error editing embed:', error);
    res.status(500).json({ error: 'Failed to edit embed: ' + error.message });
  }
});

app.post('/get-embed', authenticateApiKey, async (req, res) => {
  try {
    const { channelId, messageId } = req.body;
    
    if (!channelId || !messageId) {
      return res.status(400).json({ error: 'Missing channelId or messageId' });
    }

    const channel = client.channels.cache.get(channelId);
    if (!channel || !channel.isTextBased()) {
      return res.status(404).json({ error: 'Channel not found' });
    }

    const message = await channel.messages.fetch(messageId);
    if (!message || !message.embeds.length) {
      return res.status(404).json({ error: 'Message or embed not found' });
    }

    const embed = message.embeds[0];
    
    const embedData = {
      title: embed.title || '',
      description: embed.description || '',
      color: embed.color || null,
      footer: embed.footer ? { text: embed.footer.text } : null,
      image: embed.image ? { url: embed.image.url } : null,
      thumbnail: embed.thumbnail ? { url: embed.thumbnail.url } : null,
      fields: embed.fields || []
    };

    res.json({ embed: embedData });

  } catch (error) {
    console.error('Error getting embed:', error);
    res.status(500).json({ error: 'Failed to get embed: ' + error.message });
  }
});

app.get('/health', (req, res) => {
  const health = {
    status: client.isReady() ? 'healthy' : 'unhealthy',
    botReady: client.isReady(),
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    pid: process.pid
  };
  
  console.log('🏥 Health check requested:', health);
  res.status(client.isReady() ? 200 : 503).json(health);
});

client.login(token);