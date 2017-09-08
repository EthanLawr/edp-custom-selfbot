var Discord = require ('discord.js');
const { Command } = require('discord-akairo');

var defaultColor = "#A70000";

function exec(message, args){
  msgArgs=message.content.split(' ');
  var potentialColor = msgArgs[1];
  console.log("[EvilsCustomEmbed] customColor: "+ potentialColor);

  var msg=message.content.substring(message.content.indexOf(" ")+1,message.content.length);
  var embed=new Discord.RichEmbed().setDescription(msg).setColor(defaultColor);

  msg=(msg.substring(msg.indexOf(" ")));
  try{
    message.edit("");
    //message.edit('', { embed }) alternate form of sending
    console.log("[EvilsCustomEmbed]: original msg " + message.content);
    var isC  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(potentialColor);
    if(isC)
      var embed=new Discord.RichEmbed().setDescription(msg).setColor(potentialColor);
    message.channel.sendEmbed(embed);
  }catch(err) {
    console.log("[EvilsCustomEmbed] RIIIIP custom color")
    message.edit("");
  }

  message.delete();
}

module.exports = new Command('EvilsEvilsCustomEmbed', exec, {
    aliases: ['emb', 'embd','embed'],
    args: [
        {
            defaultColor: defaultColor,
            id: 'content',
            match: 'content',
            default: () => (1 << 24) * Math.random() | 0
        }
    ],
    category: 'fun'
});