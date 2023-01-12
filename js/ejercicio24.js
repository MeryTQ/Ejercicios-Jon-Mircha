// EJERCICIO 24 : Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente.

function ascendenteDescendiente(numerosArray) {
    !(numerosArray instanceof Array) && console.warn("Debe ingresar un array");
    !numerosArray && console.error("El parámetro esta vacío");

    const ascendente = numerosArray.sort((a, b) => a - b).map(Number);
    const descendiente = numerosArray.sort((a, b) => b - a).map(Number);

    const resultado = {
        asc: ascendente,
        desc: descendiente
    }
    console.log(resultado)
}

ascendenteDescendiente([7,5,7,8,6]); 