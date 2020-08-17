const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const ControladorTexto = require('../controllers/ControladorTexto');
const PenyistaControlador = require('../controllers/penyistaController');
const Penyista = require('../models/Penyista');
const request = require('request');




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
    router.post('/contacto', PenyistaControlador.nuevoPenyista, function(req, res) {

            // g-recaptcha-response is the key that browser will generate upon form submit.
            // if its blank or null means user has not selected the captcha, so return the error.
            if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
                return res.json({"responseCode" : 1,"responseDesc" : "Please select captcha"});
            }
            // Put your secret key here.
            var secretKey = "6LcE578ZAAAAAD74sUJSmskXWQVBhtKrPYDVDyWN";
            // req.connection.remoteAddress will provide IP address of connected user.
            var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
            // Hitting GET request to the URL, Google will respond with success or error scenario.
            request(verificationUrl,function(error,response,body) {
                body = JSON.parse(body);
                // Success will be true or false depending upon captcha validation.
                if(body.success !== undefined && !body.success) {
                return res.json({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});
                }
                res.json({"responseCode" : 0,"responseDesc" : "Sucess"});
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