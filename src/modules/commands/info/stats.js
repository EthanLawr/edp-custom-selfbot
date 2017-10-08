const { Command } = require('discord-akairo');
const Discord = require ('discord.js');

function exec(message){

    const color = this.client.color(message);
	const game = message.author.presence.game || {};

	let embed = new Discord.RichEmbed()
	.setColor("#000001")
	.setTitle("**Custom Selfbot Stats**");
    embed.setDescription("These are the stats of your custom selfbot!");
    embed.addField("Memory Usage:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
    embed.addField("Client Uptime", this.formatMs(this.client.uptime));
    embed.addField("CPU Usage", `${process.hrtime()[0]/8000} %`);
    embed.addField("Game", `${game.name || 'None'}`);
    embed.addField("Commands", `54`);
    embed.addField("Operating System", `${process.platform} ${process.arch}`);
    return message.edit('', { embed });
}

module.exports = new Command('stats', exec, {
    aliases: ['stats', 'info', 'about'],
    category: 'info'
});

module.exports.formatMs = ms => {
    let x = Math.floor(ms / 1000);
    let seconds = x % 60;

    x = Math.floor(x / 60);
    let minutes = x % 60;

    x = Math.floor(x / 60);
    let hours = x % 24;

    let days = Math.floor(x / 24);

    seconds = `${'0'.repeat(2 - seconds.toString().length)}${seconds}`;
    minutes = `${'0'.repeat(2 - minutes.toString().length)}${minutes}`;
    hours = `${'0'.repeat(2 - hours.toString().length)}${hours}`;
    days = `${'0'.repeat(Math.max(0, 2 - days.toString().length))}${days}`;

    return `${days !== '00' ? `${days}:` : ''}${hours}:${minutes}:${seconds}`;
};

