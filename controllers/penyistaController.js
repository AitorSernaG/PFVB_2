const Penyista = require('../models/Penyista'); // traemos el modelo penyista para hacer las consultas
const express = require('express');
const { connection } = require('mongoose');



// agregar nuevo peñista a la base de datos

exports.nuevoPenyista = async (req, res, next) => {
    
        const penyista = new Penyista(req.body); // datos que se envian en el formulario
        //const penyistas = await Penyista.find({}); // preparado para traer todos los registros de la base de datos con el modelo
        const penyistaDni = await Penyista.find({"dni": req.body.dni},{"dni":1,"_id":0}) // datos traidos de la base de datos con el modelo
        //console.log(penyistas);
        const dniUser = await {dni: req.body.dni};
        console.log(dniUser);
        console.log(penyistaDni);
        
    
    try {

        if(dniUser !== penyistaDni){
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
        console.log("Ya existe un peñista con ese DNI");
        const respuesta = await {respuesta: "lo sentimos el usuario ya existe con ese dni: ", dni: req.body.dni };
        
        setTimeout(function(){
            res.render('../views/error.ejs', {
            respuesta
        });
        },8000);
    }
    }




exports.listadoPenyistas = async (req, res, next) => {

        const penyista = new Penyista(req.body); // estos son los datos que se envian en el formulario
        const penyistas = await Penyista.find({}).sort({nombre:1}); // preparado para traer todos los registros de la base de datos con el modelo
        const penyistasAbonados = await Penyista.find({"abonado":  "si"}, {nombre:1,apellidos:1,abono:1}); 
        const penyistasNoAbonados = await Penyista.find({"abonado":  "no"}, {nombre:1,apellidos:1,abono:1});
        const penyistaPoblacion = await Penyista.find({"poblacion": "Albatera"}, {nombre:1,apellidos:1,abono:1});
        const penyistasNumero = await Penyista.find({}).count();
        const penyistasAbonadosNumero = await Penyista.find({"abonado":  "si"}, {nombre:1,apellidos:1,abono:1}).count(); 
        const penyistasNoAbonadosNumero = await Penyista.find({"abonado":  "no"}, {nombre:1,apellidos:1,abono:1}).count();
        //console.log(penyistas);

        res.render('../views/listado.ejs', {
            penyistas, // esta variable se puede usar en la pagina para mostrar datos del bd
            penyistasAbonados,
            penyistasNoAbonados,
            penyistaPoblacion,
            penyistasNumero,
            penyistasAbonadosNumero,
            penyistasNoAbonadosNumero
        });
}



