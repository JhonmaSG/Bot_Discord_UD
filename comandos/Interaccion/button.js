// Commando avatar, Repite los argumentos dados
const {ButtonBuilder, ActionRowBuilder} = require('discord.js')

const usernameButton = new ButtonBuilder()
    .setCustomId('username')
    .setEmoji('🎫')
    .setLabel('Mostrar nombre de usuario')
    .setStyle(1);

const avatarButton = new ButtonBuilder()
    .setCustomId('avatar')
    .setEmoji('😀')
    .setLabel('Mostrar avatar de usuario')
    .setStyle(2);

module.exports = {
    description: 'Envia dos botones, uno envia el nombre del usuario y el otro la imagen.',
    run: async (message) => {
        //Fila de componentes para agregar 2 botones a la respuesta
        const actionRow = new ActionRowBuilder().addComponents(usernameButton,avatarButton);
        // Guardar la respuesta en reply
        const reply = await message.reply({
            components: [actionRow],
        });
        // Recolecta las interacciones del canal
        const filter = (interaction) => interaction.user.id === message.author.id && interaction.message.id === reply.id;
        const collector = message.channel.createMessageComponentCollector({
            //actividad del filtro (1 minute)
            filter, time: 60 * 1000
        });

        // Cuando el collector esta activo
        collector.on('collect', async (interaction) => {
            if(interaction.customId === "username") {
                // Respuesta
                interaction.update({
                    content: `Tu nombre es **${message.author.displayName}**`,
                    components: []
                });
            }else if(interaction.customId === "avatar") {
                //obtener avatar generando URL
                const avatar = message.author.displayAvatarURL({ size: 512});

                // Respuesta
                interaction.update({
                    content: `Tu imagen de perfil es:`,
                    files: [avatar],
                    components: []
                });
            }
        });

        // Cuando termine el collector al minuto, minizar buttons
        collector.on('end', async () => {
            // Se guarda la respuesta y se editan los componentes
            reply.edit({components: []}).catch(console.error);
        });
    }

}