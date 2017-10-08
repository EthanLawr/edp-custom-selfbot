const { Command } = require('discord-akairo');
const got = require('got');
const snekfetch = require('snekfetch');

const getCat = () => {
  return new Promise( (resolve,rej)=>{
    got('http://www.random.cat/meow').then(res => {
      try{
        const f = JSON.parse(res.body).file;
        (f!=null)?resolve(f):rej('File not found');
      }catch(err){
        rej(err);
      }
    }).catch(rej);
  });
};

async function exec(message, channel) {
	message.delete();
	await message.channel.send('',{files: [{attachment: (await snekfetch.get(await getCat())).body}]});
	await message.channel.send('',{files: [{attachment: (await snekfetch.get(await getCat())).body}]});
	await message.channel.send('',{files: [{attachment: (await snekfetch.get(await getCat())).body}]});
	await message.channel.send('',{files: [{attachment: (await snekfetch.get(await getCat())).body}]});
	await message.channel.send('',{files: [{attachment: (await snekfetch.get(await getCat())).body}]});
};

module.exports = new Command('catbomb', exec, {
    aliases: ['catbomb', 'kittybomb'],
    category: 'fun'
});

