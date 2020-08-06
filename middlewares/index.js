const express = require('express');
const server = express.Router();


module.exports = function(){

    
  server.use(function(req, res, next){
        if(req.url === '/favicon.ico'){
            next();
        }else{
            console.log('request url:' + req.url);
        next();
        }   
    });
    
    server.use((req,res, next) => {
        if(req.url === '/favicon.ico'){
            next();
        }else{
            console.log('Ha pasado por esta ruta');
            next();
        }

    });

   




    return server
    
}