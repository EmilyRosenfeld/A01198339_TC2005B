// Emily Rosenfeld, A01198339
// Ejercicio 8: Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]

function quitar (a) {
    let r = []
    
    for (let i = 0; i < a.length; i++) {
        if (r.indexOf(a[i]) === -1) {
            r.push(a[i]);
        }
    }
    return r; 
    }
    
    let a = [1, 0, 1, 1, 0, 0]
    let b = [2, 2, 2, 2, 0, 0]
    let c = [2, 2, 1, 1, 2, 1]
    
    let funcionA = quitar (a);
    let funcionB = quitar (b);
    let funcionC = quitar (c);
    
    console.log(funcionA);
    console.log(funcionB);
    console.log(funcionC);