const { Command } = require('discord-akairo');
const Discord = require ('discord.js');

const got = require('got');
getCat = (callback) => {
  got('http://www.random.cat/meow').then(res => {
    try {
      callback(undefined, JSON.parse(res.body).file);
    } catch (err) {
      callback(err);
    }
  }).catch(callback);
};

function exec(message, args) {
    return getCat((a,b)=>message.channel.sendEmbed(new Discord.RichEmbed()
	.setColor('#2200FF')
	.setImage(b)));
}

module.exports = new Command('cat', exec, {
    aliases: ['cat', 'kitty'],
    category: 'fun'
});