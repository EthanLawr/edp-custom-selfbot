const { Command } = require('discord-akairo');
const Discord = require ('discord.js');

function exec(message){
if (message.mentions.users.size < 1) {
        throw message.channel.send('Please choose someone to kick!');
    }
	
	const member = message.mentions.members.first(); 

    message.delete();
    member.kick();
	message.channel.send(`<@${member.user.id}> has been kicked by me! Who's next? Hehe....`);
};

module.exports = new Command('kick', exec, {
    aliases: ['kick'],
    category: 'mods'
});

