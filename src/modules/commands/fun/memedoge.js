const { Command } = require('discord-akairo');
const Discord = require ('discord.js');

const MEMEdoge = "" +
"\t╭━━━━╮            \tThis is memedog. Help\n" +
"\t╰┃ ┣▇━▇           \tmemedog take over \n" +
"\t ┃ ┃  ╰━▅╮        \tDiscord by pasting \n" +
"\t ╰┳╯ ╰━━┳╯        \thim in 10 other \n"+
"\t  ╰╮ ┳━━╯         \tservers or he \n"+
"\t ▕▔▋ ╰╮╭━╮        \twill never be a meme dog \n"+
"\t╱▔╲▋╰━┻┻╮╲╱▔▔▔╲ \n" +
"\t▏  ▔▔▔▔▔▔▔  O O┃ \n" +
"\t╲╱▔╲▂▂▂▂╱▔╲▂▂▂╱ \n" +
"\t ▏╳▕▇▇▕ ▏╳▕▇▇▕ \n" +
"\t ╲▂╱╲▂╱ ╲▂╱╲▂╱ \n";

function exec(message){
	message.delete();
	const embed = new Discord.RichEmbed()
		.setColor("#2200FF")
		.addField("Memedog", MEMEdoge);
    return message.channel.send({ embed });	
}

module.exports = new Command('EvilsMemeDoge', exec, {
    aliases: ['memedog', 'doggo', 'mdog'],
    category: 'fun'
});
