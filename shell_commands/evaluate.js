exports.run = (bot, message, args) => {
    if(args.length = 1) {
        var res = eval(args[0]); 
    } else {
        var res = eval(args.join(" "));
    }
    message.channel.sendMessage(`Evaluation Output:\n\`\`\`${res}\`\`\``);
}