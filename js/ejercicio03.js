// EJERCICIO 3: Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter.

function separado (cadena, sep){
    let miCadena = cadena.split(sep);
    console.log(miCadena);
}

separado("Hola que tal", " ");