module.exports = {
    name: 'ping',
    execute(message, args, Discord, client) {
        message.channel.send(`:ping_pong:\nThe current ping between you and the bot is ${Date.now() - message.createdTimestamp}ms.`)
    }
}