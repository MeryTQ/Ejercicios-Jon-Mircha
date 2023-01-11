// EJERCICIO 21: Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado.

function elevadoAlCuadrado(numerosArray) {
    !(numerosArray instanceof Array) && console.warn("Debe ingresar un array");
    !numerosArray && console.error("No ingreso un array");

    const numerosArrayMap = numerosArray.map(i => i * i);
    return console.log(numerosArrayMap);
}

elevadoAlCuadrado([1, 4, 5]); 