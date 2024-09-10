module.exports = {
    name:"ping",
    aliases: ["latencia","ms"],
    description: "Sirve para ver la latencia del Bot",
    run: async (client, message, args, prefix) => {
        message.reply(`🏓 **El pin del Bot es de \`${client.ws.ping}ms\`   **`);
    }
}