const { Command } = require('discord-akairo');
const Promise = require('bluebird');

async function exec(message) {
	const frames = [
    "(\\\\°□°)\\\\  ┬─┬",
    "(-°□°)-  ┬─┬",
    "(╯°□°)╯    ]",
    "(╯°□°)╯  ︵  ┻━┻",
    "(╯°□°)╯       [",
    "(╯°□°)╯           ┬─┬"
	];

	for (let frame of frames) {
		await message.edit(frame);
		await Promise.delay(400);
	}
}

module.exports = new Command('fliptable', exec, {
    aliases: ['fliptable'],
    args: [
		{
            id: 'content',
            match: 'content'
        }
	],
    category: 'fun'
});
