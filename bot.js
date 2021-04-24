const Discord = require('discord.js');
const fs = require('fs');
const util = require(`minecraft-server-util`);

const prefix = '-';

const client = new Discord.Client();

client.commands = new Discord.Collection();

const commands = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commands) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('The MedalSMP Bot is ready!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

        if (command === 'ping') {
            client.commands.get('ping').execute(message, args, Discord, client);
        } else if (command === 'mcstat') {
            client.commands.get('mcstat').execute(message, args, Discord, client, util);
        } else if (command === 'mcip') {
            client.commands.get('mcip').execute(message, args, Discord, client);
        } else if (command === 'rustip') {
            client.commands.get('rustip').execute(message, args, Discord, client);
        } else if (command === 'demi') {
            client.commands.get('demi').execute(message, args, Discord, client);
        } else if (command === 'help') {
            client.commands.get('help').execute(message, args, Discord, client);
        } else if (command === 'trident') {
            message.channel.send('this is a trident :trident:');
        } else if (command === 'vsynkz') {
            message.channel.send(`synkz's boyfriend, moon is`);
        } else if (command === 'rcon') {
            client.commands.get('rcon').execute(message, args, Discord, client, util)
        }

})

client.login(`NzMyMzgzNDk5ODU1NTkzNTQ2.XwzzSQ.3huK8Q1Lc5sYGSadg5WgxdxGTNc`)