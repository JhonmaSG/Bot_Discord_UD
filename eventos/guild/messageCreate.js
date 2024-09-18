//Cada vez que se envie un mensaje, Creemos la BD y cargar el comando
const config = require(`${process.cwd()}/config/config.json`);
const Discord = require('discord.js');
const serverSchema = require(`${process.cwd()}/modelos/servidor.js`)
const { asegurar_todo } = require(`${process.cwd()}/utils/funciones.js`)


module.exports = async (client, message) => {
    if (!message.guild || !message.channel || message.author.bot) return;
    await asegurar_todo(message.guild.id, message.author.id);
    let data = await serverSchema.findOne({guildID: message.guild.id});

    //si el bot es mencionado, devolvemos un mensaje de respuesta indicando el prefijo establecido en el servidor
    if(message.content.includes(client.user.id)) return message.reply({
        embeds: [
            new Discord.EmbedBuilder()
            .setTitle(`✅ **Para ver los comandos usa \`${data.prefijo}help\`!**`)
            .setColor(client.color)
        ]
    })

    if (!message.content.startsWith(data.prefijo)) return;
    const args = message.content.slice(data.prefijo.length).trim().split(" ");
    const cmd = args.shift()?.toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(c => c.aliases && c.aliases.includes(cmd));
    if(command) {
        // ejecutar el comando
        command.run(client, message, args, data.prefijo)
    } else {
        return message.reply("❌ No he encontrado el comando que me has especificado!")
    }

}