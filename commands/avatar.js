// Commando avatar, Repite los argumentos dados
const {EmbedBuilder} = require('discord.js')
module.exports = {
    description: 'Hace display de la imagen del usuario.',
    run: async (message) => {
        //Obtener la mención del content del mensaje
        const target = message.mentions.users.first() || message.author;
        const member = await message.guild.members.fetch(target.id);

        //si el member no se encuentra, para la ejecucion
        if(!member) return message,reply("Introduce un usuario Válido")
        
        //Avatar URL
        const avatar = member.user.displayAvatarURL({size: 512})
        //Respuesta de tipo embed
        const embed = new EmbedBuilder()
            .setColor('Blurple')
            .setTitle(`👑 Avatar de <@${member.user.displayName}>`)
            .setImage(avatar)

        message.reply({embeds: [embed]})
    }

}