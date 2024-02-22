// Emily Rosenfeld, A01198339
// Ejercicio 2: Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.


function bubbleSort(lista) {
    let len = lista.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (lista[j] > lista[j + 1]) {
                // Para ordenear la lista
                [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]];
            }
        }
    }

    return lista;
}

// Casos de uso
let miLista1 = [7, 3, 1, 8, 8, 4];
let listaOrdenada = bubbleSort(miLista1);
console.log(listaOrdenada);
