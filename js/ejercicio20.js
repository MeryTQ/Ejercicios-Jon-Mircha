//EJERCICIO 20: Programa una función que valide que un texto sea un email válido.

function emailValido(email) {
    typeof email !== "string" && console.warn("Ingrese un mail");
    !email && console.error("No ingresaste un mail");

    let emailExpReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    return (emailExpReg)
    ? console.log(`${email} es un email valido`)
    : console.warn(`${email} no es un email valido`)
}

emailValido("jonmircha@gmail.com"); 