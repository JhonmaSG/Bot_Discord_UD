const fs = require('fs'); //Leer Contenido de archivos y carpetas
const allevents = [];
module.exports = async (client) => {
    try {
        try {
            console.log("Cargando los eventos...".yellow)
        } catch {}
        let cantidad = 0;
        const cargar_dir = (dir) => {
            const archivos_eventos = fs.readdirSync(`./eventos/${dir}`).filter((file) => file.endsWith('.js'));
            for(const archivo of archivos_eventos){
                try {
                    const evento = require(`../eventos/${dir}/${archivo}`);
                    //toma el contenido del enveto sin el .js (split)
                    const nombre_evento = archivo.split(".")[0];
                    allevents.push(nombre_evento);
                    client.on(nombre_evento, evento.bind(null, client));
                    cantidad++
                } catch (error) {
                    console.log(error);
                }
            }
        }
        await ["client", "guild"].forEach(e => cargar_dir(e));
        console.log(`${cantidad} Eventos Cargados`.brightGreen);
        //Inicio de sesión del Bot
        try {console.log(`Iniciando Sesión del Bot...`.yellow)} catch (e) {console.log(e)}
    } catch (error) {
        console.log(error)
    }
}