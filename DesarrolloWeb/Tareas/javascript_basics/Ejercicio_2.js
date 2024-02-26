// Emily Rosenfeld, A01198339
// Ejercicio 2: Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.


function bubbleSort(lista) {
    let len = lista.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (lista[j] > lista[j + 1]) {
                [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]];
            }
        }
    }

    return lista;
}

let lista1 = [7, 3, 1, 8, 8, 4];
let lista2 = [3, 4, 0, 2, 3, 3];
let lista3 = [9, 8, 4, 6, 5, 3];

let listaOrdenadaA = bubbleSort(lista1);
let listaOrdenadaB = bubbleSort(lista2);
let listaOrdenadaC = bubbleSort(lista3);

console.log(listaOrdenadaA);
console.log(listaOrdenadaB);
console.log(listaOrdenadaC);

