module.exports = {
    name: `getgroupfunds`,
    description: 'gets the groups funds',
    async execute(message, args){
        const noblox = require('noblox.js')
        const currentUser = await noblox.setCookie(process.env.COOKIE)
        const groupfunds = await noblox.getGroupFunds(process.env.GROUPID)
        message.channel.send(groupfunds + " Robux")
    }
}