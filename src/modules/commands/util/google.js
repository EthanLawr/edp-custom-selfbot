const { Command } = require('discord-akairo');
const util = require('util');
const request = require('request');
const cheerio = require('cheerio');
const Discord = require ('discord.js');

function getText(children) {
    if (children.children) return getText(children.children);
    return children.map(c => {
        return c.children ? getText(c.children) : c.data;
    }).join('');
}


function exec(message) {
    
	const args = message.content.split(/\s+/).slice(1);
    message.delete();
        if (!args[0])  {	
        return message.channel.sendMessage('You must enter something to search for!');
    }

    message.channel.sendMessage('Searching...').then(m => {
        request.get('http://google.com/search?client=chrome&rls=en&ie=UTF-8&oe=UTF-8&q=' + args.join('+'), (err, res, body) => {
            if (!err && res.statusCode === 200) {
                let $ = cheerio.load(body);
                let results = [];
                $('.g').each((i) => {
                    results[i] = {};
                });
                $('.g>.r>a').each((i, e) => {
                    let raw = e.attribs['href'];
                    results[i]['link'] = raw.substr(7, raw.indexOf('&sa=U') - 7);
                });
                $('.g>.s>.st').each((i, e) => {
                    results[i]['description'] = getText(e);
                });

                results = results.filter(r => r.link && r.description);
                results = results.splice(0, 5);

                m.channel.sendEmbed(new Discord.RichEmbed()
				.setColor('#2200FF')
				.setTitle(``)
				.setDescription(``)
				.addField(`Search results for \`${args.join(' ')}\``, results.map(r => r.link + '\n\t' + r.description + '\n').join('\n')));
			} else {
                m.edit(`Error! (${res.statusCode}): ${res.statusMessage}`);
            }
        });
    });
};

module.exports = new Command('google', exec, {
    aliases: ['google'],
    category: 'util'
});
