const { Command } = require('discord-akairo');
const Logger = require('../../../util/Logger');

function exec(message, args) {
    if (!args.command) {
        Logger.warn('Unknown command was selected. Please choose a    valid command or restart this Self Bot.');
        return message.edit("Please pick an existing command to reload");
    }

    args.command.reload();
    Logger.debug(`The command ${args.command.id} was reloaded.`);
    return message.edit(`The following command was reloaded`+"`"+`${args.command.id}`+"`");
}

module.exports = new Command('reload', exec, {
    aliases: ['reload'],
    args: [
        {
            id: 'command',
            type: 'commandAlias'
        }
    ],
    category: 'util'
});