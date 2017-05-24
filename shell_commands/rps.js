exports.run = (bot, message, args) => {
    var bestOf=args.length==0?"":"Best of "+args[0];
    message.channel.sendMessage(`*${bestOf} Rock, Paper, Scissors game started.
Simply say Rock, Paper, or Scissors to start a new round.*`);
    var rpsRound=1;
    mode="rps";
}
