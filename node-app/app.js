const express = require('express')
const app = express()
const { Pool } = require('pg');

const config = {
    host: 'localhost',
    user: 'postgres',
    password: '1987',
    database: 'basename',
    port: 5432
}

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/listarAlbum', async function (req, res) {
    const db = new Pool(config);
    let text = `SELECT * FROM album`;
    const respuesta = await db.query(text)
       .then(response => {
       return response.rows;
       })
       .catch(e => console.error(e.stack))
    res.send(respuesta);
})

app.get('/listarartistas', async function (req, res) {
    const db = new Pool(config);
    let text = `SELECT * FROM "Artista"`;
    const respuesta = await db.query(text)
       .then(response => {
       return response.rows;
       })
       .catch(e => console.error(e.stack))
    res.send(respuesta);
})
app.get('/listarartista_cancion', async function (req, res) {
    const db = new Pool(config);
    let text = `select * from "Artista" left join "Artista_Cancion" on "Artista".id = "Artista_Cancion".artista_id left join "Cancion" on "Artista_Cancion".cancion_id = "Cancion".id left join "Album_Cancion" on "Cancion".id = "Album_Cancion".cancion_id left join album on "Album_Cancion".album_id = album.id;`;
    const respuesta = await db.query(text)
       .then(response => {
       return response.rows;
       })
       .catch(e => console.error(e.stack))
    res.send(respuesta);
})
app.get('/listardetalles', async function (req, res) {
    const db = new Pool(config);
    let text = `select * from "Artista" full join "Artista_Cancion" on "Artista".id = "Artista_Cancion".artista_id full join "Cancion" on "Artista_Cancion".cancion_id = "Cancion".id full join "Album_Cancion" on "Cancion".id = "Album_Cancion".cancion_id full join album on "Album_Cancion".album_id = album.id;
    `;
    const respuesta = await db.query(text)
       .then(response => {
       return response.rows;
       })
       .catch(e => console.error(e.stack))
    res.send(respuesta);
})
app.get('/listargenero', async function (req, res) {
    const db = new Pool(config);
    let text = `SELECT * FROM "Genero"`;
    const respuesta = await db.query(text)
       .then(response => {
       return response.rows;
       })
       .catch(e => console.error(e.stack))
    res.send(respuesta);
})

app.listen(8080)