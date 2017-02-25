exports.run = (bot, message, args) => {
    if(!args[0]) return message.channel.sendMessage(`*Roll... what?*`);

    if(args[0]==0) return message.channel.sendMessage(`*Silly ${message.author.username}, there's no such thing as a 0-sided die!*`);
    
    if(args[0]==1) return message.channel.sendMessage(`*${message.author.username}... Seriously? Rolling a mobius strip/sphere will ALWAYS result in 1. Golly gee.*`);
    
    if(args[0]==2) return message.channel.sendMessage(`*${message.author.username}, If you need to roll a d2, just use the \`flipcoin\` command.*`);
    
    args[1]=args[1]||1;
    var rollArray=[];
    for(var i=0;i<args[1];i++) rollArray.push(Math.floor(Math.random()*args[0]+1));

    if(rollArray.length==0||args[0]/2!=args[0]-args[0]/2) return message.channel.sendMessage(`*Silly ${message.author.username}, you can't roll a ${args[0]}-sided die '${args[1]}' times!*`);

    switch(args[2]){
        case 'min':
            return message.channel.sendMessage(`*I've rolled ${rollArray.length==1?'a d'+args[0]:'some d'+args[0]+'s'} for you and got: \n${rollArray.join("\n")}\nWith a minimum value of ${Math.min(...rollArray)}.*`);
            break;
        case 'max':
            return message.channel.sendMessage(`*I've rolled ${rollArray.length==1?'a d'+args[0]:'some d'+args[0]+'s'} for you and got: \n${rollArray.join("\n")}\nWith a maximum value of ${Math.max(...rollArray)}.*`);
            break;
        case 'total':
            return message.channel.sendMessage(`*I've rolled ${rollArray.length==1?'a d'+args[0]:'some d'+args[0]+'s'} for you and got: \n${rollArray.join("\n")}\nWith a total of ${rollArray.reduce((acc, indx) => acc + indx )}.*`);
            break;
        case 'common':
            return message.channel.sendMessage(`*I've rolled ${rollArray.length==1?'a d'+args[0]:'some d'+args[0]+'s'} for you and got: \n${rollArray.join("\n")}\nWith a common value of ${rollArray.sort((a,b) => rollArray.filter(v => v===a).length - rollArray.filter(v => v===b).length).pop()}.*`);
            break;
        case 'average':
            return message.channel.sendMessage(`*I've rolled ${rollArray.length==1?'a d'+args[0]:'some d'+args[0]+'s'} for you and got: \n${rollArray.join("\n")}\nWith an average value of ${rollArray.reduce((acc, indx) => acc + indx )/rollArray.length}.*`);
            break;
        default:
            break;
    }
    return message.channel.sendMessage(`*I've rolled ${rollArray.length==1?'a d'+args[0]:'some d'+args[0]+'s'} for you and got: \n${rollArray.join("\n")}*`);
}