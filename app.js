// Requires 
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Inicializar varibales
var app = express();


// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//Importar rutas
var appRoutes = require('./route/app');
var usuarioRoutes = require('./route/usuario');
var loginRoutes = require('./route/login');
var hospitalRoutes = require('./route/hospital');
var medicoRoutes = require('./route/medico');
var busquedaRoutes = require('./route/busqueda');
var uploadRoutes = require('./route/upload');
var imagenesRoutes = require('./route/imagenes');


//Conxion BD
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});

//Server index config
var serverIndex = require('serve-index');
app.use(express.static(__dirname + '/'));
app.use('/uploads', serverIndex(__dirname + '/uploads'));


//Rutas
app.use('/usuario', usuarioRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/medico', medicoRoutes);
app.use('/login', loginRoutes);
app.use('/busqueda', busquedaRoutes);
app.use('/upload', uploadRoutes);
app.use('/img', imagenesRoutes);

app.use('/', appRoutes);


//Escuchar peticiones

app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});