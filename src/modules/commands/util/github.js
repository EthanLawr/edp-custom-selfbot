const { Command } = require('discord-akairo');
const got = require('got');
const util = require('util');
const Discord = require ('discord.js');

function exec(message) { 
	const args = message.content.split(/\s+/).slice(1);
    if (args.length < 1) {
        return message.edit('You must specify a repository to search!');
    }

    if (args[0].indexOf('/') !== -1) {

        let repository = safeRepo(args[0]);

        message.edit(`:arrows_counterclockwise:  Loading info for '${repository}'...`);

        got(`https://api.github.com/repos/${repository}`).then(res => {
            let json = JSON.parse(res.body);
            if (json.message === 'Not Found') {
                message.edit('That repository could not be found!');
            }

            message.channel.sendEmbed(new Discord.RichEmbed()
			.setTitle("Info")
			.setDescription(getInfo(item))
			.setColor('#2200FF'));
        });
		    message.delete();

    } else {

        message.edit(`:arrows_counterclockwise:  Searching for '${args.join(' ')}'...`);

        got(`https://api.github.com/search/repositories?q=${args.join('+')}`).then(res => {
            let json = JSON.parse(res.body);
            if (json.total_count < 1) {
                return message.edit(`:sob: No results found for '${args.join(' ')}'`)
            }


            message.channel.sendMessage('Here are the top 3 results:');

            for (let i = 0; i < 3; i++) {
                if (!json.items[i]) {
                    break;
                }
                let item = json.items[i];
                message.channel.sendEmbed(new Discord.RichEmbed()
				.setTitle("Info")
				.setDescription(getInfo(item))
	            .setColor('#2200FF'));
            }
        });

    }

};

function safeRepo(input) {
    if (input.indexOf('/') === -1) {
        return;
    }
    let Account = input.substr(0, input.indexOf('/'));
    input = input.substr(input.indexOf('/') + 1);
    let sudo = input.indexOf('/') === -1 ? input : input.substr(0, input.indexOf('/'));
    return `${Account}/${sudo}`;
}

function getInfo(json) {
    return `**${json.full_name}**
\t**Description:** _${json.description || 'None provided'}_
\t**Owner:** [${json.owner.login}](${json.owner.html_url})
\t**Primary Language:** \`${json.language}\` 
\t:house:  [Home page](${json.html_url})  :small_red_triangle_down:  [Downloads](${json.html_url}/releases)  :exclamation:  [Issues](${json.html_url}/issues)
\t:negative_squared_cross_mark:  \`${json.open_issues_count}\` open issues  :star:  \`${json.stargazers_count}\` stargazers  :eyes:  \`${json.subscribers_count || json.watchers_count}\` watchers
\tType \`git clone ${json.clone_url}\` to clone this repository
`;
}


module.exports = new Command('github', exec, {
    aliases: ['github', 'git'],
    category: 'util'
});
