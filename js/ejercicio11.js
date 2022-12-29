// EJERCICIO 11: Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n).

function factorial (num){
    if(typeof num !== "number") return console.log(`Ingresa en formato número`);
    let fact = 1;
    for (let i = 1; i <= num; i += 1){
        fact = fact * i
    }
    console.log(`El factorial de ${num} es ${fact}`)
}

factorial(5);