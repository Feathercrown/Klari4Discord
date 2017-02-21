console.log('');
console.log('Loading Colors...');
const Colors =  require('colors');

console.log('Loading Settings...');
const config = require('./settings.json')

console.log('Loading Discord.js Core...');
const Discord = require('discord.js');

console.log('Loading File System...');
const fs = require('fs');

console.log('Creating new Discord.Client()...');
const bot = new Discord.Client();

console.log('Initializing Modes...')
var mode;

console.log('Starting in Terminal Mode...');
bot.on('ready', () => {
    mode = 'Terminal';
    console.log(`___  __ ___             __ __       _________ ___
┃ ┃ ╱ ╱ ┃ ┃            ╱ ╱ ╲ ╲      ┃ ┏━━━━━┛ ┃ ┃
┃ ┃╱ ╱  ┃ ┃           ╱ ╱   ╲ ╲     ┃ ┃       ┃ ┃
┃   ╱   ┃ ┃          ╱ ╱     ╲ ╲    ┃ ┃       ┃ ┃
┃   ╲   ┃ ┃         ╱ ╱       ╲ ╲   ┃ ┃       ┃ ┃
┃ ┃╲ ╲  ┃ ┃        ╱ ╱         ╲ ╲  ┃ ┃       ┃ ┃
┃ ┃ ╲ ╲ ┃ ┗━━━━━┓ ╱ ╱           ╲ ╲ ┃ ┃       ┃ ┃
‾‾‾  ‾‾ ‾‾‾‾‾‾‾‾‾ ‾‾             ‾‾ ‾‾‾       ‾‾‾`.magenta)
    console.log("Generation D0");
    console.log("");
    console.log("All interactions with this bot take place on the Discord server.");
    console.log("Ctrl-C to shutdown.");
    bot.channels.get('264593288219197440').send(`*Klari-bot is Online. Starting in mode: ${mode}.*`)
});

bot.on('message', message => {
    if(!message.content.startsWith(config.prefix)) return;

    var command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    if(!command) return message.channel.sendMessage(emptyreply());
    
    else {

    var args = message.content.split(" ").slice(1);
        try {
            var commandFile = require(`./shell_commands/${command}.js`);
            commandFile.run(bot, message, args);
        } catch (err) {
            console.error(err);
        }
    }

    function emptyreply(){
        let replies = [
            `*Huh?*`,
            `*What?*`,
            `*Yes, love?*`,
            `*Did you need me for something, ${message.author.username}?*`,
            `*What is it that I may help you with today, ${message.author.username}?*`,
            `*${message.author.username}, did you mean to type something?*`,
            `*How may I be of assistance, ${message.author.username}*?`,
            `*${message.author.username}, if you don't know what to type, I suggest entering 'kshell>help' to give you a few ideas. Happy Coding!*`
        ];
        return replies[Math.floor(Math.random()*replies.length)];
    }
});

bot.login(config.token);