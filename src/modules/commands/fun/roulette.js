const { Command } = require('discord-akairo');

const roulette = [
"Wow! A Blank! You are safe",
"Oh no.... you were shot ",
"A Blank! You are safe",
"A Blank!! You are safe",
"A Blank.. You are safe",
"Blank... You are safe"
];

function exec(message) {
    let member = message.mentions.members.first();
    if (!member)
        return message.edit('Who\'s going to be playing roulette? Pick 1 person!');
    else {
            message.edit(`${roulette[Math.floor(roulette.length*Math.random())]}`+" <@"+`${member.id}`+">")

    }
};

module.exports = new Command('roulette', exec, {
    aliases: ['roulette'],
	channelRestriction: 'guild',
    category: 'fun'
});
