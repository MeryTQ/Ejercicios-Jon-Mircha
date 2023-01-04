// EJERCICIO 18: Programa una función que dada una cadena de texto cuente el número de vocales y consonantes.

function vocalConsonante(cadena) {
    typeof cadena !== "string" && console.warn("Ingrese una cadena de texto");
    let vocales = 0;
    let consonantes = 0;
    for (let letra of cadena){
        if(/[AEIOUaeiouÁÉÍÓÚáéíóú]/.test(letra)){
            vocales += 1;
        } else if (/[BCDFGHKLMNÑPQRSTVWXYZbcdfghklmnñpqrstvwxyz]/.test(letra)){
            consonantes += 1;
        }
    }
    console.log(`Vocales: ${vocales}, Consonantes: ${consonantes}`)
}

vocalConsonante("Hola Mundo"); 