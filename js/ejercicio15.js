// EJERCICIO 15: Programa una función para convertir números de base binaria a decimal y viceversa.
 
function binarioADecimal(binario, dos) {
    if(typeof binario !== "number" || typeof dos !== "number"){
        return console.log("Ingrese un numero")
    }
    const resultado = parseInt(binario, dos);
    console.log(`${binario} = ${resultado} base 10`)
}

binarioADecimal(100, 2); 