// Emily Rosenfeld, A01198339
// Ejercicio 13: Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.

function cadena(a) {
        let veces = {};
      
        for (let e of a) {
            veces[e] = (veces[e] || 0) + 1;
        }
      
        let n = "";
        let mas = 0;
      
        for (let c in veces) {
          if (veces[c] > mas) {
            mas = veces[c];
            n = c;
          }
        }
      
        return n;
}

let o = ["Emily", "Emily", "Viva"];
let o2 = ["no", "yolo", "yolo"];
let o3 = ["si", "no", "si"];

let funcionA = cadena(o);
let funcionB = cadena(o2);
let funcionC = cadena(o3);

console.log(funcionA);
console.log(funcionB);
console.log(funcionC);
