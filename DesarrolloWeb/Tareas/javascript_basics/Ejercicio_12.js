// Emily Rosenfeld, A01198339
// Ejercicio 12: Escribe una función que tome una lista de números y devuelva la mediana y la moda.

function lista(a) {
    let sumar = 0
    let mediana

    for (let i = 0; i < a.length; i++) {
    // Media
        sumar += a[i] / a.length;
    }

    // Mediana
    if (a.length % 2 === 0) {
        let op1 = a.length / 2 - 1;
        let op2 = a.length / 2;
        mediana = (a[op1] + a[op2]) / 2;
    } 
    else {
        mediana = a[(a.length - 1) / 2];
    }

    // Moda
    let f = {};

    for (let i = 0; i < a.length; i++) {
        let op3 = a[i];
        f[op3] = (f[op3] || 0) + 1;
    }

    let moda;
    let max = 0;

    for (let op3 in f) {
        if (f[op3] > max) {
            max = f[op3];
            moda = op3;
        }
    }
    return { media: sumar, mediana: mediana, moda: moda };
}

let a = [1, 1, 5, 7, 8, 9];
let b = [4, 2, 3, 7, 4, 1];
let c = [3, 5, 5, 4, 4, 5];

let funcionA = lista(a);
let funcionB = lista(b);
let funcionC = lista(c);

console.log(funcionA);
console.log(funcionB);
console.log(funcionC);
