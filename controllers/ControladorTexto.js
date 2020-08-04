const express = require('express');
const fs = require('fs');
var c = 0

function TextoControlado(req, res, next){
            let nombre = req.body.nombre;
            let apellidos = req.body.apellidos;
            let poblacion = req.body.poblacion;
            let email = req.body.email;
            let telefono = req.body.telefono;
            
            let html = `<h1>Los datos enviados por el usuario son los siguientes: </h1>
                        Nombre: ${nombre}<br>
                        Apellidos: ${apellidos}<br>
                        Poblacion: ${poblacion}<br>
                        Email: ${email}<br>
                        Telefono: ${telefono}
                `;

            let xml = `${c} Nombre: ${nombre} - Apellidos: ${apellidos} - Poblacion: ${poblacion} - Email: ${email} - Telefono: ${telefono} \n`;

            var logger = fs.createWriteStream('log.txt', {
                flags: 'a' // 'a' means appending (old data will be preserved)
            })
            c = c++;
            logger.write(xml) // append string to your file
            logger.end() // close string
            
            setTimeout(function(){
                res.redirect('/registrado');
            },4000)
            //res.send(html);

}

module.exports = { TextoControlado }