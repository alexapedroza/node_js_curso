const {obtenerPromedio, argv} = require('./datos');
const express = require('express')
const app = express()

console.log(argv);
if(argv._[0]=='promedio'){
    texto = ('El promedio de '+argv.n+' es '+ obtenerPromedio(argv.m, argv.i, argv.p))
}
else{
    console.log('Promedio no calculado');
}

app.get('/', (req, res) => {
    console.log('ajsfashdfoi')
    res.send(texto);
});

app.listen(3000);