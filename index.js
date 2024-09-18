const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, REST, Routes, PermissionsBitField, ShardingManager, ActivityType, EmbedBuilder, WebhookClient, ButtonBuilder, ButtonStyle, ActionRowBuilder, ContextMenuCommandBuilder, ApplicationCommandType, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { token, clientId } = require('./config/config.json');
const config = require('./config/config.json');
const Discord = require('discord.js');

require('colors');

const client = new Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.MESSAGE_CONTENT,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES
    ],
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

function requerirhandlers() {
    ["command", "events", "distube"].forEach(handler => {
        try {
            require(`./handlers/${handler}`)(client, Discord);
        } catch (error) {
            console.warn(error);
        }
    });
}

requerirhandlers();
client.login(config.token);