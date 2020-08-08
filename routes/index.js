const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const ControladorTexto = require('../controllers/ControladorTexto');
const PenyistaControlador = require('../controllers/penyistaController');
const Penyista = require('../models/Penyista');


let c = 0;


module.exports = function () {
    
    router.get('/', (req, res, next) => {
        console.log(req.url);
        res.render('../views/index.ejs');
    });
    
    router.get('/videos', (req,res,next) => {
        res.render('../views/videos.ejs');
    });

    router.get('/nosotros', (req,res,next) => {
        res.render('../views/nosotros.ejs');
    });

    router.get('/contacto', async (req,res,next) => { 
        res.render('../views/contacto.ejs');
    });

    router.get('/listado', async (req,res,next) => {
        const penyistas = await Penyista.find({}); // preparado para traer todos los registros de la base de datos con el modelo
        console.log(penyistas);
        res.render('../views/listado.ejs', {
            penyistas // esta variable se puede usar en la pagina para mostrar datos del bd
        });
    });

    router.get('/registrado', (req,res,next) => {
        res.render('../views/registrado.ejs');
    });

    router.get('/borrado', (req,res,next) => {
        res.render('../views/borrado.ejs');
    });

    router.get('/error', (req,res,next) => {
        res.render('../views/error.ejs');
    });
   

    // agregamos un nuevo peñista con los datos del formulario a la base de datos
    router.post('/contacto', PenyistaControlador.nuevoPenyista);
    
    router.post('/contacto_datos', ControladorTexto.TextoControlado);

    router.get('/api', (req, res, next) => {
        res.json({
            miPrimeraApi: "Funciona!!!"
        });
    });

    
    
    router.get('*', (req,res, next) => {
        res.end('Ruta no configurada en la aplicacion');
    });
    
    return router
}