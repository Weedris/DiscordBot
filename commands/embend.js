const { MessageEmbed } = require("discord.js")

module.exports= {
    name: 'embend',
    description: "Send smth",
    execute(message, args) {
        const embed = new MessageEmbed()
            .setTitle('A slick little embed')
            .setColor(0xb010a8)
            .setDescription('Something something something');
        message.channel.send(embed);
    }
}