const { RichEmbed } = require('discord.js');
const config = require('../config');

module.exports = {
	commands: [
	'help',
	'helpme'
	],
	usage: 'help [command]',
	description: 'View a list of commands or get information about a specific command.',
	category: 'Information',
	execute: (bot, msg, args) => {
    if (args.length > 0) {
		const command = Object.keys(bot.commands).filter((c) => bot.commands[c].commands.indexOf(args[0]) > -1);
	if (command.length > 0) {
		const embed = new RichEmbed()
			.setTitle('Command Information', '')
			.setDescription('This message will be deleted in 3 minutes')
			.setColor(config.discord.defaultColor)
			.addField('Name', bot.commands[command[0]].commands[0])
			.addField('Description', bot.commands[command[0]].description)
			.addField('Usage', bot.commands[command[0]].usage)
			.addField('Aliases', bot.commands[command[0]].commands.length > 1 ? bot.commands[command[0]].commands.slice(1).join(', ') : 'No Aliases')
			.setFooter(bot.config.strings.github)
			.setTimestamp();
        msg.edit({ embed }).then(msg.delete(180000));
	} else {
		const embed = new RichEmbed()
			.setTitle('Command List')
			.setDescription('This message will be deleted in 3 minutes')
			.setColor(config.discord.defaultColor)
			.setDescription('That is not a command that I know of.')
			.setFooter(bot.config.strings.github)
			.setTimestamp();
        msg.edit({ embed }).then(msg.delete(180000));
	}
    } else {
		let listThing = {};
		Object.keys(bot.commands).forEach((command) => {
			if (bot.commands[command].category in listThing) {
				listThing[bot.commands[command].category] += '\n' + bot.commands[command].commands[0] + ' - ' + bot.commands[command].description;
			} else {
				listThing[bot.commands[command].category] = bot.commands[command].commands[0] + ' - ' + bot.commands[command].description;
			}
		});
		const embed2 = new RichEmbed()
			.setTitle('Command List')
			.setDescription('This message will be deleted in 3 minutes')
			.setColor(config.discord.defaultColor)
			.setDescription(Object.keys(listThing).map((command) => '__' + command + '__\n' + listThing[command]).join('\n\n'))
			.setFooter(bot.config.strings.github)
			.setTimestamp();
		msg.edit({ embed: embed2 }).then(msg.delete(180000));
    }}
};
