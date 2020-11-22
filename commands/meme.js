const { MessageAttachment } = require("discord.js")

module.exports = {
    name: 'meme',
    description: "send a meme from ressources/images",
    execute(message, args) {
        const fs = require('fs');

        let image = [];
        const images = fs.readdirSync('./ressources/images/');

        images.forEach(img => {
            image.push(img);
        });
        // console.log(thing);
        
        const img = image[Math.floor(Math.random()*image.length)];

        const attachment = new MessageAttachment('./ressources/images/' + img);
        message.channel.send(`${message.author}, `, attachment);
    }
}