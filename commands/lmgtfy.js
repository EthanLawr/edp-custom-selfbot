const Logger = require('../functions/logger');

module.exports = {
	commands: [
		'lmgtfy',
    'lmg'
	],
	usage: 'lmgtfy <content>',
	description: 'Learning to use google',
	category: 'Fun',
	execute: (bot, msg, args) => {
		Logger.cmd("Lmgtfy");
    if (!args[0]) {
        return msg.edit('You must provide something to search for!')
    } else {
    msg.edit(`Heres how you google this! http://www.lmgtfy.com/?q=${args.join('+')}`);
    }
	}
};
