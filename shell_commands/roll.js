exports.run = (bot, message, args) => {
    if(args[0]==0){
        return message.channel.sendMessage(`*Silly ${message.author.username}, there's no such thing as a 0-sided die!*`);
    }
    if(args[0]==1){
        return message.channel.sendMessage(`*${message.author.username}... Seriously? Rolling a mobius strip/sphere will ALWAYS result in 1. Golly gee.*`);
    }
    if(args[0]==2){
        return message.channel.sendMessage(`*${message.author.username}, If you need to roll a d2, just use the \`flipcoin\` command.*`);
    }
    args[1]=args[1]||1;
    var flipArray=[];
    for(var i=0;i<args[1];i++){
        flipArray.push(Math.floor(Math.random()*args[0]+1));
    }
    if(flipArray.length==0||args[0]/2!=args[0]-args[0]/2){
        return message.channel.sendMessage(`*Silly ${message.author.username}, you can't roll a ${args[0]}-sided die '${args[1]}' times!*`);
    } else {
        return message.channel.sendMessage(`*I've rolled ${flipArray.length==1?'a d'+args[0]:'some d'+args[0]+'s'} for you and got: \n${flipArray.join("\n")}*`);
    }
}