 const { Command } = require('discord-akairo');
 const Logger = require('../../../util/Logger');
 function exec(message){
	 
    const args = message.content.split(/\s+/).slice(1);
	let count = parseInt(args[0]) || 1;

    message.delete();
    message.channel.fetchMessages({ limit: Math.min(count, 100), before: message.id })
        .then(messages => {
            Promise.all(messages.filter(m => m.author.bot === true)
                .map(m => m.delete()))
                .then(() => {
                    message.channel.sendMessage(`Flushed \`${count}\` messages.`).then(m => m.delete(2000));
                });
        }).catch(message.error);
};

module.exports = new Command('flush', exec, {
    aliases: ['flush', 'botclear'],
    category: 'util'
});

