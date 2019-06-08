const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const directoriopublico = path.join(__dirname, '../public');
const directoriopartials = path.join(__dirname, '../partials');
const dirNode_modules = path.join(__dirname , '../node_modules');
require('./helpers')

app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));
app.use(express.static(directoriopublico));
app.use(bodyParser.urlencoded({extended: false}));

hbs.registerPartials(directoriopartials);


//app.use(express.static(__dirname + '../public'))
console.log(__dirname)

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        estudiante: 'Sebastian'
    });
});

app.post('/calculos', (req, res) => {

    console.log(req.query);
    res.render('calculos', {
        estudiante: req.body.nombre,
        nota1: parseInt(req.body.nota1),
        nota2: parseInt(req.body.nota2),
        nota3: parseInt(req.body.nota3)
    });
});

app.get('*', (req, res) => {
    res.render('error', {
        estudiante: 'error'
    })
});

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000')
});