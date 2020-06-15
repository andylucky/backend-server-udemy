//Required --> importacion de librerias

var express = require('express');
var mongoose = require('mongoose');



// inicializar variables
//estoy definiendo mi servidor express
var app = express();


//Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/holspitalDB', (err, res) => {
    if (err) throw err;

    console.log('base de datos: \x1b[32m%s\x1b[0m', 'online');

});


//rutas
app.get('/', (req, res, next) => {

    res.status(200).json({

        ok: true,
        mensaje: "peticion realizada correctamente"
    });
});



// Escuchar peticiones(puerto)
app.listen(3000, () => {

    console.log('express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');

});