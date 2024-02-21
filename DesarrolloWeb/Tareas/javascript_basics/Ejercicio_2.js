// Emily Rosenfeld, A01198339
// Ejercicio 2


function bubble_sort(arr){
    let n = arr.length
    let cambio
    do {
        cambio = false
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                cambio = true
            }
        }
        n--
        }
        while (cambio)
        return arr;
    }
    console.log(bubble_sort([64, 34, 25, 12, 22, 11, 90]))
    console.log(bubble_sort([6, 32, 5, 11, 27, 19, 87]))
    console.log(bubble_sort([2, 57, 52, 37, 17, 8, 93]))