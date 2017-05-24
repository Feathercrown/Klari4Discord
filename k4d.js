console.log('');
console.log('Loading Colors...');
const Colors =  require('colors');

console.log('Loading Settings.json...');
const config = require('./settings.json')

console.log('Loading Discord.js Core...');
const Discord = require('discord.js');

console.log('Loading File System...');
const fs = require('fs');

console.log('Creating new Discord.Client()...');
const bot = new Discord.Client();

console.log('Initializing Modes...')
var mode="commands";

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
    if(mode=="commands"){
        if(!message.content.startsWith(config.prefix)) return;

        var command = message.content.split(" ")[0];
        command = command.slice(config.prefix.length);
        if(!command) return message.channel.sendMessage(emptyreply());
        outerbreak: {
            for(i = 0; i < fs.readdirSync('./shell_commands').length; i++) {
                if(command+".js" == fs.readdirSync('./shell_commands')[i]) {
                    break outerbreak;
                }
            }
            return message.channel.sendMessage(notmatching());
        }
        var args = message.content.split(" ").slice(1);
        try {
            var commandFile = require(`./shell_commands/${command}.js`);
            commandFile.run(bot, message, args);
        } catch (err) {
            console.error(err);
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
        function notmatching(){
               let replies = [
               `*Excuse me?*`,
               `*What?*`,
               `*Uhh, I don't know that yet. You should suggest it in the 'klaribot-suggestions' channel if you have any ideas!*`,
              `*Did you mean something else?*`,
               `*I'm confused...*`,
                `*Silly ${message.author.username}! You should go look at 'kshell>help'!*`,
            ];
            return replies[Math.floor(Math.random()*replies.length)];
        } else if(mode=="rps"){
            var msg = message.content.toLowerCase();
            if(msg=="r"){
                msg="rock";
            } else if(msg=="p"){
                msg="paper";
            } else if(msg=="s"){
                msg="scissors";
            }
            if(msg=="rock"||msg=="paper"||msg=="scissors"){
            var ropasc = Math.floor(Math.random()*3); //ROck, PAper, SCissors
            ropasc = ropasc==0?"rock":(ropasc==1?"paper":"scissors");
            var result = (msg=="rock"&&ropasc=="paper")||(msg=="paper"&&ropasc=="scissors")||(msg=="scissors"&&ropasc=="rock")?"I win! :D":((msg=="rock"&&ropasc=="scissors")||(msg=="paper"&&ropasc=="rock")||(msg=="scissors"&&ropasc=="paper")?"You win! :(":"It's a tie! :\/");
            if(result!="It's a tie! :\/"){
                rpsRound++;
                if(result=="I win! :D"){
                    score++;
                } else {
                    score--;
                }
            }
            message.channel.sendMessage(`*${ropasc}
${result}*`);
            if(bestOf=="Best of "+rpsRound) //This was the last round
                var whoWon = score==0?"It's a tie!":(score<0?"You win.... this time!":"I win!");
                return message.channel.sendMessage(`*That's the game!
${whoWon}*`);
            } else {
                return;
            }
        }
    }
});

bot.login(config.token);
