// Emily Rosenfeld, A01198339
// Ejercicio 7: Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].

function factores(a){
    let num = [];

    for (let i = 1; i <= a/2; i++) {
        if (a % i === 0) {
            num.push(i);
    }
}
num.push(a);
return num;

}

console.log(factores(12));
console.log(factores(28));
console.log(factores(45));


