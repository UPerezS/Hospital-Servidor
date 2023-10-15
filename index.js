const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');

// console.log( process.env );

//Crear el servidor de express

const app = express();

//Base de datos 
dbConnection();

//Directorio public
app.use( express.static('public'));

// Lectura y parseo del body
app.use(express.json( ));  //Midelware

app.use(cors());
//Rutas
// Midelware
// Ruta de autenticación del auth
app.use('/api/auth', require('./routes/auth'));
app.use('/api/medicina', require('./routes/medicina'));
//Escuchar peticiones

app.listen(4000, () => {
    console.log('Server Port 4000');
})


