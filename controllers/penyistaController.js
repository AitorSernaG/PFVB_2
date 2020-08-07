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
        }else{
            res.json('No se ha podido registrar el usuario')
        }
    } catch (error) {
        console.log(error);
        setTimeout(function(){
            res.redirect('/error');
        },8000)
        
    }
}



