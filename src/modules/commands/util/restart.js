const { Command } = require('discord-akairo');
const Logger = require('../../../util/Logger');

const chalk = require('chalk');

function exec(msg){
  Logger.info('Custom Selfbot Shutting Down!');
  msg.edit('Custom Selfbot Restarting!').then(() => {
        process.exit(42);
  });
}

module.exports = new Command('restart', exec, {
    aliases: ['restart'],
    category: 'util'
});
