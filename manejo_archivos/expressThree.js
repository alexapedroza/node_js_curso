const express = require('express');
const app = express()

app.use(express.static(__dirname + '/public'))      // __dirname para indicar la ruta en la que estamos ubicados

app.listen(3000);