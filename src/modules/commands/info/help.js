const { Command } = require('discord-akairo');
const Discord = require ('discord.js');
 

//Categories

//Utility
const CategoryUtility = "" +
"**Flush** - Prunes bot messages provided you have the perms\n" +
"**Game** - Changes your playing status\n"+
"**Github** - Searches for Github repositories\n"+
"**Google** - Searches for whatever you want!\n"+
"**Ping** - Tests your connection to the bot's host\n" +
"**Prune** - Prunes your messages only\n" +
"**Purge** - Prunes all messages provided you have the perms\n" +
"**Quote** - Quotes peoples messages via message id\n" +
"**Reload** - Reloads a command that you choose\n" +
"**Restart** - Restarts the bot. Does not turn it back on\n" +
"**Status** - Changes your status (Example: Online, Invisble, etc.)\n";

//Evaluation Commands
const CategoryEvaluations = "" +
"**Async** - Something Like Eval but better\n" +
"**Eval** - Something for progammers basically\n" +
"**Python** - Something Like Eval but in the Python Language\n" +
"**RPN** - Reverse Polish notation\n" +
"**Ruby** - Something Like Eval but in the Ruby Language\n";

//Fun
const CategoryFun = "" +
"**Cat** - Creates an image of a cat!\n" +
"**CatBomb** - Creates multiple images of cats! (5)\n" +
"**Color** - Creates a Rich Embed with a random color (And shows the hex code automatically)\n" +
"**Dog** - Creates an image of a dog!\n" +
"**DogBomb** - Creates multiple images of dogs! (5)\n" +
"**Embed** - Puts the text you input into a Rich Embed\n" +
"**Flip** - Flips the text you input\n" +
"**GreenText** - Makes a green code block containing text that you specify\n" +
"**Lmgtfy** - Makes a tutorial to search google!\n" +
"**MemeDoge** - Creates a doge meme (Copypasta)\n" +
"**OrangeText** - Makes an orange code block containing text that you specify\n" +
"**Pokemon** - Generates random pokemon!\n" +
"**React** - Turns text into reactions!\n" +
"**Reverse** - Reverses the text you input\n" +
"**Roulette** - Russian Roulette!\n" +
"**Shoot** - Lets you shoot some people!\n" +
"**Shout** - Turns text into emotes!\n" +
"**Sigh** - Makes a giant sigh\n" +
"**SuperReact** - Reacts with a random emote that you are able to use\n" +
"**Time** - Shows the time of an area you name\n" +
"**XKCD** - Generates a random webcomic\n";

//Info
const CategoryInfo = "" +
"**Avatar** - Shows a persons avatar\n" +
"**Edits** - Checks the edits of a message\n" +
"**Emotes** - Shows a guild's emotes\n" +
"**Guild** - Shows information about a server\n" +
"**Help** - This Menu\n" +
"**Icon** - Shows a guilds icon\n" +
"**Id** - Shows the ids of objects\n" +
"**Idd** - Rewrite of id\n" +
"**Locate** - Finds where an emoji is from\n" +
"**Stats** - Shows the bot's statistics\n" +
"**User** - Shows information about a user\n";

//Data
const CategoryData = "" +
"**Image** - Allows you to make a shortcut for an image in a Rich Embed\n" +
"**Log** - Logs recent messages in a channel you select, great for reporting people to discord!\n"+
"**Tag** - Allows you to make a shortcut for text\n";

//Moderation
const CategoryModeration = "" +
"**Ban** - Ban someone by mentioning them\n" +
"**Kick** - Kick someone by mentioning them\n";


//Commands Constants

//Cat
const CatDesc = "" +
"Generates a random cat image";

const CatUsage = "" + 
"//cat\n" +
"\tProduces a random cat image";

const KittyDesc = "" +
"Generates a random kitty image";

const KittyUsage = "" + 
"//kitty\n" +
"\tProduces a random kitty image";

//CatBomb
const CatBombDesc = "" +
"Generates a bomb of random cat images (5)";

const CatBombUsage = "" + 
"//catbomb\n" +
"\tProduces a bomb of random cat images";

