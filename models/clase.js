'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; //define el esquema de la base de datos

var ClaseSchema = Schema({
        nombre: String //nombre de la clase -->ejm:Ing. Software Avanzada
}); //creando el esquema

module.exports = mongoose.model('Clase', ClaseSchema); 