const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('gif')
    .setDescription('Return a random gif from Giphy'),

    async execute(interaction) {
        try {
            // Replace ! with your actual Giphy API key
            const apiKey = '!';
            const response = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
            const gifUrl = response.data.data.images.original.url;

            //send reply
            await interaction.reply({
                content: gifUrl
            });
            //edit reply
            await interaction.editReply({
                content: gifUrl
            });
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: 'An error occurred while fetching the gif.'
            });
        }
    }
}
