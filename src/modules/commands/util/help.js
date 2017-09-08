const { Command } = require('discord-akairo');
const Discord = require ('discord.js');

const utility = "" +
"**Async** - Something Like Eval but better\n" +
"**Eval** - Something for progammers basically\n" +
"**Flush** - Prunes bot messages provided you have the perms\n" +
"**Game** - Changes your playing status\n"+
"**Help** - This Menu\n" +
"**Ping** - Tests your connection to the bot's host\n" +
"**Prune** - Prunes your messages only\n" +
"**Purge** - Prunes all messages provided you have the perms\n" +
"**Python** - Something Like Eval but in the Python Language\n" +
"**Quote** - Quotes peoples messages via message id\n" +
"**Restart** - Restarts the bot. Does not turn it back on\n" +
"**Status** - Changes your status (Example: Online, Invisble, etc.)\n";

const fun = "" +
"**Color** - Creates a Rich Embed with a random color (And shows the hex code automatically)\n" +
"**Embed** - Puts the text you input into a Rich Embed\n" +
"**Flip** - Flips the text you input\n" +
"**GreenText** - Makes a green code block containing text that you specify\n" +
"**MemeDoge** - Creates a doge meme (Copypasta)\n" +
"**OrangeText** - Makes an orange code block containing text that you specify\n" +
"**React** - Turns text into reactions!\n" +
"**Reverse** - Reverses the text you input\n" +
"**RPN** - Reverse Polish notation\n" +
"**Shoot** - Lets you shoot some people!\n" +
"**Shout** - Turns text into emotes!\n" +
"**SuperReact** - Reacts with a random emote that you are able to use\n" +
"**Time** - Shows the time of an area you name\n" +
"**XKCD** - Generates a random webcomic\n";

const info = "" +
"**Avatar** - Shows a persons avatar\n" +
"**Edits** - Checks the edits of a message\n" +
"**Emotes** - Shows a guild's emotes\n" +
"**Guild** - Shows information about a server\n" +
"**Icon** - Shows a guilds icon\n" +
"**Id** - Shows the ids of objects\n" +
"**Idd** - Rewrite of id\n" +
"**Locate** - Finds where an emoji is from\n" +
"**Stats** - Shows the bot's statistics\n" +
"**User** - Shows information about a user\n";

const time = new Date();
function exec(message, args){
    args.amount = Math.min(args.amount, 200);
    let ms;
    let delay=500;
    let currentTime;
    for(let i=1;i<args.amount+1;i++){
      message.channel.sendEmbed(new Discord.RichEmbed().setDescription("Type //help [command] to learn how to use a command! (coming soon)").setColor("#2200FF").setTitle(`Help Menu`).addField("Fun Help Menu", fun).addField("Info Help Menu", info).addField("Utility Help Menu", utility));
      ms=time.getMilliseconds();

      do
      {
        currentTime=time.getMilliseconds;
      }while((currentTime)-ms<delay);
    }
    message.delete();
}

module.exports = new Command('help', exec, {
    aliases: ['help'],
    args: [
        {
          id: 'amount',
          type: 'integer',
          default: 1
        }
    ],
    category: 'info'
});

