const {Client, Events} = require('discord.js');
require('dotenv').config();
const fs = require('fs');

const client = new Client({
    intents: [53608447]
});

client.on(Events.ClientReady, async () => {
    console.log(`Conectado como ${client.user.username}!`)
})
/*
Client.on('ready', async (client) => {
    console.log(`${client.user.tag} Online 🤖!`);
    client.user.setActivity('Developed by JhonmaSG.', { type: 1 });
});
*/
// Respuesta a mensajes
client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return; // Si el autor del mensaje es un bot nos retiramos
    if (!message.content.startsWith('!')) return;

    const args = message.content.slice(1).split(' ')[0] //El contenido cuenta a partir del siguiente caracter

    try {
        const command = require(`./commands/${args}`);
        command.run(message);
    } catch (error) {
        console.log(`${message.content} no es un comando valido.`);
    }
});

function requirehandlers(){
    ["command","events","distube"].forEach(handler => {
        try{
            
        } catch(error){

        }
    })
}

client.login(process.env.TOKEN_DC);