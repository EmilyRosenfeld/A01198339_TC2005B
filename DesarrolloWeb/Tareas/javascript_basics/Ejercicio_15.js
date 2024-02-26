// Emily Rosenfeld, A01198339
// Ejercicio 15: Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.

function orden(lista) {
    return lista.sort((a, b) => b - a);

}

let lista1 = [7, 3, 1, 8, 8, 4];
let lista2 = [3, 4, 0, 2, 3, 3];
let lista3 = [9, 8, 4, 6, 5, 3];

let listaA = orden(lista1);
let listaB = orden(lista2);
let listaC = orden(lista3);

console.log(listaA);
console.log(listaB);
console.log(listaC);