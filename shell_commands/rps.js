exports.run = (bot, message, args) => {
    if(args.length>0&&args[0]<1){
       return message.channel.sendMessage(`*We can't have a Best of "${args[0]}" game!*`);
    }
    var bestOf=args.length==0?"Best of 1":"Best of "+args[0];
    message.channel.sendMessage(`*${bestOf} Rock, Paper, Scissors game started.
Simply say Rock, Paper, or Scissors to start a new round.*`);
    var rpsRound=1;
    var score=0;
    mode="rps";
}
