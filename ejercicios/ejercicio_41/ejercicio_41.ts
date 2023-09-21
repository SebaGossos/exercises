/* Enunciado Ejercicio 41:
Crea una función que invierta los números de un número entero.
 
Ejemplos:
invertirEntero(123)   // 321
invertirEntero(-123)  // -321 */


function invertirEntero( intNum: number ): number {

    const splitNum = intNum.toString().split('');

    const finalNum = splitNum[0] === '-' 
        ? +('-' + splitNum.slice(1).reverse().join('')) 
        : +splitNum.reverse().join('');
    
    return finalNum;
}
console.log(invertirEntero(123)) // 321
console.log(invertirEntero(-123843729742389)) // -321

invertirEntero(-123)  // -321


