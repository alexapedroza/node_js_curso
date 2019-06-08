const opciones = {
    matematicas:{
        default: 0,
        alias: 'm'
    },
    ingles:{
        default: 0,
        alias: 'i'
    },
    programacion:{
        demand: true,
        alias: 'p'
    }
}

const argv = require('yargs')
.command ('promedio', 'calcular el promedio', opciones)
.argv

let obtenerPromedio = (nota_uno, nota_dos, nota_tres) => (nota_uno+nota_dos+nota_tres)/3;

module.exports = {
    obtenerPromedio,
    argv
};