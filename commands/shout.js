module.exports = {
    name: `shout`,
    description: 'sets the groups shout',
    async execute(message, args){
        if (!args.length) {
            return message.channel.send(`Add Arguments, ${message.author}`)
        }
        const noblox = require('noblox.js')
        const currentUser = await noblox.setCookie(process.env.COOKIE)
        let finalargs = ""
        for(let i = 0; i < args.length; i++) {
            finalargs = finalargs + " " + args[i]
        }
        noblox.shout(process.env.GROUPID, finalargs)
        message.reply("Completed, Shout is now :" + finalargs)
        
    }
}