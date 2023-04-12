const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder() 
        .setName('online')
        .setDescription('Return online count from website API'),

        async execute(interaction) {
            try {   
              const response = await axios.get('https://{website}.nl/api/online-count');
              const data = response.data;
              const dataString = JSON.stringify(data);
              // extract the number using a regular expression
              const number = dataString.match(/\d+/);  
              const customString = 'users currently online';
              const finalString = `There are ${number} ${customString}`;
          
              // Defer reply before sending message
              await interaction.deferReply();
          
              await interaction.followUp(finalString);
            } catch (error) {
              console.error(error);
              await interaction.followUp('An error occurred while fetching the data.');
            }
          }
          
}
