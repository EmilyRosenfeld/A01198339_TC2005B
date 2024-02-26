// Emily Rosenfeld, A01198339
// Ejercicio 11: Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.

function cadena(n) {
    return n.sort()
}

let n = ["hola mundo", "emily", "viva"]
let n2 = ["no lo se", "yolo"]
let n3 = ["este es el", "ultimo", "ejemplo de todos"]

let funcionA = cadena (n);
let funcionB = cadena (n2);
let funcionC = cadena (n3);

console.log(funcionA);
console.log(funcionB);
console.log(funcionC);