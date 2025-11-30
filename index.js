const fs = require('fs');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const token = fs.readFileSync('./token.txt', 'utf8').trim();

client.once('clientReady', () => {
    console.log(`Bot logged as ${client.user.tag}`);
});

client.login(token);
