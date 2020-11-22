module.exports = {
    name: 'avatars',
    description: "this reply the profile picture of the person who ask",
    execute(message, args){
        message.reply(message.author.displayAvatarURL());
    }
}