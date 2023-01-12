// EJERCICIO 7: Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro).

function polindromo (cadena) {
    const esPolindromo = cadena.split("").reverse().join("");
    return console.log(esPolindromo.toLowerCase() === cadena.toLowerCase());
}

polindromo("Salas");