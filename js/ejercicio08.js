// EJERCICIO 8: Programa una función que elimine cierto patrón de caracteres de un texto dado.

function eliminar (cadena, eliminar) {
    const eliminarPatron = cadena.replaceAll(eliminar,"");
    return console.log(eliminarPatron)
}

eliminar("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");