// EJERCICIO 26 : Programa una función que dado un arreglo de números obtenga el promedio. 

function promedio(miArray) {
    !(miArray instanceof Array) && console.warn("Debe ingresar un array");
    !miArray && console.error("El parámetro esta vacío");
    
    const suma = miArray.reduce((a, b) => a + b);
    const resultado = suma / miArray.length;
    return console.log(resultado);
}

promedio([9,8,7,6,5,4,3,2,1,0]);