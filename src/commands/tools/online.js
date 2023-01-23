const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder() 
    .setName('online')
    .setDescription('return online count API'),

    async execute(message) {
        try {   
            const response = await axios.get('(your api url here)', { timeout: 5000 });
            const data = response.data;
            const dataString = JSON.stringify(data);
            const number = dataString.match(/\d+/);  
            const customString = 'users currently online';
            const finalString = `There are ${number} ${customString}`;
            await message.channel.send(finalString);
        } catch (error) {
            console.error(error);
            await message.channel.send('An error occurred while fetching the data.');
        }
    }
}
