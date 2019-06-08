function promedio1(nota_uno, nota_dos, nota_tres){
    let resultado = (nota_uno+nota_dos+nota_tres)/3;
    console.log('El promedio 1 es '+ resultado);
}

// no blocking
let promedio2=(nota_uno, nota_dos, nota_tres)=>{
    setTimeout(function(){
    let resultado = (nota_uno+nota_dos+nota_tres)/3;
    console.log('El promedio 2 es '+ resultado);
}, 0);
}

let promedio3=(nota_uno, nota_dos, nota_tres)=>console.log('El promedio 3 es '+ (nota_uno+nota_dos+nota_tres)/3);

//Callback
let promedio4=(nota_uno, nota_dos, nota_tres, callback)=>{
    setTimeout(function(){
    let resultado = (nota_uno+nota_dos+nota_tres)/3;
    callback(resultado);
}, 2000);
}

promedio1(2,3,4);
promedio2(4,3,4);
promedio3(4,8,4);

//callback
promedio4(5,8,5, function(resultado) {    
    console.log('El promedio 4 es '+ resultado);
});

// nodemon primero