const { Command } = require('discord-akairo');
var Discord = require ('discord.js');

var memedog = "" +
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

var time = new Date();
function exec(message, args){
    args.amount = Math.min(args.amount, 200);
    var ms;
    var delay=500;
    var currentTime;
    for(var i=1;i<args.amount+1;i++){
      message.channel.sendEmbed(new Discord.RichEmbed().setDescription("```"+memedog+"\t" + i + "```").setColor("#2200FF").setTitle("Memedog"));
      console.log("[Memedog] doge4life #:"+i);
      ms=time.getMilliseconds();

      do
      {
        currentTime=time.getMilliseconds;
      }while((currentTime)-ms<delay);
    }
    message.delete();
    console.log("[Memedog] Finished!");
}

module.exports = new Command('EvilsMemeDoge', exec, {
    aliases: ['memedog', 'doggo', 'mdog'],
    args: [
        {
          id: 'amount',
          type: 'integer',
          default: 1
        }
    ],
    category: 'fun'
});
