const { Command } = require('discord-akairo');
const ROQUEST = require('request');
const ChoreAyO = require('cheerio');
const DIcKsWoRD = require ('discord.js');

function getText(children) {
    if (children.children) return getText(children.children);
    return children.map(c => {
        return c.children ? getText(c.children) : c.data;
    }).join('');
}

function exec(message) {
    
	const args = message.content.split(/\s+/).slice(1);
        if (!args[0])  {	
        return message.edit('You must enter something to search for!');
    }

    message.edit('Searching...').then(message.delete());
        ROQUEST.get('http://google.com/search?client=chrome&rls=en&ie=UTF-8&oe=UTF-8&q=' + args.join('+'), (err, res, body) => {
            if (!err && res.statusCode === 200) {
                let $$ = ChoreAyO.load(body);
                let RESOOTS = [];
                $$('.g').each((i) => {
                    RESOOTS[i] = {};
                });
                $$('.g>.r>a').each((i, e) => {
                    let raw = e.attribs['href'];
                    RESOOTS[i]['link'] = raw.substr(7, raw.indexOf('&sa=U') - 7);
                });
                $$('.g>.s>.st').each((i, e) => {
                    RESOOTS[i]['description'] = getText(e);
                });

                RESOOTS = RESOOTS.filter(r => r.link && r.description);
                RESOOTS = RESOOTS.splice(0, 3);
				
				if(RESOOTS=="") {
				return message.channel.send("Oh no! You input an invalid search request!");
				} else {
                let embed = new DIcKsWoRD.RichEmbed()
				.setColor('#2200FF')
				.setTitle(``)
				.setDescription(``)
				.addField(`Search results for \`${args.join(' ')}\``, RESOOTS.map(r => r.link + '\n\t' + r.description + '\n').join('\n'));
				message.channel.send({ embed });
			}} else {
                message.edit(`Error! (${res.statusCode}): ${res.statusMessage}`);
            }
        });
};

module.exports = new Command('google', exec, {
    aliases: ['google'],
    category: 'util'
});
