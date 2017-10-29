const Logger = require('../functions/logger');

module.exports = {
	commands: [
		'shutdown',
		'killmyself',
		'poweroff',
		'sd'
	],
	usage: 'shutdown',
	description: 'Shuts the client down',
	category: 'Utility',
	execute: async (client, message, args) => {
		
		Logger.cmd('Shutdown');
		Logger.start('Custom Selfclient Shutting Down!');
		message.edit('Custom Selfclient shutting down!').then(() => {
        process.exit(42);
		});
	}
};
