const { Command } = require('discord-akairo');
const Discord = require ('discord.js');

function exec(message){
if (message.mentions.users.size < 1) {
        throw message.channel.send('Please choose people to shoot!');
    }

    let output = message.mentions.users.map(m => `**${m}** :gun:`).join('\n');

    message.delete();
	const embed = new Discord.RichEmbed()
		.setColor("#0000001")
		.addField(`${message.author.username} is on a killing spree!`, output);
    return message.channel.send({ embed });		

};

module.exports = new Command('shoot', exec, {
    aliases: ['shoot'],
    category: 'fun'
});