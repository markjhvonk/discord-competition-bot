const Discord = require('discord.js');
const Token = require('./token.json');
const client = new Discord.Client();

console.log(Token.token);

client.on('message', message => {
    if (message.content === 'cb!') {
        message.reply('pong');
    }
    if (message.content === 'cb!entry') {
        message.reply('Thank you for your entry!');
    }
});

client.login(Token.token);