const KittyBombDesc = "" +
"Generates a bomb of random kitty images (5)";

const KittyBombUsage = "" + 
"//kittybomb\n" +
"\tProduces a bomb of random kitty images (5)";

//Color
const ColorDesc = "" +
"Generates a random color or outputs with a specified color.";

const ColorUsage = "" + 
"//color\n" +
"\tProduces a random color\n" 
"//color [Hex Code]\n" +
"\tProduces a color based on what hex code you input\n" +
"//color[Integer]\n" +
"\tProduces a color based on what integer you input\n" +
"//color[auto]\n" +
"\tMakes it so that the color is equal to your current role";

const ColourDesc = "" + 
"Generates a random colour or outputs with a specified colour.";

const ColourUsage = "" + 
"//colour\n" +
"\tProduces a random colour\n" 
"//colour [Hex Code]\n" +
"\tProduces a colour based on what hex code you input\n" +
"//colour[Integer]\n" +
"\tProduces a colour based on what integer you input\n" +
"//colour[auto]\n" +
"\tMakes it so that the colour is equal to your current role";
	
//Dog
const DogDesc = "" +
"Generates a random dog image";

const DogUsage = "" + 
"//dog\n" +
"\tProduces a random dog image";

const DogeDesc = "" +
"Generates a random doge image";

const DogeUsage = "" + 
"//doge\n" +
"\tProduces a random doge image";

const PuppyDesc = "" +
"Generates a random puppy image";

const PuppyUsage = "" + 
"//puppy\n" +
"\tProduces a random puppy image";

//DogBomb
const DogBombDesc = "" +
"Generates a bomb of random dog images (5)";

const DogBombUsage = "" + 
"//dogbomb\n" +
"\tProduces a bomb of random dog images";

const DogeBombDesc = "" +
"Generates a bomb of random doge images (5)";

const DogeBombUsage = "" + 
"//dogebomb\n" +
"\tProduces a bomb of random doge images";

const PuppyBombDesc = "" +
"Generates a bomb of random puppy images (5)";

const PuppyBombUsage = "" + 
"//puppybomb\n" +
"\tProduces a bomb of random puppy images (5)";

//Embed
const EmbedDesc = "" +
"Generates a Rich Embedded message with message content of your choice.";

const EmbedUsage = "" +
"//embed [message content]\n" +
"\tProduces a Rich Embed with the message content you provide";

const EmbUsage = "" +
"//emb [message content]\n" +
"\tProduces a Rich Embed with the message content you provide";

const EmbdUsage = "" +
"//embd [message content]\n" +
"\tProduces a Rich Embed with the message content you provide";

//Flip
const FlipDesc = "" +
"Flips the message you provide upsidedown!";

const FlipUsage = "" +
"//flip [message content]\n" +
"\tProduces a flipped message with the message content you provide";


//GreenText
const GreenTextDesc = "" +
"Makes some green text.\n" +
"Each new line will be prefixed with a `>`."

const GreenTextUsage = "" +
"//greentext [message content]\n" +
"\tProduces a message with the message content you provide in a green coloration";

const GreenUsage = "" +
"//green [message content]\n" +
"\tProduces a message with the message content you provide in a green coloration";

//Lmgtfy
const LmgtfyDesc = "" +
"Makes a link showing you how to search something on google\n";

const LmgtfyUsage = "" +
"//lmgtfy [message content]\n" +
"\tProduces a link showing you how to search something on google";

const LmgUsage = "" +
"//lmg [message content]\n" +
"\tProduces a link showing you how to search something on google";

//Meme Dog
const MemeDogDesc = "" +
"Generates a Meme Doge";

const MemeDogUsage = "" + 
"//memedog\n" +
"\tGenerates a Meme Doge";

const MemeDoggoDesc = "" +
"Generates a Meme Doggo";

const MemeDoggoUsage = "" + 
"//memedoggo\n" +
"\tGenerates a Meme Doggo";

const MDogDesc = "" +
"Generates a MDog";

const MDogUsage = "" + 
"//mdog\n" +
"\tGenerates a MDog";

