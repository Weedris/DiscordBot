const request = require('request');
const fs = require('fs');

module.exports = {
    name: 'download',
    description: "The bot add the attachement file to the meme collection",
    execute(message, args){
        if (message.attachments.first()) {

            let name = new Date();

            request.get(message.attachments.first().url)
                .on('error', console.error)
                .pipe(fs.createWriteStream('./ressources/images/' + name.toString()));

            message.reply('Successfully downloaded');
        }
    }
}