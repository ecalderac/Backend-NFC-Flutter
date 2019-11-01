'user strict'

var express = require('express');//cargando module de express
var ListaController = require('../controllers/lista'); 

var api = express.Router(); //cargando el routes de express

//Rutas de Lista
api.post('/lista', ListaController.saveLista);
//api.get('/lista/:id', ListaController.getLista);
api.get('/listas/:page?', ListaController.getListas);
api.put('/lista/:id', ListaController.modifyLista);
api.delete('/lista/:id', ListaController.deleteLista);




module.exports = api; 