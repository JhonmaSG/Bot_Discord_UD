//Cada vez que se envie un mensaje, Creemos la BD y cargar el comando
const config = require(`${process.cwd()}/config/config.json`);
const serverSchema = require(`${process.cwd()}/modelos/servidor.js`);
const {asegurar} = require(`${process.cwd()}/handlers/funciones.js`);
module.exports = async (client, message) => {
    //si no hay servidor de mensaje, autor o es un bot, ignorar
    if(!message.guild || !message.channel || message.author.bot) return;
    let data = await asegurar(serverSchema, "guildID", message.guild.id, {
        guildID: message.guild.id,
        prefijo: config.prefix
    });
    //Si el contenido no empieza con el prefijo, retornar
    if(!message.content.startsWith(data.prefijo)) return
    const args = message.content.slice(data.prefijo.length).trim().split(" ");
    const cmd = args.shift()?.toLowerCase();
    // intentar encontrar un comando del archivo javascript o un alias, ejecutar
    const command = client.commands.get(cmd) || client.commands.find(c => c.aliases && c.aliases.include(cmd));
    if(command) {
    // ejecutar el comando
    command.run(client, message, args, data.prefijo)
    } else {
        return message.reply("❌ No he encontrado el comando que me has especificado!")
    }
}