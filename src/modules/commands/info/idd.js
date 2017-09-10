const { Command } = require('discord-akairo');
const Logger = require('../../../util/Logger');

function exec(message) {

    
    const args = message.content.split(/\s+/).slice(1);
    
        if (!args[0]) 
            return message.channel.send("No action given.").catch(console.error);
         
        if(args[0]=="user"){
        let member = message.mentions.members.first();
        if(!member)
            return message.reply("Please mention a valid member of this server");
            if(args[1]==`${member}`){
                return message.channel.send("User ID:"+"`"+ `${member.id}`+"`").catch(console.error);
        }    }
        
        else if(args[0]=="server"){
            return message.channel.send("Server ID:"+"`"+ `${message.guild.id}`+"`").catch(console.error);
            } else 
                
            if(args[0]=="channel"){
                return message.channel.send("Channel ID:"+"`"+ `${message.channel.id}`+"`").catch(console.error);
            }
    };

module.exports = new Command('idd', exec, {
    aliases: ['idd'],
    args: [
        {
            id: 'content',
            match: 'content'
        }
    ],
    channelRestriction: 'guild',
    category: 'info'
});

