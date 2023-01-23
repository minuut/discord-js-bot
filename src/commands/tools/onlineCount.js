const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder() 
    .setName('onlineCount')
    .setDescription('return online count from API'),

    async execute(message, args, rest) {
        try {                             //   put your api url here
            const response = await axios.get('                      ');
            const data = response.data;
            const dataString = JSON.stringify(data);
            // extract the number using a regular expression
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
