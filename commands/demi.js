module.exports = {
    name: 'demi',
    execute(message, args, Discord, client) {
        if(message.member.roles.cache.some(role => role.name === "Demi")) {
            message.channel.send('you are Demi and you are a bitch boy')
            // your messages should go into this array
            const messages = ["YOU PIECE OF SHIT IM GONNA BEAT YOU WITH A STICK", "YOU FUCKING PIECE OF FUCKING SHIT", "eat pant", "u a BITCH"]

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        console.log(randomMessage)
            message.author.send(randomMessage)
        } else if (!message.member.roles.cache.some(role => role.name === "Demi")) {
            message.channel.send('you are not demi')
        }
    }
}