//OrangeText
const OrangeTextDesc = "" +
"Makes some orange text.\n";

const OrangeTextUsage = "" +
"//orangetext [message content]\n" +
"\tProduces a message with the message content you provide in a orange color";

const OrangeUsage = "" +
"//orange [message content]\n" +
"\tProduces a message with the message content you provide in a orange color";

function exec(message, args){
	
	const urgs = message.content.split(/\s+/).slice(1);

    //Incase nothing is presented for the help menu	
	if (!urgs[0]) {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Type //help [command] to learn how to use a command! (coming soon)")
		.setColor("#2200FF")
		.setTitle(`Help Menu`)
		.addField("Want all of the help commands?", "Type `//help all`")
		.addField("Want all of the fun help commands?", "Type `//help fun`")
		.addField("Want all of the utility help commands?", "Type `//help utility` or `//help util`")
		.addField("Want all of the info help commands?", "Type `//help information` or `//help info`")
		.addField("Want all of the moderation help commands?", "Type `//help moderation` or `//help mod`")
		.addField("Want all of the evaluation help commands?", "Type `//help evaluation` or `//help evalu`")
		.addField("Want all of the data help commands?", "Type `//help data`");
    return message.channel.send({ embed });		
    }
	
	//Categories
	
	//All Categories
    if (urgs[0]=="all") {
	message.delete();
    let embed = new Discord.RichEmbed()
		.setDescription("Type //help [command] to learn how to use a command! (coming soon)")
		.setColor("#2200FF")
		.setTitle(`Help Menu`)
		.addField("Fun Help Menu", CategoryFun)
		.addField("Info Help Menu", CategoryInfo);
	message.channel.send({ embed });
	embed = new Discord.RichEmbed()
		.setDescription("Type //help [command] to learn how to use a command! (coming soon)")
		.setColor("#2200FF")
	    .setTitle(`Help Menu Part 2`)
		.addField("Utility Help Menu", CategoryUtility)
		.addField("Moderation Help Menu", CategoryModeration)
		.addField("Evaluation Help Menu", CategoryEvaluations)
		.addField("Data Help Menu", CategoryData);

	return message.channel.send({ embed });	 

	  }
	  
	//Fun Commands
	if (urgs[0]=="fun") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription(CategoryFun)
		.setColor("#2200FF")
		.setTitle(`Fun Help Menu`);
	return message.channel.send({ embed });
    }
	
	//Information Commands
	if (urgs[0]=="information") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription(CategoryInfo)
		.setColor("#2200FF")
		.setTitle(`Information Help Menu`);
	return message.channel.send({ embed });
    }
	
	//Info Commands
	if (urgs[0]=="info") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription(CategoryInfo)
		.setColor("#2200FF")
		.setTitle(`Info Help Menu`);
	return message.channel.send({ embed });
    }
	
	//Utility Commands
	if (urgs[0]=="utility") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription(CategoryUtility)
		.setColor("#2200FF")
		.setTitle(`Utility Help Menu`);
	return message.channel.send({ embed });
    }
	
	//Util Commands
	if (urgs[0]=="util") {
	message.delete();
	const embed = new Discord.RichEmbed()
		.setDescription(CategoryUtility)
		.setColor("#2200FF")
		.setTitle(`Util Help Menu`);
	return message.channel.send({ embed });
    }
	
	//Moderation Commands
	if (urgs[0]=="moderation") {
	message.delete();
	const embed = new Discord.RichEmbed()
		.setDescription(CategoryModeration)
		.setColor("#2200FF")
		.setTitle(`Moderation Help Menu`);
	return message.channel.send({ embed });
    }
	
	//Mod Commands
	if (urgs[0]=="mod") {
	message.delete();
	const embed = new Discord.RichEmbed()
		.setDescription(CategoryModeration)
		.setColor("#2200FF")
		.setTitle(`Mod Help Menu`);
	return message.channel.send({ embed });
    }
	
	//Evaluation Commands
	if (urgs[0]=="evaluation") {
	message.delete();
	const embed = new Discord.RichEmbed()
		.setDescription(CategoryEvaluations)
		.setColor("#2200FF")
		.setTitle(`Evaluation Help Menu`);
	return message.channel.send({ embed });
    }
	
	//Evalu Commands
	if (urgs[0]=="evalu") {
	message.delete();
	const embed = new Discord.RichEmbed()
		.setDescription(CategoryEvaluations)
		.setColor("#2200FF")
		.setTitle(`Eval Help Menu`);
	return message.channel.send({ embed });
    }
	
	//Data Commands
	if (urgs[0]=="data") {
	message.delete();
	const embed = new Discord.RichEmbed()
		.setDescription(CategoryData)
		.setColor("#2200FF")
		.setTitle(`Data Help Menu`);
	return message.channel.send({ embed });
    }

	
