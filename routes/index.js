const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const ControladorTexto = require('../controllers/ControladorTexto');
const PenyistaControlador = require('../controllers/penyistaController');
const Penyista = require('../models/Penyista');
request = require('request');



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

    // agregamos un nuevo peñista con los datos del formulario a la base de datos, solo en caso de que el mail no coincida
    router.post('/contacto', PenyistaControlador.nuevoPenyista, function(req,res){

        if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null)
        {
          return res.json({"responseError" : "something goes to wrong"});
        }
        const secretKey = "6LcE578ZAAAAAD74sUJSmskXWQVBhtKrPYDVDyWN";
       
        const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&amp;response=" + req.body['g-recaptcha-response'] + "&amp;remoteip=" + req.connection.remoteAddress;
       
        request(verificationURL,function(error,response,body) {
          body = JSON.parse(body);
       
          if(body.success !== undefined && !body.success) {
            return res.json({"responseError" : "Failed captcha verification"});
          }
          res.json({"responseSuccess" : "Sucess"});
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
   
    // para ver un listado con los abonados
    router.get('/listado', PenyistaControlador.listadoPenyistas);

    
    
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