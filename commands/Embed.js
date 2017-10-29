const { RichEmbed } = require('discord.js');
const Logger = require('../functions/logger');
const config = require('../config');

module.exports = {
	commands: [
		'embed',
		'embedsay',
		'emb',
		'say',
		'esay'
	],
	usage: 'embedsay <texthere>',
	description: 'Takes words you put in and Puts them in a embed!',
	category: 'Other',
	execute: (bot, msg, args) => {
		msgArgs=msg.content.split(' ');
		if(!args) {
			const embed = new RichEmbed()
				.setDescription('_ _')
				.setColor(config.discord.defaultColor);
			msg.channel.send('', { embed: embed });
		} else {
			Logger.contents(`${args.join(' ')}`);
			const embed = new RichEmbed()
				.setDescription(`${args.join(' ')}`)
				.setColor(config.discord.defaultColor);
			msg.channel.send('', { embed: embed });
		}
		msg.delete();
	}
};

/*
			
		let message = msg.content.substring(msg.content.indexOf(" ")+1,msg.content.length);
		var embed = new RichEmbed()


		message = (message.substring(message.indexOf(" ")));;
		msg.channel.send('', { embed: embed });
		*/


/*const { RichEmbed } = require('discord.js');
const Logger = require('../functions/logger');

module.exports = {
	commands: [
		'embed',
		'embedsay',
		'emb',
		'say',
		'esay'
	],
	usage: 'embedsay <texthere>',
	description: 'Takes words you put in and Puts them in a embed!',
	category: 'Other',
	execute: (bot, msg, args) => {
		Logger.cmd("Embed")
		if (args.length > 0) {
			const embed = new RichEmbed()
				.setTitle(args.join(' '));
			msg.edit({embed});
		} else {
			return msg.edit('**Add something after the command silly!**');
		}
	}
}*/
