module.exports = {
    name: `grouppayout`,
    description: 'pays out robux to a member',
    async execute(message, args){
        const noblox = require('noblox.js')
        if (!args.length) {
            return message.channel.send(`Add Arguments, ${message.author}`)
        }
        const currentUser = await noblox.setCookie(process.env.COOKIE)
        noblox.groupPayout(process.env.GROUPID, args[0], args[1])
        message.channel.send("Done, " + args[1] + " Was Payed Out To User " + args[0])
    }
}