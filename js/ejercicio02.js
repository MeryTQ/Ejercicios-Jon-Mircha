// EJERCICIO 2: Programa una función que te devuelva el texto recortado según el número de caracteres indicados.

function recorte (cadena, num) {
    let miRecorte = cadena.slice(0, num);
    console.log(miRecorte)
}

recorte("Hola mundo", 4);