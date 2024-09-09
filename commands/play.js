const { TextChannel } = require("discord.js");

module.exports = {
    name:"play",
    aliases: ["reproducir"],
    description: "Sirve para reproducir una canción",
    run: async (client, message, args, prefix) => {
        //Comprobaciones previas
        if(!args.length) return message.reply(`❌ **Especifica el nombre de una canción!**`);
        if(!message.member.voice?.channel) return message.reply(`❌ **Debes estar en un canal de voz para ejecutar este comando!**`)
        if(!message.guild.me.voice?.channel && message.member.voice?.channel.id != message.guild.me.voice?.channel.id) return message.reply(`❌ **Tienes que estar en el mismo canal de voz _QUE YO_ para ejecutar este comando!**`);
        client.distube.play(message.nomber.voice?.channel, args.join(" "), {
            member: message.member,
            textChannel: message.channel,
            message
        });
        message.reply(`🔍 **Buscando \`${args.join(" ")}\`...**`);
    }
}