const dateFormat = require('dateformat');
const { RichEmbed } = require('discord.js');
const config = require('../config');

module.exports = {
	commands: [
		'userinfo',
		'uinfo'
	],
	usage: 'userinfo <user mention or id>',
	description: 'Get information about a user.',
	category: 'Information',
	execute: (bot, msg, args, name) => {
		if(!msg.guild) {
			return msg.edit('This command can only be used in a server');
		}
		if(args.length < 1) {		
			const embed = new RichEmbed()
				.setTitle(`${msg.author.tag} | ${msg.author.id}`)
				.setDescription('This message will be deleted in 3 minutes')
				.setColor(config.discord.defaultColor)
				.addField('Status', `${msg.author.presence.status[0].toUpperCase() + msg.author.presence.status.slice(1)}`, true)
				.addField('Game', `${(msg.author.presence.game && msg.author.presence.game && msg.author.presence.game.name) || 'Not playing a game.'}`, true)
				.addField('Created On', `${dateFormat(msg.author.createdAt)}`, true)
				.addField('Joined On', `${dateFormat(msg.author.joinedAt)}`, true)
				.setFooter(bot.config.strings.github)
				.setThumbnail(msg.author.avatarURL)
				.setTimestamp();
			return msg.edit({ embed }).then(msg.delete(180000));
		}
		let user = bot.users.get((msg.mentions.users.first() && msg.mentions.users.first().id) || args[0]);
		if(!user) {
			return msg.edit('A user with that ID was not found!');
		}
		let member = msg.guild.members.get(user.id);
		if(!member) {
		return msg.edit('A user with that ID was not found!');
		}
		const millisCreated = new Date().getTime() - user.createdAt.getTime();
		const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

		const millisJoined = new Date().getTime() - member.joinedAt.getTime();
		const daysJoined = millisJoined / 1000 / 60 / 60 / 24;


		const embed = new RichEmbed()
			.setTitle(`${user.tag} | ${user.id}`)
			.setDescription('This message will be deleted in 3 minutes')
			.setColor(config.discord.defaultColor)
			.addField('Status', `${user.presence.status[0].toUpperCase() + user.presence.status.slice(1)}`, true)
			.addField('Game', `${(user.presence.game && user.presence.game && user.presence.game.name) || 'Not playing a game.'}`, true)
			.addField('Created On', `${dateFormat(user.createdAt)}`, true)
			.addField('Days Since Creation', `${daysCreated.toFixed(0)}`, true)
			.addField('Joined On', `${dateFormat(member.joinedAt)}`, true)
			.addField('Days Since Joining', `${daysJoined.toFixed(0)}`, true)
			.setFooter(bot.config.strings.github)
			.setThumbnail(user.avatarURL)
			.setTimestamp();
		return msg.edit({ embed }).then(msg.delete(180000));
	}
};
