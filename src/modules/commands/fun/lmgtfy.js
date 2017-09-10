const { Command } = require('discord-akairo');

function exec(message) {
    const args = message.content.split(/\s+/).slice(1);
    if (!args[0]) {
        return message.edit('You must provide something to search for!')
    } else {
    message.edit(`Heres how you google this! http://www.lmgtfy.com/?q=${args.join('+')}`);
	}
};

module.exports = new Command('lmgtfy', exec, {
    aliases: ['lmgtfy', 'lmg'],
    category: 'fun'
});
