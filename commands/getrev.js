module.exports = {
    name: `getrev`,
    description: 'gets the group revenue',
    async execute(message, args){
        const noblox = require('noblox.js')
        const currentUser = await noblox.setCookie(process.env.COOKIE)
        const revenue = await noblox.getGroupRevenueSummary(process.env.GROUPID)
        const epic = JSON.stringify(revenue)
        message.reply(epic)
    }
}