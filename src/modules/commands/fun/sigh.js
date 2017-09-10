const { Command } = require('discord-akairo');

const sigh = "" +
"```" +
"  _______   _________    _________   ,        ,`\n" +
" /              |       /            |        |\n" +
"|               |      |             |        |\n" +
"|               |      |             |        |\n" +
" \\_____,        |      |  _______,   |________|\n" +
"        \\       |      |         |   |        |\n" +
"         |      |      |         |   |        |\n" +
"         |      |      |         |   |        |\n" +
"  ______/   ____|____   \\________|   |        |\n" +
"\u200b\n" +
"```";

function exec(message){
  message.edit(sigh);
}

module.exports = new Command('sigh', exec, {
    aliases: ['sigh'],
    category: 'fun'
});