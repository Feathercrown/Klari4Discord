exports.run = (bot, message, args) => {
    if(args > []) {
        // the path is relative to the *current folder*, so just ./filename.js
        delete require.cache[require.resolve(`./${args[0]}.js`)];
        message.channel.sendMessage(`*I've reloaded '${args[0]}' for you, ${message.author.username}. Godspeed!*`);
     } else {
        return message.channel.sendMessage(`*You didn't provide a command name to reload, silly ${message.author.username}!*`);
    }
}