const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');
const Logger = require('../../util/Logger');
const snekfetch = require('snekfetch');

class CoinCommand extends Command {
    constructor() {
        super('coin', {
            aliases: ['coin', 'coins'],
            category: 'util',
            args: [
                {
                    id: 'coin',
                    default: 'ETH'
                },
                {
                    id: 'amount',
                    type: 'number',
                    default: 1
                }
            ]
        });
    }

    async exec(message, args) {
        message.edit('Looking up...');
        const r = await snekfetch.get(`https://min-api.cryptocompare.com/data/price?fsym=${args.coin}&tsyms=USD,CAD,BTC`);
        if (r.body.Aggregated === false) {
            await message.edit(`No coins found with ${args.coin}.`);
            message.delete({ timeout: 2000 });
            return;
        }
        const embed = new MessageEmbed()
        .setTitle(`Looking up prices for ${args.amount} ${args.coin}.`)
        .setDescription(`USD: ${r.body.USD * args.amount}$\nCAD: ${r.body.CAD * args.amount}$\nBTC: ${(r.body.BTC * args.amount).toFixed(6)}BTC`);
        message.edit({ embed });
    }
}

module.exports = CoinCommand;
