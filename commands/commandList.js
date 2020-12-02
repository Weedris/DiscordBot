const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'commandList',
    description: 'Give a pretty good description about all the command this bot can receive',
    execute(message, args) {
        const commandArray = args[0].array();

        let out = ""

        commandArray.forEach(command => {
            // console.log(command.name);
            // console.log(command.description);
            out = out + '**' + args[1] + command.name + '** does this : ' + command.description + '\n\n';
        });

        const embed = new MessageEmbed()
            .setTitle('List of al the command this bot understand')
            .setColor(0xa80a98)
            .setDescription(out);
        message.channel.send(embed);

    }
}