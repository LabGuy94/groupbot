module.exports = {
    name: `ping`,
    description: 'this sends back pong',
    async execute(message, args){
        message.channel.send("pong")
    }
}