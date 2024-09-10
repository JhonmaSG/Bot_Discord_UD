const schema = require(`${process.cwd()}/modelos/servidor.js`)
module.exports = {
    name:"prefix",
    aliases: ["prefijo","cambiarprefijo","cambiarprefix"],
    description: "Sirve para cambiar el Prefijo del Bot en el servidor",
    run: async (client, message, args, prefix) => {
        message.reply(`🏓 **El pin del Bot es de \`${client.ws.ping}ms\` **`);
        if(!args[0]) return message.reply(`❌ Tienes que especificar el prefijo nuevo para el Bot!`)
        //Actualizar los ajustes de la BD en el ID servidor 
        await schema.findOneAndUpdate({guildID: message.guild.id}, {
            prefijo: asgs[0]
        })
        return message.reply(`Cambiado el Prefijo de \`${prefix}\` a \`${args[0]}`)
    }
}