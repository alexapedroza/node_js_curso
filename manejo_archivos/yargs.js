const nombre = {
    demand: true,
    alias: 'n'
}

const matematicas = {
    demand: true,
    alias: 'm'
}

const ingles = {
    demand: true,
    alias: 'i'
}

const programacion = {
    demand: true,
    alias: 'p'
}

const creacion = {
    nombre,
    matematicas,
    ingles,
    programacion
}

const muestraest = {
    nombre
}

const actualiza = {
    nombre,
    asignatura: {
        demand: true,
        alias: 'a'
    },
    calificacion: {
        demand: true,
        alias: 'c'
    }
}

const elimina = {
    nombre
}

const argv = require('yargs')
.command('crear', 'Crear un estudiante en mi BD', creacion)
.command('mostrar', 'Muestra los estudiantes')
.command('mostrarest', 'Muestra el estudiante indicado', muestraest)
.command('actualizar', 'actualiza la informacion del curso', actualiza)
.command('eliminar', 'elimina el estudiante indicado', elimina)
.argv;

module.exports = {
    argv
};