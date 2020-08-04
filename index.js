const express = require('express');
const server = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const middleaware = require('./middlewares/index');
const bodyParser = require('body-parser');




// conectar a mongoDB con nuestra base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/penya', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


// necesario para capturar valores de un formulario
server.use(bodyParser.urlencoded({extended:true}));




// settings
server.set('serverName', 'Mi primer server en NodeJS'); // CREAMOS UNA VARIABLE serverName
server.set('views', __dirname + '/views');
server.set('view engine', 'ejs');

// usar estilos estaticos

server.use('/css', express.static(__dirname + '/css'));
server.use('/img' , express.static(__dirname + '/img'));
server.use('/bootstrap', express.static(__dirname + '/css/bootstrap'));
server.use('/jquery' , express.static(__dirname + '/css/jquery'));
server.use('/bootstrap' , express.static(__dirname + '/node_modules/boostrap'));
server.use('/js', express.static(__dirname + '/js'));




//middleawares
server.use(middleaware());



// routing
server.use(routes());

// servidor
server.listen(3000, () => {
    console.log("Servidor levantado");
    console.log('NOMBRE DEL SERVIDOR: ', server.get('serverName'));
})