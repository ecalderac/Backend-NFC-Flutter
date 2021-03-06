'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var ListaSchema = Schema({
        nro_lista: Number,
        fecha: String,
        hora: String,
        clase: {type: Schema.ObjectId, ref: 'Clase'}
}); 

module.exports = mongoose.model('Lista', ListaSchema); 