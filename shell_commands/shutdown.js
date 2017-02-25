exports.run = (bot, message, args) => {
    message.channel.sendMessage(`*Okay, I'll shut down now. Have a nice day, everyone!*`);
    setTimeout(function() {process.exit();}, 3000);
}