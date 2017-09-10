const { Command } = require('discord-akairo');
const Discord = require ('discord.js');

function exec(message){
if (message.mentions.users.size < 1) {
        throw message.channel.send('Please choose someone to ban!');
    }
	
	const member = message.mentions.members.first(); 

    message.delete();
    member.ban();
	message.channel.send(`<@${member.user.id}> has been banned by me! Who's next? Hehe....`);
};

module.exports = new Command('ban', exec, {
    aliases: ['ban'],
    category: 'mods'
});

