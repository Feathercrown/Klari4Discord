    var descriptions = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Flips any amount of coins any amount of times",
        "Displays this file",
        "",
        "",
        "",
        "Just don't run it",
        "Reloads any command without restarting the node environment",
        "",
        "Rolls any-sided die any amount of times",
        "",
        "Sends a test command to the node environment"
        ];

    var Args = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "number-of-flips",
        "",
        "",
        "",
        "",
        "",
        "command-to-reload",
        "",
        "dice-size amount-of-dice",
        "",
        "response-index-number|all|first|last|random"
        ];

const fs = require('fs');

exports.run = (bot, message, args) => {
    config = require('../settings.json');
    message.channel.sendMessage(`\`\`\`
Here's a brief tutorial on how to talk to me!

- If ai.js hasn't been loaded yet (which especially won't be happening right after a startup), the only way for me to acknowledge your requests are by prefacing your commands with:
  
  ${config.prefix}{Your command goes here!}

- When typing your command, DO NOT ADD A SPACE BETWEEN THE ARROW AND THE COMMAND, or else it just won't work! D:

Here's a dynamically changing list of all available commands:
(In the future, there'll be more help articles for each of them, so ask admin about usage for now!)

${allfiles()}
\`\`\``);

    function allfiles() {
        let a = fs.readdirSync('./shell_commands').toString().split(',')
        for ( var i = 0; i < a.length; i++ ) {
            a[i] = "  * " + a[i] + " " + (Args[i]==""?"":"[") + Args[i].replace(" ","] [") + (Args[i]==""?"":"]") + "\n\t\t" + (descriptions[i]==""?"[New File Warning!]":descriptions[i]) + "\n";
        }
        return a.sort().join("\n").replace(/.js/g,'');
    }
}
