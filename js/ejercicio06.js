// EJERCICIO 6: Programa una función para contar el número de veces que se repite una palabra en un texto largo.

function repetido (cadena, palabra) {
    const rep = cadena.split(" ").filter(f => f.includes(palabra));
    const cant = rep.length
    return console.log(cant)
}
repetido ("hola mundo, adios mundo", "mundo");