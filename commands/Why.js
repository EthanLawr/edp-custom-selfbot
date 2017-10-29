const snekfetch = require('snekfetch');
const { RichEmbed } = require('discord.js');

module.exports = {
	commands: [
		'why',
		'butwhy',
		'justwhy'
	],
	usage: 'why',
	description: 'Why would you do that....',
	category: 'Fun',
	execute: (bot, msg) => {
		snekfetch.get('https://nekos.life/api/why').then((res) => {
		if (res.status !== 200) {
			return msg.channel.send('**An error has occurred!**');
		}

		msg.edit(`${res.body.why}`);
		});
    }
};