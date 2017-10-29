const Logger = require('../functions/logger');

module.exports = {
	commands: [
		'shutdown',
		'killmyself',
		'poweroff',
		'sd'
	],
	usage: 'shutdown',
	description: 'Shuts the bot down',
	category: 'Utility',
	execute: async (bot, msg, args) => {
		
		Logger.cmd('Shutdown');
		Logger.start('Custom Selfbot Shutting Down!');
		msg.edit('Custom Selfbot shutting down!').then(() => {
        process.exit(42);
		});
	}
};
