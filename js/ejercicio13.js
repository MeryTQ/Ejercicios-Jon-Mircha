// EJERCICIO 13: Programa una función que determine si un número es par o impar.

function parImpar (num) {
    typeof num !== "number" && console.log(`Ingresa en formato número`);
    num % 2 == 0
    ? console.log(`${num} es par`)
    : console.log(`${num} es impar`)
}

parImpar(29);