module.exports = {
    name: 'ping',
    description: "this is a simple ping pong thing",
    execute(message, args){
        message.reply('Pong !');
        console.log("poing");
    }
}