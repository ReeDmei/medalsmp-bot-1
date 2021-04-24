module.exports = {
    name: 'mcstat',
    execute(message, args, discord, client, util) {
        util.status('medalsmp.plaguecraft.xyz', { enableSRV: true, timeout: 5000, protocolVersion: 47 }) // These are the default options
        .then((response) => {
            const statusEmbed = new Discord.MessageEmbed()
            .setColor('#19b550')
            .setTitle('MedalSMP Server Status')
            .addFields(
                {name: 'Server IP', value: response.host}, // Display the IP
                {name: 'Online Players', value: response.onlinePlayers}, // Player count
                {name: 'Max Players', value: response.maxPlayers}, // Max players allowed at once
                {name: 'Something seem off?', value: `Message Awex / Notch.`} // status page link
            )
            .setFooter('MedalSMP Server Status')
            .setTimestamp();
 
            message.channel.send(statusEmbed);
        })
        .catch((error) => {
            const offlineEmbed = new Discord.MessageEmbed() // If the server doesn't respond, this is returned.
            .setColor('#c7002e')
            .setTitle('MedalSMP Server Status')
            .setDescription(`I tried to fetch the status of the server, however it returned nothing!\n\nIt's possible this is a server issue. Harass Notch for more info.`)
            .setFooter('MedalSMP Server Status')
            .setTimestamp();

            message.channel.send(offlineEmbed)
            console.log(error);
        });
    }
}