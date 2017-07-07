const { Command } = require('discord-akairo');

function exec(message, args) {
    return message.edit(`https://www.google.com/search?q=${args.content.split(' ').join('+')}`);
}

module.exports = new Command('google', exec, {
    aliases: ['gogle', 'googl', 'google'],
    args: [
        {
            id: 'content',
            match: 'content'
        }
    ],
    category: 'fun'
});
