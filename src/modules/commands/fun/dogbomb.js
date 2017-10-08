const { Command } = require('discord-akairo');
const snekfetch = require('snekfetch');
const got = require('got');

const getDog = () => {
  return new Promise( (resolve,rej)=>{
    got('https://random.dog/woof.json').then(res => {
      try{
        const f = JSON.parse(res.body).url;
        (f!=null)?resolve(f):rej('File not found');
      }catch(err){
        rej(err);
      }
    }).catch(rej);
  });
};

async function exec(message, args) {
	message.delete();
    await message.channel.send('',{files: [{attachment: (await snekfetch.get(await getDog())).body}]});
    await message.channel.send('',{files: [{attachment: (await snekfetch.get(await getDog())).body}]});
    await message.channel.send('',{files: [{attachment: (await snekfetch.get(await getDog())).body}]});
    await message.channel.send('',{files: [{attachment: (await snekfetch.get(await getDog())).body}]});
    await message.channel.send('',{files: [{attachment: (await snekfetch.get(await getDog())).body}]});
};

module.exports = new Command('dogbomb', exec, {
    aliases: ['dogbomb', 'dogebomb', 'puppybomb'],
    category: 'fun'
});