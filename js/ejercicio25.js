// EJERCICIO 25 : Programa una función que dado un arreglo de elementos, elimine los duplicados.

function eliminarDuplicado(miArray) {
    !(miArray instanceof Array) && console.warn("Debe ingresar un array");
    !miArray && console.error("El parámetro esta vacío");

    const resultado = miArray.filter((item, index) => {
        return miArray.indexOf(item) === index ;
        
    });
    console.log(resultado);
}

eliminarDuplicado(["x", 10, "x", 2, "10", 10, true, true]); 