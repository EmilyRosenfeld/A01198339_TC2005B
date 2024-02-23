// Emily Rosenfeld, A01198339
// Ejercicio 11: Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.

//AUN NO JALA
function cadena(n) {
    let n = ""
    for (let i = 0; i < o.length; i++){
        if (i === 0 || o[i - 1] === " ") {
            n = n + o[i].toUpperCase() 
        }
        
        else {
            n = n + o[i] 
        }   
    }

    return n;
}

let o = ["hola mundo", "Emily", "Viva"]
let o2 = ["no lo se", "yolo"]
let o3 = ["este es el", "ultimo", "ejemplo de todos"]

let funcionA = cadena (o);
let funcionB = cadena (o2);
let funcionC = cadena (o3);

console.log(funcionA);
console.log(funcionB);
console.log(funcionC);