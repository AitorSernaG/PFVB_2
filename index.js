const express = require('express');
const server = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const middleaware = require('./middlewares/index');
const bodyParser = require('body-parser');
request = require('request');



// conectar a mongoDB con nuestra base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://aitor:mmmmmmmm_*@cluster0-hfd8w.azure.mongodb.net/vegabaja?retryWrites=true&w=majority', { // esta linea habria que cambiarla en caso de subirla a produccion en una pagina mlab
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

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

// servidor
server.listen(port, host, () => {
    console.log("Servidor levantado");
})