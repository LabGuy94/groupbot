module.exports = {
    name: `rank`,
    description: 'this sets the rank of a member',
    async execute(message, args){
        const noblox = require('noblox.js')
        if (!args.length) {
            return message.channel.send(`Add Arguments, ${message.author}`)
        }
        const currentUser = await noblox.setCookie(process.env.COOKIE)
        await noblox.setRank(process.env.GROUPID, args[0], args[1])
        message.reply("Completed, unless the member was not in the group")
    }
}