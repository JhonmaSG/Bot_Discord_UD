const {distube} = require('distube');
const {SpotifyPlugin} = require('@distube/spotify');
const {SoundCloudPlugin} = require('@distube/soundcloud');
module.exports = (client) => {
    client.distube = new distube(client, {
        emitNewSongOnly: false, //permite todo tipo de songs
        leaveOnEmpty: true, //si la cola esta vacia, salir
        leaveOnfinish: true, //si no mas song por reproducir, salir
        leaveOnStop: true, //si el bot reproduce una cancion con error, salir
        savePreviusSong: true,
        emitAddSongWhenCreatingQueue: false, //Event new song
        searchSongs: 0, //elegir cancion por numeración 0: desactivado - 1: activado
        nsfw: false, //Permite reproducir songs +18
        emptyCooldown: 25, //time en seconds en irse de un canal
        ytdlOptions: {
            highWaterMark: 1024 * 1024 * 64,
            quality: "highestaudio",
            format: "audioonly",
            liveBuffer: 60000,
            dlChunkSize: 1024 * 1024 * 4,
        },
        youtubeDL: false,
        plugins: [
            new SpotifyPlugin({
                parallel: true,
                emitEventsAfterFetching: true,
            }),
            new SoundCloudPlugin()
        ]
    })
};