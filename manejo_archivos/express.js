const express = require('express')
var app = express()

app.get('/', (req, res) => {
    console.log('ajsfashdfoi')
    res.send('<b> Hola </b><br><p> mundo</p>')
});

app.listen(3000);