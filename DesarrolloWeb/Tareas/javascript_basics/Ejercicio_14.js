// Emily Rosenfeld, A01198339
// Ejercicio 14: Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.

function potencia(a){
    if (a > 0 && (a & (a - 1)) === 0) {
        return true;
      } 
      else {
        return false;
      }
}

console.log(potencia(12));
console.log(potencia(16));
console.log(potencia(32));
console.log(potencia(45));