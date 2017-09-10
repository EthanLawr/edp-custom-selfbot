const { Command } = require('discord-akairo');
const Discord = require ('discord.js');

const got = require('got');
getDog = (callback) => {
  got('https://random.dog/woof.json').then(res => {
    try {
      callback(undefined, JSON.parse(res.body).url);
    } catch (err) {
      callback(err);
    }
  }).catch(callback);
};

function exec(message, args) {
    getDog((a,b)=>message.channel.sendEmbed(new Discord.RichEmbed()
	.setColor('#2200FF')
	.setImage(b)));
	
	getDog((a,b)=>message.channel.sendEmbed(new Discord.RichEmbed()
	.setColor('#2200FF')
	.setImage(b)));
	
	getDog((a,b)=>message.channel.sendEmbed(new Discord.RichEmbed()
	.setColor('#2200FF')
	.setImage(b)));
	
	getDog((a,b)=>message.channel.sendEmbed(new Discord.RichEmbed()
	.setColor('#2200FF')
	.setImage(b)));
	
	return getDog((a,b)=>message.channel.sendEmbed(new Discord.RichEmbed()
	.setColor('#2200FF')
	.setImage(b)));
}

module.exports = new Command('dogbomb', exec, {
    aliases: ['dogbomb', 'dogebomb', 'puppybomb'],
    category: 'fun'
});