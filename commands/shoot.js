const Logger = require('../functions/logger');

module.exports = {
	commands: [
		'shoot'
	],
	usage: 'shoot <mention>',
	description: 'Using guns since 2017',
	category: 'Fun',
	execute: (bot, msg, args) => {
    Logger.cmd('Shoot');
    if (msg.mentions.users.size < 1) {
      throw msg.channel.send('Please choose people to shoot!');
    }

    let output = msg.mentions.users.map(m => `**${m}** :gun:`).join('\n');

    msg.delete();
    const embed = new Discord.RichEmbed()
      .setColor("#0000001")
      .addField(`${msg.author.username} is on a killing spree!`, output);
        return msg.channel.send({ embed });		
  }
};
