// Commando say, Repite los argumentos dados

module.exports = {
    description: 'Repite los argumentos dados',
    run: async (message) => {
        const args = message.content.split(' ').slice(1).join(' ');

        if(args.length < 1) return message.reply('Provee un argumento válido.');

        await message.channel.send(args);

        await message.delete();
    }

}