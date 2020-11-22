const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const prefix = '!';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch(command) {
        case 'ping' :
            client.commands.get('ping').execute(message, args);
            break;
        case 'avatars' :
            client.commands.get('avatars').execute(message, args);
            break;
        case 'meme' :
            client.commands.get('meme').execute(message, args);
            break;
        case 'embend' :
            client.commands.get('embend').execute(message, args);
            break;
        case 'person' :
            client.commands.get('person').execute(message, args);
            break;
        case 'commandlist':
            client.commands.get('commandList').execute(message, client.commands);
            break;
        default:
            message.channel.send('Je comprend pas ! Debilus');
    }

});

client.login('Nzc5Njk1MDYzODE5MjIzMDgx.X7kRnQ.rPZ76qrLh2iXfV24l4XMAlo4LZ4');