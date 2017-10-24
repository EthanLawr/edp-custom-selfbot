const Logger = require('../functions/logger');
module.exports = {
	commands: [
		'ping',
		'pang',
		'pong',
		'pung',
		'peng'
	],
	usage: 'ping',
	description: 'Shows your current ping!',
	category: 'Information',
	execute: (bot, msg) => {
		Logger.cmd("Ping");
		msg.channel.send("Savage").then(m => m.edit('Ping: `' + `${m.createdTimestamp - msg.createdTimestamp}`+ 'ms`'));
		msg.delete();
	}
};


