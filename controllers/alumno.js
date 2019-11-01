'use strict'

var path = require('path');
var fs = require('fs');
var mongoosePaginate = require('mongoose-pagination');
var Clase = require('../models/clase');
var Lista= require('../models/lista');
var Alumno = require('../models/alumno'); 

//obtener un alumno
function getAlumno(req, res){
    var alumnoId = req.params.id;

    Alumno.findById(alumnoId).populate({path: 'lista'}).exec((err, alumno) => {
        if(err){
            res.status(500).send({message: 'Error en la peticion'});
        }else{
            if(!alumno){
                res.status(404).send({message: 'El alumno no existe'});
            }else{
                res.status(200).send({alumno});
            }
        }
    });

}

//obtener todos los alumnos
function getAlumnos(req, res){
    var listaId = req.params.lista;

    if(!listaId){
        var find = Alumno.find({}).sort('rut');
    }else{
        var find = Alumno.find({lista: listaId}).sort('rut');
    }

    find.populate({
        path: 'lista',
        populate: {
            path: 'clase',
            model: 'Clase'
        }
    }).exec(function(err, alumnos){
        if(err){
            res.status(500).send({message: 'Error en la petición'});
        }else{
            if(!alumnos){
                res.status(404).send({message:'No hay alumnos'});
            }else{
                res.status(200).send({alumnos});
            }
        }
    });
}

//guardar un alumno
function saveAlumno(req, res){
    var alumno = new Alumno();

    var params = req.body;
    alumno.nombre = params.nombre;
    alumno.apellido = params.apellido;
    alumno.rut = params.rut;
    alumno.email = params.email;
    alumno.telefono = params.telefono;
    alumno.carrera = params.carrera;
    alumno.image = 'null'; 
    alumno.lista = params.lista;

    alumno.save((err, alumnoStored) => {
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }
        else{
            if(!alumnoStored){
                res.status(404).send({message: 'No se ha guardado el alumno'});
            }else{
                res.status(200).send({alumno: alumnoStored});
            }
        }
    });

}

//actualizar un alumno
function updateAlumno(req, res){ 
    var alumnoId = req.params.id;
    var update = req.body;

    Alumno.findByIdAndUpdate(alumnoId, update, (err, alumnoUpdated) => {
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }
        else{
            if(!alumnoUpdated){
                res.status(404).send({message: 'No se ha actualizado el alumno'});
            }else{
                res.status(200).send({alumno: alumnoUpdated});
            }
        }
    });
}

//eliminar un alumno
function deleteAlumno(req, res){
    var alumnoId = req.params.id;
    Alumno.findByIdAndRemove(alumnoId, (err, alumnoRemoved) => {
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }
        else{
            if(!alumnoRemoved){
                res.status(404).send({message: 'No se ha borrado el alumno'});
            }else{
                res.status(200).send({alumno: alumnoRemoved});
            }
        }
    });
}

module.exports = {
    getAlumno,
    getAlumnos,
    saveAlumno,
    updateAlumno,
    deleteAlumno
};