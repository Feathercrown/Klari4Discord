exports.run = (bot, message, args) => {
    message.channel.sendMessage(test()).catch(console.error);
    function test(){
        let replies = [
            `*Hello, yes, I'm working just fine! I hope...*`,
            `*All systems go!*`,
            `*ARE YOU FEELIN IT MR KRABS¿¿¿*`,
            `*Rip-roarin' and ready to rumble!*`,
            `*Everything checks out!*`,
            `*Heck yeah!*`,
            `*Pingas!*`,
            `*Yes, ${message.author.username}, I'm doing well, thank you for checking!*`,
            `*Doin' some maintenance I see, ${message.author.username}? ;^)*`
        ];
        if(args > []) {
            if(isNaN(args[0])) {
                switch(args[0]) {
                    case 'all':
                        return replies;
                        break;
                    case 'random':
                        return replies[Math.floor(Math.random()*replies.length)];
                        break;
                    default:
                        return `*Uhh, I don't think I can do that. You'll have to try something else.*`;
                        break;
                }
            } else {
                return replies[args[0]];
            }
        } else {
            return replies[Math.floor(Math.random()*replies.length)];
        }
    }
}