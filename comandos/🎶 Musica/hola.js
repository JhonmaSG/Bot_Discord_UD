module.exports = {
    name:"hola",
    description: "Sirve para que el Bot salude",
    run: async (client, message, args, prefix) => {
        message.reply(`Hola! ${message.author.username}`);
    }
}