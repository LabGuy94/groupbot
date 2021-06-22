module.exports = {
    name: `shout`,
    description: 'sets the groups shout',
    async execute(message, args){
        if (!args.length) {
            return message.channel.send(`Add Arguments, ${message.author}`)
        }
        const noblox = require('noblox.js')
        const currentUser = await noblox.setCookie(process.env.COOKIE)
        noblox.shout(process.env.GROUPID, args[0])
        message.reply("Completed, Shout is now :" + args[0])
        
    }
}