const EdpClient = require('./src/struct/EdpClient');
const Logger = require('./src/util/Logger');

const config = require('./src/data/config.json');
const client = new EdpClient(config);

client.start().then(() => {
    Logger.info('EDP\'s Custom Selfbot is now ready!');
});
