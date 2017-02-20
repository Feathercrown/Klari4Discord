const Colors =  require('colors')
const Discord = require('discord.js');
const Token = 'MjY0NjMyNDk4NDcyODc4MDgw.C0zY0A.tfV8-q8kZnRdi7UPwFcb13RAEw8';
const bot = new Discord.Client();
const date = new Date();


bot.on('ready', () => {
    console.log(`
___  __ ___             __ __       _________ ___
┃ ┃ ╱ ╱ ┃ ┃            ╱ ╱ ╲ ╲      ┃ ┏━━━━━┛ ┃ ┃
┃ ┃╱ ╱  ┃ ┃           ╱ ╱   ╲ ╲     ┃ ┃       ┃ ┃
┃   ╱   ┃ ┃          ╱ ╱     ╲ ╲    ┃ ┃       ┃ ┃
┃   ╲   ┃ ┃         ╱ ╱       ╲ ╲   ┃ ┃       ┃ ┃
┃ ┃╲ ╲  ┃ ┃        ╱ ╱         ╲ ╲  ┃ ┃       ┃ ┃
┃ ┃ ╲ ╲ ┃ ┗━━━━━┓ ╱ ╱           ╲ ╲ ┃ ┃       ┃ ┃
‾‾‾  ‾‾ ‾‾‾‾‾‾‾‾‾ ‾‾             ‾‾ ‾‾‾       ‾‾‾`.magenta)
    console.log("Generation D0");
    console.log("");
    console.log("Ctrl-C to quit.");

    var timeOfDay;
    if (date.getHours() < 12) {
        timeOfDay = "morning";
    } else if (date.getHours() == 12) {
        timeOfDay = "day";
    } else if (date.getHours() > 12 && date.getHours() < 17) {
        timeOfDay = "afternoon";
    } else if (date.getHours() >= 17 && date.getHours() <= 23) {
		timeOfDay = "evening";
	} else {
		timeOfDay = "[Oh no! D: The IF-ELSE IF statement handling greetings couldn't find a date! Did you create a Date() object for me to look at?]"
	}

    bot.channels.get('264593288219197440').send(`*Good ${timeOfDay}, everyone.
Today is ${date.toLocaleString('en-us', {weekday:'long'})}, ${date.toLocaleString('en-us', {date:'long'})}.*`);
    
});

bot.on('message', message => {
    let prefix = "K >";
    // Exit and stop if it's not there
    if (!message.content.startsWith(prefix)) return;
     // Exit if any bot
    if (message.author.bot) return;

    //Basic Commands engine
    switch (message.content){
        case (prefix):
            message.channel.send("*Whoops! You didn't pass any parameters!*");
            break;
        case (prefix + "hi"):
            message.channel.send("*Why hello there, " + message.author.username + "*.");
            break;
        case (prefix + "ping"):
            message.channel.send("*Pong!*");
            break;
        default:
            message.channel.send("*Sorry, I don't know that yet.*")
    }
});

bot.login(Token);