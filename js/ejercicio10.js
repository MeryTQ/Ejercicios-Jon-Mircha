// EJERCICIO 10: Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro).

function capicua (num) {
    if(typeof num !== "number") return console.log("No ingresaste un numero")
    const cap = Number(num.toString().split("").reverse().join(""));
    cap === num 
    ?   console.log(`${num} es capicúa`)
    :    console.log(`${num} no es capicúa`)
}

capicua(2002);