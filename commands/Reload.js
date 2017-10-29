const util = require('util');
const Logger = require('../functions/logger');

module.exports = {
	commands: [
		'reload'
	],
	usage: 'reload <command>',
	description: 'Reloads a command from inside the bot.',
	category: 'Utility',
	execute: (bot, msg, args) => {
		if (args.length > 0) {
			const filtered = Object.keys(bot.commands).filter((c) => args[0] === c || bot.commands[c].commands.indexOf(args[0]) > -1);
		if (filtered.length > 0) {
			const old = Object.create(bot.commands[filtered[0]]);
			delete bot.commands[filtered[0]];
			delete require.cache[require.resolve('./' + filtered[0] + '.js')];
        try {
			bot.commands[filtered[0]] = require('./' + filtered[0] + '.js');
			msg.edit('Successfully reloaded command `' + bot.commands[filtered[0]].commands[0] + '`.');
			Logger.debug('Reloaded ' + bot.commands[filtered[0]].commands[0]);
        } catch(error) {
			msg.edit('An error occured while assigning command to self. Restoring in-memory command to before reload.\n```js\n' + util.inspect(error) + '```');
			Logger.warn(util.inspect(error));
			delete bot.commands[filtered[0]];
			bot.commands[filtered[0]] = old;
        }
		} else {
			msg.edit('That is not a valid command name.');
			Logger.warn('That is not a valid command name.');
		}
		} else {
			msg.edit('Missing a command to reload.');
			Logger.warn('Missing a command to reload.');
		}
	}
};
