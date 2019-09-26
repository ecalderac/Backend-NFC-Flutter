'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;//permite definir el esquema de la base de datos

var AlumnoSchema = Schema({
        nombre: String,
        apellido: String,
        rut: String,
        email: String,
        telefono: String,
        carrera: String,
        image: String,
        lista: {type: Schema.ObjectId, ref: 'Lista'}
}); //creando el esquema

module.exports = mongoose.model('Alumno', AlumnoSchema); //se tiene de referencia user y todo lo q contiene es lo q se va agregando ahi cuando se llama a user