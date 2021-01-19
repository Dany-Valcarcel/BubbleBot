const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '+';
const fs = require('fs');
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// Get all possible commands
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}

// Ready up
bot.once('ready', () => {
    console.log("Bubblebot is online!");
});

// Read for commands
bot.on('message', message => {
    // Check for prefix and that bot is not the author
    if (!(message.content.startsWith(prefix)) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch(command) {
        case 'help':
        case 'h':
        case 'helpme':
            bot.commands.get('help').execute(message, args, Discord);
            break;
        case 'marco':
            bot.commands.get('marco').execute(message, args);
            break;
        case 'wisdom':
            bot.commands.get('wisdom').execute(message, args);
            break;
        case 'hey':
        case 'hi bubblebot':
        case 'hi':
            bot.commands.get('hey').execute(message, args);
            break;
        case 'ask':
        case 'conch':
        case 'magicconch':
            bot.commands.get('magic_conch').execute(message, args, Discord);
            break;
        case 'today':
            bot.commands.get('today').execute(message, args);
            break;
    }
});

// This should be the last line
bot.login('NzgwNzk5NDk4ODY3ODM0ODgw.X70WMw.fI-upXqORXFi8wnRIXsS6N-1RUc');
