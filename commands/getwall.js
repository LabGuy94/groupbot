module.exports = {
    name: `getwall`,
    description: 'gets the group wall',
    async execute(message, args){
        const noblox = require('noblox.js')
        const fs = require('fs')
        const currentUser = await noblox.setCookie(process.env.COOKIE)
        const wall = await noblox.getWall(process.env.GROUPID)
        const stringwall = await JSON.stringify(wall)
        fs.writeFile('wall.txt', stringwall, async function (err) {
            if (err) return console.log(err);
            await message.channel.send("Group Wall", { files: ["./wall.txt"] });
            fs.unlink("./wall.txt", function (err) {
                if (err) return console.log(err);
            })
        });
    }
}