/*  Commands
	
	Fun Commands */
	
	//Cat Command
	if (urgs[0]=="cat") {
	message.delete();
	const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Cat", CatDesc)
		.addField("Aliases:", "Cat\n"+"Kitty")
		.addField("Usage:", CatUsage);
	return message.channel.send({ embed });
    }
	
	//Cat Command Alias: Kitty
	if (urgs[0]=="kitty") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Kitty", KittyDesc)
		.addField("Aliases:", "Kitty\n"+"Cat")
		.addField("Usage:", KittyUsage);
	return message.channel.send({ embed });
    }
	
	//CatBomb Command
	if (urgs[0]=="catbomb") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("CatBomb", CatBombDesc)
		.addField("Aliases:", "CatBomb\n"+"KittyBomb")
		.addField("Usage:", CatBombUsage);
	return message.channel.send({ embed });
    }
	
	//CatBomb Command Alias: KittyBomb
	if (urgs[0]=="kittybomb") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("KittyBomb", KittyBombDesc)
		.addField("Aliases:", "KittyBomb\n"+"CatBomb")
		.addField("Usage:", KittyBombUsage);
	return message.channel.send({ embed });
    }
	
	//Color Command
	if (urgs[0]=="color") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Color", ColorDesc)
		.addField("Aliases:", "Color\n"+"Colour")
		.addField("Usage:", ColorUsage);
	return message.channel.send({ embed });
    }
	
	//Color Command Alias: Colour
	if (urgs[0]=="colour") {
	message.delete();		
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Colour", ColourDesc)
		.addField("Aliases:", "Colour\n"+"Color")
		.addField("Usage:", ColourUsage);
	return message.channel.send({ embed });
    }
	
	//Dog Command
	if (urgs[0]=="dog") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Dog", DogDesc)
		.addField("Aliases:", "Dog\n"+"Doge\n"+"Puppy")
		.addField("Usage:", DogUsage);
	return message.channel.send({ embed });
    }
	
	//Dog Command Alias: Doge
	if (urgs[0]=="doge") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Doge", DogeDesc)
		.addField("Aliases:", "Doge\n"+"Puppy\n"+"Dog")
		.addField("Usage:", DogeUsage);
	return message.channel.send({ embed });
    }
	
	//Dog Command Alias: Puppy
	if (urgs[0]=="puppy") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Puppy", PuppyDesc)
		.addField("Aliases:", "Puppy\n"+"Dog\n"+"Doge")
		.addField("Usage:", PuppyUsage);
	return message.channel.send({ embed });
    }
	
	//DogBomb Command
	if (urgs[0]=="dogbomb") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("DogBomb", DogBombDesc)
		.addField("Aliases:", "DogBomb\n"+"DogeBomb\n"+"PuppyBomb")
		.addField("Usage:", DogBombUsage);
	return message.channel.send({ embed });
    }
	
	//DogBomb Command Alias: DogeBomb
	if (urgs[0]=="dogebomb") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("DogeBomb", DogeBombDesc)
		.addField("Aliases:", "DogeBomb\n"+"PuppyBomb\n"+"DogBomb")
		.addField("Usage:", DogeBombUsage);
	return message.channel.send({ embed });
    }
	
	//DogBomb Command Alias: PuppyBomb
	if (urgs[0]=="puppybomb") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("PuppyBomb", PuppyBombDesc)
		.addField("Aliases:", "PuppyBomb\n"+"DogBomb\n"+"DogeBomb")
		.addField("Usage:", PuppyBombUsage);
	return message.channel.send({ embed });
    }
	
	//Embed Command
	if (urgs[0]=="embed") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Embed", EmbedDesc)
		.addField("Aliases:", "Embed\n"+"Emd\n"+"Embd")
		.addField("Usage:", EmbedUsage);
	return message.channel.send({ embed });
    }
	
	//Embed Command Alias: Emb
	if (urgs[0]=="emb") {
	message.delete();	
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Emb", EmbedDesc)
		.addField("Aliases:", "Embd\n"+"Embed\n"+"Emb")
		.addField("Usage:", EmbUsage);
	return message.channel.send({ embed });
    }
	
	//Embed Command Alias: Embd
	if (urgs[0]=="embd") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Embd", EmbedDesc)
		.addField("Aliases:", "Emb\n"+"Embd\n"+"Embed")
		.addField("Usage:", EmbdUsage);
	return message.channel.send({ embed });
    }
	
	//Flip Command
	if (urgs[0]=="flip") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Flip", FlipDesc)
		.addField("Aliases:", "Flip")
		.addField("Usage:", FlipUsage);
	return message.channel.send({ embed });
    }
	
	//GreenText Command
	if (urgs[0]=="greentext") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("GreenText", GreenTextDesc)
		.addField("Aliases:", "GreenText\n" + "Green")
		.addField("Usage:", GreenTextUsage);
	return message.channel.send({ embed });		
    }	
	
	//GreenText Command Alias: Green
	if (urgs[0]=="green") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Green", GreenTextDesc)
		.addField("Aliases:", "Green\n" + "GreenText")
		.addField("Usage:", GreenUsage);	
	return message.channel.send({ embed });
    }
	
	//Lmgtfy Command
	if (urgs[0]=="lmgtfy") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Lmgtfy", LmgtfyDesc)
		.addField("Aliases:", "Lmgtfy\n" + "Lmg")
		.addField("Usage:", LmgtfyUsage);
	return message.channel.send({ embed });
    }	
	
	//Lmgtfy Command Alias: Lmg
	if (urgs[0]=="lmg") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Lmg", LmgtfyDesc)
		.addField("Aliases:", "Lmg\n" + "Lmgtfy")
		.addField("Usage:", LmgUsage);
	return message.channel.send({ embed });
    }	
	
	//MemeDog Command
	if (urgs[0]=="memedog") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("MemeDog", MemeDogDesc)
		.addField("Aliases:", "MemeDog\n"+"MemeDoggo\n"+"MDog")
		.addField("Usage:", MemeDogUsage);
	return message.channel.send({ embed });
    }
	
	//MemeDog Command Alias: MemeDoggo
	if (urgs[0]=="memedoggo") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("MemeDoggo", MemeDoggoDesc)
		.addField("Aliases:", "MemeDoggo\n"+"MDog\n"+"MemeDog")
		.addField("Usage:", MemeDoggoUsage);
	return message.channel.send({ embed });
    }
	
	//MemeDog Command Alias: MDog
	if (urgs[0]=="mdog") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("MDog", MDogDesc)
		.addField("Aliases:", "MDog\n"+"MemeDog\n"+"MemeDoggo")
		.addField("Usage:", MDogUsage);
	return message.channel.send({ embed });
    }
	
	//OrangeText Command
	if (urgs[0]=="orangetext") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("OrangeText", OrangeTextDesc)
		.addField("Aliases:", "OrangeText\n" + "Orange")
		.addField("Usage:", OrangeTextUsage);
	return message.channel.send({ embed });
    }	
	
	//OrangeText Command Alias: Orange
	if (urgs[0]=="orange") {
	message.delete();
    const embed = new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Orange", OrangeTextDesc)
		.addField("Aliases:", "Orange\n" + "OrangeText")
		.addField("Usage:", OrangeUsage);	
	return message.channel.send({ embed });
    }
	
}

module.exports = new Command('help', exec, {
    aliases: ['help'],
    category: 'info'
});

