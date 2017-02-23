exports.run = (bot, message, args) => {
    args[0]=args[0]||1;
    var flipArray=[];
    for(var i=0;i<args[0];i++){
        flipArray.push(Math.random()>0.5?`Heads`:`Tails`);
    }
    if(flipArray.length==0){
        return message.channel.sendMessage(`*Silly ${message.author.username}, you can't flip a coin '${args[0]}' times!*`);
    } else {
        return message.channel.sendMessage(`*I've flipped ${flipArray.length==1?'a coin':'some coins'} for you and got: ${flipArray.join(", ")}.*`);
    }
}