// Emily Rosenfeld, A01198339
// Ejercicio 9: Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.

function cadena(o) {
    let corta = o[0].length;

    for (let i = 0; i < o.length; i++) {
        let cadena1 = o[i].length;
        if (cadena1 < corta) {
            corta = cadena1;
        }
    }
    return corta;
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