const mongoose = require('mongoose');
const config = require('../../config/config.json');
module.exports = client => {
    //Nos conectams a la DB
    mongoose.connect(
        config.mongodb).then(() => {
        console.log(`⛅ Conectado a la Base de Datos de MONGODB`.blue);
    }).catch((err) => {
        console.log(`⛅ ERROR AL CONECTAR A LA BASE DE DATOS DE MONGODB`.red);
        console.log(err);
    })

    console.log(`Conectado como ${client.user.tag}`.green);
}