/* Enunciado Ejercicio 30:
Dado un array de numeros, permitir los numeros duplicados
un maximo de 2 veces y devolver la longitud del array.
 
Ejemplos:
eliminarDuplicados([4, 4, 4, 2, 2, 3]); // 5
eliminarDuplicados([6, 6, 2, 2, 2, 3]); // 5
eliminarDuplicados([1, 2, 3, 4, 9, 9, 9, 9]); // 6 */

type ObjectoNumerico = {[Clave in number]: number}
//! FIRST SOLUTION EFICIENT
// function eliminarDuplicados( listingNumber:number[] ): number {

//     const quantityNum: ObjectoNumerico = {}
//     const finishNumbers: number[] = []

//     for ( let i of listingNumber ){
//         if ( !quantityNum[i] ) { quantityNum[i] = 1; finishNumbers.push( i ); continue; }
//         if ( quantityNum[i] >= 2 ){ continue; }
//         ++quantityNum[i]; finishNumbers.push( i )
//     }
    

//     return finishNumbers.length;
    
// }

//! SECOND SOLUTION MORE EFICIENT
function eliminarDuplicados( listingNumber:number[] ): number {

    const quantityNum = new Map<number, number>()
    const sinDuplicados: number[] = [];

    listingNumber.forEach( n => {
        const quantity = quantityNum.get( n ) ?? 0;
        if ( quantity < 2 ){
            sinDuplicados.push( n )
        }
        quantityNum.set( n, quantity + 1 )
    })
    console.log( quantityNum, sinDuplicados )
    return sinDuplicados.length;
    
}

console.log( eliminarDuplicados([1, 2, 3, 4, 9, 9, 9, 9, 9]) )