const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('img')
        .setDescription('Displays user profile picture.')
        .addUserOption(option => option.setName('user').setDescription('User to display profile picture.')),
    async execute(interaction) {
        const user = getUser(interaction);
        if (!user) {
            return await interaction.reply('User not found!');
        }
        const avatarURL = user.displayAvatarURL({ format: 'png', dynamic: true });
        await interaction.reply({ files: [avatarURL] });
    }
};

function getUser(interaction) {
    const userOption = interaction.options.get('user');
    if (!userOption) {
        return interaction.user;
    }
    return userOption.user;
}
