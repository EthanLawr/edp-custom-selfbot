const snekfetch = require('snekfetch');
const { RichEmbed } = require('discord.js');
const config = require('../config');

module.exports = {
	commands: [
		'neko',
		'nekos'
	],
	usage: 'neko',
	description: 'OwO',
	category: 'Fun',
	execute: (bot, msg) => {
		snekfetch.get('https://nekos.life/api/neko').then((res) => {
		if (res.status !== 200) {
			return msg.channel.send('An error has occurred!');
		}

		msg.edit('', {
			embed: new RichEmbed()
				.setColor(config.discord.defaultColor)
				.setTitle('Random Neko')
				.setDescription('This message will be deleted in 3 minutes')
				.setImage(res.body.neko)
				.setFooter(`${bot.config.strings.github}`)
		}).then(msg.delete(180000));;
		});
	}
};
