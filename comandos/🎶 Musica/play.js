const { TextChannel } = require("discord.js");

module.exports = {
    name:"play",
    aliases: ["reproducir"],
    description: "Sirve para reproducir una cación",
    run: async (client, message, args, prefix) => {
        //Comprobaciones previas
        if(!args.lenth) return message.reply(`❌ Tienes que especificar el nombre de una canción!`);
        if(!message.member.voice?.channel) return message.reply(`❌ Tienes que estar en un cala del voz para ejecutar este comando!`);
        if(!message.guild.me.voice?.channel && message.member.voice?.channel.id != message.guild.me.voice?.channel.id) return message.reply(`❌ Tienes que estar en el mismo canal QUE YO para ejecutar este comando!`);
        client.distube.play(message.member.voice?.channel, args.join(" "), {
            momber: message.member,
            TextChannel: message.channel,
            message
        });
        message.reply(`🔍 **Buscando** \`${args.join(" ")}\`...`);
    }
}