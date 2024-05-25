const { SlashCommandBuilder } = require('discord.js')
const { execute } = require('../../events/client/ready')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Gibt Ping'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `API Latency: ${client.ws.ping}ms\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}ms`
        await interaction.editReply({
            content: newMessage
        })
    }
}