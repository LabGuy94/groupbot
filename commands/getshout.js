module.exports = {
    name: `getshout`,
    description: 'gets the groups shout',
    async execute(message, args){
        const noblox = require('noblox.js')
        const currentUser = await noblox.setCookie(process.env.COOKIE)
        const shout = await noblox.getShout(process.env.GROUPID)
        const stringshout = await JSON.stringify(shout)
        await message.channel.send(stringshout)
    }
}