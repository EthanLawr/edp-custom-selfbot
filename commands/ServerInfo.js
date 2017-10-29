const dateFormat = require('dateformat');
const { RichEmbed } = require('discord.js');
const config = require('../config');

module.exports = {
	commands: [
		'serverinfo',
		'sinfo'
	],
	usage: 'serverinfo',
	description: 'Get information on the current server.',
	category: 'Information',
	execute: (bot, msg) => {

		if (!msg.guild) {
			msg.edit('**This can only be used in a guild!**');
		}

		const millis = new Date().getTime() - msg.guild.createdAt.getTime();
		const days = millis / 1000 / 60 / 60 / 24;
		const owner = msg.guild.owner.user || {};
		const verificationLevels = [
			'None',
			'Low',
			'Medium',
			'Insane',
			'Extreme'
		];

		const embed = new RichEmbed()
			.setTitle(`${msg.guild.name}`)
			.setDescription('This message will be deleted in 3 minutes')
			.addField('Created On', `${dateFormat(msg.guild.createdAt)}`, true)
			.addField('Days Since Creation', `${days.toFixed(0)}`, true)
			.addField('Region', `${msg.guild.region}`, true)
			.addField('Member Count', `${msg.guild.members.filter((member) => member.presence.status !== 'offline').size} / ${msg.guild.memberCount}`, true)
			.addField('Owner', `${owner.username || 'None'}`, true)
			.addField('Text Channels', `${msg.guild.channels.filter((member) => member.type === 'text').size}`, true)
			.addField('Voice Channels', `${msg.guild.channels.filter((member) => member.type === 'voice').size}`, true)
			.addField('Verification Level', `${verificationLevels[msg.guild.verificationLevel]}`, true)
			.addField('Roles', `${(() => {
					const roles = msg.guild.roles.map(r => r.toString()).join(', ');
					if (roles.length > 1023) return 'A lot of roles!';
					return roles; 
					})()}`, false)
			.setFooter(bot.config.strings.github)
			.setColor(config.discord.defaultColor)
			.setTimestamp();
		msg.edit({ embed }).then(msg.delete(180000));
	}
};
