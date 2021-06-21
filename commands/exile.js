module.exports = {
    name: 'exile',
    description: 'exiles a member',
    async execute(message, args){
        const noblox = require("noblox.js")
        if (!args.length) {
            return message.channel.send(`Add Arguments, ${message.author}`)
        }
        const currentUser = await noblox.setCookie(process.env.COOKIE)
        await noblox.exile(process.env.GROUPID, args[0])
        message.reply("Completed, unless the member was not in the group")
    }
}