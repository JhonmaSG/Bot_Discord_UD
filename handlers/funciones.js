//Funcion para segurar la BD en Mongo
module.exports = {
    asegurar
}

async function asegurar(schema, id, id2, objeto) {    
    let data = await schema.findOne({ guildID: id2 });
    if (!data) {
        console.log("NO HAY BASE DE DATOS CREADA, CREANDO UNA...");
        data = await new schema(objeto);
        await data.save();
    }
    return data;
}