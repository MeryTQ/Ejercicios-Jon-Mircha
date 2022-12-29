// EJERCICIO 12: Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no.

function esPrimo (num) {
    typeof num !== "number" && console.log(`Ingresa en formato número`);
    let match = 0;
    for (let i = 1; i <= num; i += 1){
        if (num % i == 0){
            match += 1;
        }
    }
    match == 2
    ? console.log(`${num} es primo`)
    : console.log(`${num} no es primo`)
}

esPrimo(7);