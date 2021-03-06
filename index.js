'use strict'

var mongoose = require('mongoose');   //cargando modulo de MONGODB
var app = require('./app');
var port = process.env.PORT || 3977; //puerto del servidor web

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/BD_NFC_FLUTTER', (err, res) => {
    if(err)
    {
        throw err;
    }
    else
    {
        console.log("Base de Datos corriendo correctamente");
        app.listen(port, function(){
            console.log("Servidor del API REST de NFC+FLUTTER escuchando en hhtp://localhost:"+port);
        });
    }
}); //conectando a la base de datos de mongodb