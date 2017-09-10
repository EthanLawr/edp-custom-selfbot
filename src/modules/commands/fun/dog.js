const { Command } = require('discord-akairo');
const Discord = require ('discord.js');

const got = require('got');
getDog = (callback) => {
  got('https://random.dog/woof.json').then(res => {
    try {
      callback(undefined, JSON.parse(res.body).url);
    } catch (err) {
      callback(err);
    }
  }).catch(callback);
};

function exec(message, args) {
    return getDog((a,b)=>message.channel.sendEmbed(new Discord.RichEmbed()
	.setColor('#2200FF')
	.setImage(b)));
}

module.exports = new Command('dog', exec, {
    aliases: ['dog', 'doge', 'puppy'],
    category: 'fun'
});