// Emily Rosenfeld, A01198339
// Ejercicio 6: Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.

function hacker(a){

    var idioma = {"a" : "4", "e" : "3", "i" : "1", "o" : "0", "s" : "5"};
    for (var i = 0; i < a.length; i++){
        if (idioma[a[i]]){
            a = a.replace(a[i],idioma[a[i]])
        }
    }
    
    return a
}

let a = "Javascript es divertido"
let b = "Viva la vida"
let c = "Arriba la programacion"

let funcionA = hacker(a);
let funcionB = hacker(b);
let funcionC = hacker(c);

console.log(funcionA);
console.log(funcionB);
console.log(funcionC);
