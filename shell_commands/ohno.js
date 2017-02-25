const config = require('../settings.json')
exports.run = (bot, message, args) => {
    message.channel.sendMessage(config.prefix + 'ohno');
}