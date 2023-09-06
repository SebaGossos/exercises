"use strict";
/* Enunciado Ejercicio 38:
Crea una función que convierta un número a binario.
 
Ejemplos:
aBinario(10) // 1010
aBinario(76) // 1001100 */
//! SOLUTION 1
// function aBinario( num: number ): number {
//     let BinaryNum: number[] = [];
//     console.log( parseInt('') , +'' ) // NaN 0
//     while( num > 0 ){
//         const rest = ( num / 2 );
//         num = Math.floor(rest);
//         if ( Number.isInteger( rest ) ) { BinaryNum.unshift( 0 ); continue; }
//             BinaryNum.unshift( 1 )
//     }
//     return +BinaryNum.join('')
// }
//! SOLUTION 2
function aBinario(num) {
    let result = '';
    while (num > 0) {
        result = (num % 2) + result;
        num = Math.floor(num / 2);
    }
    return +result;
}
console.log(aBinario(10));
// console.log( aBinario(76) )
