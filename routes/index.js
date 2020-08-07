const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const ControladorTexto = require('../controllers/ControladorTexto');
const PenyistaControlador = require('../controllers/penyistaController');


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

   

    router.get('/contacto', (req,res,next) => {
        res.render('../views/contacto.ejs');
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