const { SlashCommandBuilder } = require('discord.js')
const { execute } = require('../../events/client/ready')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('movemich')
        .setDescription('Nervt leon'),
    async execute(interaction, client) {
        client.users.send('1058371864797380718',`Hi, <@1058371864797380718>! <@${interaction.user.id}>, will das du ihn in den Kanal packst!`)
        interaction.reply('Wurde gemacht!')
    }
}