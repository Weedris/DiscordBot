module.exports= {
    name: 'person',
    description: "Send an image of a person who doesn't exist",
    execute(message, args) {
        let image = "https://thispersondoesnotexist.com/image";

        message.channel.send(image);
        console.log(image);
    }
}