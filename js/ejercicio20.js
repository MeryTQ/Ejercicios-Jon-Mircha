//EJERCICIO 20: Programa una función que valide que un texto sea un email válido.

function emailValido(email) {
    typeof email !== "string" && console.log("Ingrese un mail")
    let emailIncludes = email.includes("@gmail.com");
    emailIncludes
    ? console.log(emailIncludes)
    : console.log(emailIncludes)
}

emailValido("jonmircha@gmail.com"); 