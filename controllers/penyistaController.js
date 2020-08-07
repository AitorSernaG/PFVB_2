const Penyista = require('../models/Penyista');
const express = require('express');


// agregar nuevo peñista a la base de datos

exports.nuevoPenyista = async (req, res, next) => {
    
    const penyista = new Penyista(req.body);

    try {

        usu = await penyista.save();
        
        if(usu){
            console.log('peñista guardado');
            setTimeout(function(){
               res.redirect('/registrado');
            },8000)   
        }
    } catch (error) {
        console.log('No se ha podido registrar el usuario');
            setTimeout(function(){
               res.redirect('/Error');
            },8000)
    }
}



