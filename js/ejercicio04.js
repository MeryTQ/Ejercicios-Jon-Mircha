// EJERCICO 4: Programa una función que repita un texto X veces.

function repetir (cadena, rp){
    let repito = cadena + " ";
    repito = repito.repeat(rp)
    console.log(repito);
}

repetir("Hola mundo", 3);