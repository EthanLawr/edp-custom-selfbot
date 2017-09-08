const { Command } = require('discord-akairo');
 const Logger = require('../../../util/Logger');
 function exec(message){
	 
    const args = message.content.split(/\s+/).slice(1);
	let count = parseInt(args[0]) || 1;

    msg.delete();
    msg.channel.fetchMessages({ limit: Math.min(count, 100), before: msg.id })
        .then(messages => {
            Promise.all(messages.map(m => m.delete()))
                .catch(msg.error)
                .then(() => {
                    msg.channel.sendMessage(`Purged \`${count}\` messages.`)
                        .then(m => m.delete(2000));
                });
        }).catch(msg.error);
};

module.exports = new Command('purge', exec, {
    aliases: ['purge'],
    category: 'util'
});

