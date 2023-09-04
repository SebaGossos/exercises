/* Enunciado Ejercicio 37:
Crea dos funciones que comprueben si dado un array de números,
todos ellos son pares.
 
Una función usando metodos del lenguaje y otra solo usando estructuras de control.
 
Ejemplos:
todosPares([1, 2, 3, 4]); // false
todosPares([2, 6, 8, 12]); // true */

// //!SOLUTION 1
// const todosPares = ( numberSet: number[] ) => {
//     return numberSet.find(number => number % 2 !== 0) ? false: true;
// }
//!SOLUTION 2
const todosPares = ( numberSet: number[] ) => {
    return numberSet.every( number => number % 2 === 0 );
}

console.log( todosPares([1,2,3,4]) )
console.log( todosPares([2,6,8,12]) )