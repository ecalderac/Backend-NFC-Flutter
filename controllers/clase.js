'use strict'

function pruebas (req, res){
    res.status(200).send({
        message: 'Probando un accion del controlador de usuarios del api rest con Node y MongoDB'
    });
}

module.exports = {
    pruebas
};