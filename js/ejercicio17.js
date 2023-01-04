// EJERCICIO 17: Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy.

function comparacionFechas(oldDate) {
    if(!(oldDate instanceof Date)) return console.warn("Ingresa una fecha valida");
    const date = new Date ("2022, December, 29");
    const dif = date.getFullYear() - oldDate.getFullYear();
    console.log(`Han pasado ${dif} años`);
}

comparacionFechas(new Date(1984,4,23)); 