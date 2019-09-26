'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; //define el esquema de la base de datos

var ListaSchema = Schema({
        nro_lista: Number,
        fecha: String,
        hora: String,
        clase: {type: Schema.ObjectId, ref: 'Clase'}
}); //creando el esquema

module.exports = mongoose.model('Lista', ListaSchema); 