'user strict'

var express = require('express');//cargando module de express
var ClaseController = require('../controllers/clase'); //cargando el fichero q esta en user controllers

var api = express.Router(); //cargando el routes de express
//var md_auth = require('../middlewares/authenticated');//cargando middleware

var multipart = require('connect-multiparty'); //trabaja con la subida de ficheros
var md_upload = multipart({ uploadDir: './uploads/users' });

//Rutas de Clase
api.get('/probando-controlador', ClaseController.pruebas);
api.post('/clase', ClaseController.saveClase);
api.get('/clase/:id', ClaseController.getClase);
api.get('/clases/:page?', ClaseController.getClases);
api.put('/clase/:id', ClaseController.modifyClase);
api.delete('/clase/:id', ClaseController.deleteClase);



module.exports = api; 