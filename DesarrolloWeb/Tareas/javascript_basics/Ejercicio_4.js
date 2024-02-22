// Emily Rosenfeld, A01198339
// Ejercicio 4: Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.

function cadena (o){
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

let o = "hola mundo";
let o2 = "no se yolo";
let o3 = "este es el ultimo ejemplo";


let funcionA = cadena (o);
let funcionB = cadena (o2);
let funcionC = cadena (o3);


console.log(funcionA);
console.log(funcionB);
console.log(funcionC);