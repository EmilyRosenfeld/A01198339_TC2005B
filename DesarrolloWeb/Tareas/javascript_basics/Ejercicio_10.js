// Emily Rosenfeld, A01198339
// Ejercicio 10: Escribe una función que revise si una cadena de texto es un palíndromo o no.

function palindromo(a) {
    a = a.toLowerCase().replace(/ /g, "");
    let cadenaVolteada = a.split("").reverse().join("");

    if (a === cadenaVolteada) {
        console.log("Palindromo");
    } else {
        console.log("No es palíndromo");
    }

    return a;
}

let a = "a ti no bonita"
let b = "viva la vida"
let c = "anita lava la tina"

palindromo(a)
palindromo(b)
palindromo(c)



