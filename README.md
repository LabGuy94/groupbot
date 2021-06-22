# groupbot
A Node Js Discord bot that allows you to do actions from to to your roblox group using noblox.js

### Features ###
- Commands
  - Exile
  - GetAuditLog
  - GetGroupFunds
  - GetRev
  - GetShout
  - GetWall
  - Grouppayout
  - Ping
  - Rank
  - Shout
 - Other
  - Automatic shout posting into channel
  - Wall channel that mimics the wall of your roblox group
  
  
 ### Setup ###
 I reccomend installing VSCode before you start
 First download node js at https://node.js.org/
 Then download all the files from the main branch or the dev branch (dev branch will have bugs or flat out not work).
 Open the folder in VSCode
 Then your going to want to rename the .env.example file to .env and change the following Varibales after the = accordingly 
 
 
 ## .ENV VALUES ##
 
 
 DISCORDTOKEN
 Go to discord developer portal create a new application create a bot go to oauth2 turn on bot and administrator then copy the link and invite it to your server.
 Set the discord token varibale to the token on the bot tab in your application.
 
 PREFIX
 set this to something like !
 
 GROUPID
 set this to your groups it
 
 COOKIE
 Make a new roblox account join your group then make sure the bot has full admin permsissions so it can work
 Next press control + shift + i and look for .ROBLOSECURITY and copy the WHOLE thing then delete it and refresh the page. Paste the cookie after COOKIE=
 
 SHOUTCHANNEL
 Turn on discord developer mode and copy the id then paste it after SHOUTCHANNEL=
 WALLCHANNEL
 Turn on discord developer mode and copy the id then paste it after WALLCHANNEL=
 
 ## Installing Dependencies ##
 type the following into your command line while in the folder

 npm install discord.js
 npm install noblox.js
 npm install dotenv
 
 ## Testing ##
 To test your bot open a new terminal window and cd to your folder where the project is and do node .
 It should say "ready" once ready
 Use any command To Your Desire
 
 ## 24/7 ##
 You may think "I want free hosting" but you do not. Most of the free hosters get ip banned by discord because they are usually used for maliscous bots.
 I recommend https://hostsapling.net . Im in no way sponsored by them but their rates are so good for the service they provide. For just 50 cents a month you can host your bot 24/7. Once your in your pannel for host sapling just use an ftp client to upload your files and hit START!

## Conclusion ##
 If you have errors you can join my discord server found https://discord.gg/eWDuynAFzW and just ask in general your question.
 
 

 
 
 
