//EJERCICIO 19: Programa una función que valide que un texto sea un nombre válido.

function nombreValido(nombre) {
    !nombre && console.log("No ingreso un nombre");
    typeof nombre !== "string"  && console.log("El nombre ingresado NO es una cadena de texto");
    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre); // Respuesta del video
    return(expReg)
    ? console.log(`${nombre} es un nombre valido`)
    : console.log(`${nombre} no es un nombre valido`)
}

nombreValido("Jonathan MirCha"); 