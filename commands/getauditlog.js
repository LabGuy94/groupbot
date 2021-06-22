module.exports = {
    name: `getauditlog`,
    description: 'gets the audit log',
    async execute(message, args){
        const noblox = require('noblox.js')
        const fs = require('fs');
        const currentUser = await noblox.setCookie(process.env.COOKIE)
        const auditlog = await noblox.getAuditLog(process.env.GROUPID)
        const stringauditlog = await JSON.stringify(auditlog.data)
        fs.writeFile('auditlog.txt', stringauditlog, async function (err) {
            if (err) return console.log(err);
            await message.channel.send("Audit Log", { files: ["./auditlog.txt"] });
            fs.unlink("./auditlog.txt", function (err) {
                if (err) return console.log(err);
            })
        });
    }
}