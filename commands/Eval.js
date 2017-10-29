const Logger = require('../functions/logger');
const evalthingy = text => {
	if (typeof(text) === "string")
		return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
	else
		return text;
}

module.exports = {
	commands: [
		'eval'
	],
	usage: 'eval <code>',
	description: 'Evaluate javascript code.',
	category: 'Utility',
	execute: async (bot, msg, args) => {
		try {
			const Input = await args.join(" ");
			let evaluation = eval(Input);

			if (typeof evaluation !== "string")
				evaluation = await require("util").inspect(evaluation);

				msg.edit("Input\n```js\n"+Input+"\n```\n"+"Output\n```js\n"+evalthingy(evaluation)+"\n```", await {Input:"xl"});
		} catch (err) {
			msg.edit('Error:\n```js\n'+`${evalthingy(err)}`+'\n```');
			return Logger.warn(err)
		}
	}
};

