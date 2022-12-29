// EJERCICIO 14: Programa una función para convertir grados Celsius a Fahrenheit y viceversa.

function celsiusFahrenheit (grados, CoF) {
    let celsius_fahrenheit = CoF.toUpperCase();
    celsius_fahrenheit !== "C" && celsius_fahrenheit !== "F" && console.log("Ingrese C o F")
    
    let deCaF = (grados * 9/5) + 32;
    let deFaC = (grados - 32) * 5/9;

    celsius_fahrenheit === "C" && console.log(`${grados} Celsius es igual a ${deCaF} Fahrenheit`);
    celsius_fahrenheit === "F" && console.log(`${grados} Fahrenheit es igual a ${deFaC} Celsius`);
}

celsiusFahrenheit(0, "C"); 