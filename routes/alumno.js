'user strict'

var express = require('express');//cargando module de express
var AlumnoController = require('../controllers/alumno'); 

var api = express.Router(); //cargando el routes de express

//Rutas de Lista
api.post('/alumno', AlumnoController.saveAlumno);
api.get('/alumno/:id', AlumnoController.getAlumno);
api.get('/alumnos/:page?', AlumnoController.getAlumnos);
api.put('/alumno/:id', AlumnoController.updateAlumno);
api.delete('/alumno/:id', AlumnoController.deleteAlumno);




module.exports = api; 