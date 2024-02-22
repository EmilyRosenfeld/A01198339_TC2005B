// Emily Rosenfeld, A01198339
// Ejercicio 1: Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'

function caracter (o){
    for (let i = 0; i < o.length; i++){
        let car = o[i];
        if (o.indexOf(car) === o.lastIndexOf(car)) {
            return car
        }
    }
}

let o = "abacddbec";
let o1 = "jljkkomom";
let o2 = "yolosyolo";

let funcionA = caracter (o);
let funcionB = caracter (o1);
let funcionC = caracter (o2);

console.log(funcionA);
console.log(funcionB);
console.log(funcionC);