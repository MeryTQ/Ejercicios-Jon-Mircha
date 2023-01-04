// EJERCICIO 16: Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada.

function montoFinal(subTotal, desc) {
    const descuento = subTotal * desc / 100;
    const total = subTotal - descuento;
    return console.log(total);
}

montoFinal(1000, 20); 