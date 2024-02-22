// Emily Rosenfeld, A01198339
// Ejercicio 5: Escribe una función que calcule el máximo común divisor de dos números.

function max(a,b){
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(max(2, 4));
console.log(max(10, 5));
console.log(max(22, 33));
