const discord = require("discord.js")
const noblox = require("noblox.js")
require('dotenv').config();
const token = process.env.DISCORDTOKEN
const prefix = process.env.PREFIX
const client = new discord.Client()

const fs = require('fs')



client.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log("ready");
})

noblox.onShout(process.env.GROUPID).on("data", async function(data) {
    const currentUser = await noblox.setCookie(process.env.COOKIE)
    const shoutmessage = "User: " + data.poster.username + " Message: " + data.body
    client.channels.cache.get(process.env.SHOUTCHANNEL).send(shoutmessage);  
})

noblox.onWallPost(process.env.GROUPID).on("data", async function(data) {
    const currentUser = await noblox.setCookie(process.env.COOKIE)
    const wallmessage = "User: " + data.poster.username + " Message: " + data.body
    client.channels.cache.get(process.env.WALLCHANNEL).send(wallmessage);  
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args)
    }else{
        if(command === "exile"){
            if (message.member.hasPermission('ADMINISTRATOR')) {
                client.commands.get('exile').execute(message, args)
            }else{
                message.channel.send("Requred Permission: ADMINISTRATOR")
            }
        }else{
            if(command === "rank"){
                if (message.member.hasPermission('ADMINISTRATOR')) {
                client.commands.get('rank').execute(message, args)
                }else{
                    message.channel.send("Requred Permission: ADMINISTRATOR")
                }
            }else{
                if(command === "getgrouprevenue"){
                    if (message.member.hasPermission('ADMINISTRATOR')) {
                        client.commands.get('getrev').execute(message, args)
                    }else{
                        message.channel.send("Requred Permission: ADMINISTRATOR")
                    }
                }else{
                    if(command === "shout"){
                        if (message.member.hasPermission('ADMINISTRATOR')) {
                            client.commands.get('shout').execute(message, args)
                        }else{
                            message.channel.send("Requred Permission: ADMINISTRATOR")
                        }
                    }else{
                        if(command === "getauditlog"){
                            if (message.member.hasPermission('ADMINISTRATOR')) {
                                client.commands.get('getauditlog').execute(message, args)
                            }else{
                                message.channel.send("Requred Permission: ADMINISTRATOR")
                            }
                        }else{
                            if(command === "grouppayout"){
                                if (message.member.hasPermission('ADMINISTRATOR')) {
                                    client.commands.get('grouppayout').execute(message, args)
                                }else{
                                    message.channel.send("Requred Permission: ADMINISTRATOR")
                                }
                            }else{
                                if(command === "getwall"){
                                    if (message.member.hasPermission('ADMINISTRATOR')) {
                                        client.commands.get('getwall').execute(message, args)
                                    }else{
                                        message.channel.send("Requred Permission: ADMINISTRATOR")
                                    }
                                }else{
                                    if(command === "getshout"){
                                        if (message.member.hasPermission('ADMINISTRATOR')) {
                                            client.commands.get('getshout').execute(message, args)
                                        }else{
                                            message.channel.send("Requred Permission: ADMINISTRATOR")
                                        }
                                    }else{
                                        if(command === "getgroupfunds"){
                                            if (message.member.hasPermission('ADMINISTRATOR')) {
                                                client.commands.get('getgroupfunds').execute(message, args)
                                            }else{
                                                message.channel.send("Requred Permission: ADMINISTRATOR")
                                            }
                                        }else{
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})



client.login(token)
