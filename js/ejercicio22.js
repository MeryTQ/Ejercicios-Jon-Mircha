// EJERCICIO 22: Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array.

function masAltoMasBajo(numerosArray) {
    !(numerosArray instanceof Array) && console.warn("Debe ingresar un array");
    !numerosArray && console.error("No ingreso un array");

    const numerosArraySort = numerosArray.sort((a, b) => b - a);
    const resultado = [numerosArraySort[0], numerosArraySort[numerosArraySort.length - 1]];
    return console.log(resultado);
}

masAltoMasBajo([1, 4, 5, 99, -60]); 