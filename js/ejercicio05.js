// EJERCICIO 5:  Programa una función que invierta las palabras de una cadena de texto.

function invertir (cadena) {
    const cadenaInvertida = cadena.split("").reverse().join("");
    return console.log(cadenaInvertida);
}

invertir("Hola mundo");