// EJERCICIO 1: Programa una función que cuente el numero de caracteres de una cadena de texto.

function caracteres (cadena) {
    const misCaracteres = cadena.replace(/ /g, "");
    console.log(misCaracteres.length);
}

caracteres("Hola que tal");