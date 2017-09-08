const { Command } = require('discord-akairo');
const Logger = require('../../../util/Logger');

function exec(message) {

const used = message.member || author;
const args = message.content.split(/\s+/).slice(1);

    if(args[0]=="user"){
      if (!args[1]) return message.reply("No user given :<");
      try{
 	let member = message.mentions.members.first();       
    message.reply(`${member}`);
      }catch(err){
        return message.reply(`Invalid user specified`);
      }
    }else if(args[0]=="server"){
message.reply(`${message.guild.id}`);
  }else if(args[0]=="channel"){
    message.reply(`${message.guild.channel.id}`); 
  }
  }

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
