const Penyista = require('../models/Penyista'); // traemos el modelo penyista para hacer las consultas
const express = require('express');
const { connection } = require('mongoose');



// agregar nuevo peñista a la base de datos

exports.nuevoPenyista = async (req, res, next) => {
    
        const penyista = new Penyista(req.body); // datos que se envian en el formulario
        //const penyistas = await Penyista.find({}); // preparado para traer todos los registros de la base de datos con el modelo
        const penyistaEmail = await Penyista.find({"email": req.body.email}) // datos traidos de la base de datos con el modelo
        //console.log(penyistas);
        console.log(req.body.email);
        
    
    try {

        if(req.body.email !== penyistaEmail){
            usu = await penyista.save();
            console.log('peñista guardado');
            const respuesta = await {nombre: req.body.nombre};
            
            setTimeout(function(){
                res.render('../views/registrado.ejs', {
                respuesta
            });
            },8000);   
        } 
    }catch (error) {
        
        console.log(error);
        console.log("Ya existe un peñista con ese email");
        const respuesta = await {respuesta: "lo sentimos el usuario ya existe con ese email: ", email: req.body.email };
        
        setTimeout(function(){
            res.render('../views/error.ejs', {
            respuesta
        });
        },8000);
    }
    }




exports.listadoPenyistas = async (req, res, next) => {

        const penyista = new Penyista(req.body); // estos son los datos que se envian en el formulario
        const penyistas = await Penyista.find({}); // preparado para traer todos los registros de la base de datos con el modelo
        const penyistasAbonados = await Penyista.find({"abonado":  "si"}, {nombre:1,apellidos:1,abono:1}); 
        const penyistasNoAbonados = await Penyista.find({"abonado":  "no"}, {nombre:1,apellidos:1,abono:1});
        const penyistaPoblacion = await Penyista.find({"poblacion": "Albatera"}, {nombre:1,apellidos:1,abono:1});
        //console.log(penyistas);

        res.render('../views/listado.ejs', {
            penyistas, // esta variable se puede usar en la pagina para mostrar datos del bd
            penyistasAbonados,
            penyistasNoAbonados,
            penyistaPoblacion
        });
}



