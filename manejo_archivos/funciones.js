const fs = require('fs');
var listaEstudiantes = [];

const crear = (estudiante) => {
    listar();
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    };
    let duplicado = listaEstudiantes.find(nom => nom.nombre == estudiante.nombre);
    if(!duplicado){
        listaEstudiantes.push(est);
        console.log(listaEstudiantes);
        guardar();
    }else{
        console.log('Ya existe otro estudiante con ese nombre');
    }
}

const listar = () => {
    try{
        listaEstudiantes = require('./listado.json');
    //listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'));   -> este se usa cuando el json va a estar variando
    }catch(error){
        listaEstudiantes = [];
    }
}

const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json', datos, (err)=>{
        if(err) throw (err);
        console.log('Archivo creado con exito');
    })
}

const mostrar = () => {
    listar();
    console.log('Notas de los estudiantes'+'\n');
    listaEstudiantes.forEach(estudiante => {
        console.log(estudiante.nombre);
        console.log('  notas: ');
        console.log('  - matematicas '+estudiante.matematicas);
        console.log('  - ingles '+estudiante.ingles);
        console.log('  - programacion '+estudiante.programacion +'\n');

    });
    
}

const mostrarest = (nombrest) => {
    listar();
    let estud = listaEstudiantes.find(buscar  => buscar.nombre == nombrest);
    if(!estud){
        console.log('No existe este estudiante')
    }else{
        console.log('Notas del estudiante'+'\n');    
        console.log(estud.nombre);
        console.log('  notas: ');
        console.log('  - matematicas '+estud.matematicas);
        console.log('  - ingles '+estud.ingles);
        console.log('  - programacion '+estud.programacion +'\n');
    }
}

const mostrarmat = () => {
    listar();
    let estud = listaEstudiantes.filter(mat => mat.matematicas >= 3);
    if(estud.length == 0){
        console.log('No existe ningun estudiante que este aprobando ')
    }else{
        console.log('  Estudiantes que estan aprobando la materia: ');
        estud.forEach(estudiante => {
            console.log(estudiante.nombre);
            console.log('  notas: ');
            console.log('  - matematicas '+estudiante.matematicas);
    
        });
    }
}

const actualizar = (nom, asignatura, calificacion) => {
    listar();
    let encontrado = listaEstudiantes.find(buscar  => buscar.nombre == nom);
    if(!encontrado){
        console.log('El estudiante no existe')
    }else{
        console.log('  Estudiantes que estan aprobando la materia: ');
        encontrado[asignatura] = calificacion;
        guardar();    
    }
}

const eliminar = (nom) => {
    listar();
    let nuevo = listaEstudiantes.filter(estudiante => estudiante.nombre != nom);
    if(nuevo.length == listaEstudiantes.length){
        console.log('Ningun estudiante tiene el nombre indicado')
    }else{
        listaEstudiantes = nuevo;
        guardar();
    }
}

module.exports = {
    crear,
    mostrar,
    mostrarest,
    mostrarmat,
    actualizar,
    eliminar
}