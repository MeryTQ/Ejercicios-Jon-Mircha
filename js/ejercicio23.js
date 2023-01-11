// EJERCICIO 23: Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares.

function paresImpares(numerosArray) {
    !(numerosArray instanceof Array) && console.warn("Debe ingresar un array");
    !numerosArray && console.error("No ingreso un array");

    const pares = [];
    const impares = [];

    for(num of numerosArray){
        num % 2 == 0
        ? pares.push(num)
        : impares.push(num)
    }

    const respuesta = {
        pares: pares,
        impares: impares
    }

    console.log(respuesta)
}

paresImpares([1,2,3,4,5,6,7,8,9,0]); 