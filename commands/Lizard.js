const snekfetch = require('snekfetch');
const { RichEmbed } = require('discord.js');
const config = require('../config');

module.exports = {
	commands: [
		'lizard',
		'lizards'
	],
	usage: 'lizard',
	description: 'Lizards!! :lizard:',
	category: 'Fun',
	execute: (bot, msg) => {
		snekfetch.get('https://nekos.life/api/lizard').then((res) => {
		if (res.status !== 200) {
			return msg.channel.send('An error has occurred!');
		}

		msg.edit('', {
			embed: new RichEmbed()
				.setColor(config.discord.defaultColor)
				.setTitle('Random Lizards')
				.setDescription('This message will be deleted in 3 minutes')
				.setImage(res.body.url)
				.setFooter(`${bot.config.strings.github}`)
		}).then(msg.delete(180000));
		});
	}
};
