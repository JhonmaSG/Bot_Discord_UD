// Archivo.index.js
const Discord = require('dotenv').config();
const {Client, Events} = require("discord.js");

//Crear nuevo cliente de Discord
const client = new Client({
    intents: 53608447
});

// Pimer Evento
client.on(Events.ClientReady, async () => {
    console.log(`Contectado como ${client.user.username}!`)
});

// Respuestas a mesajes
client.on(Events.MessageCreate, async (message) => {
    if(message.author.bot) return; //Si el autor del mensaje es un bot, ns retiramos
    if(!message.content.startsWith('-')) return; //Si el contenido del mensaje No comienza por - return
    
    const args = message.content.slice(1).split(' ')[0] //Filtra el primer caracter (-) del contenido

    // Texto Command handler (Save informacion del command) en un archvo
    try{
        const command = require(`./commands/${args}`);
        command.run(message)
    } catch (error){
        // Traffic
        console.log(`Ha ocurrido un error al utilizar el commando -${args}`, error.message)
    }
})

// Conexion cliente
client.login(process.env.TOKEN_DC);