/*
Enunciado Ejercicio 11:
 Crea una función a la cual le pase un array de numeros
 y un numero que será el resultado de la suma de dos de los valores
 
Ejemplos:
sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
sumarDos([4, 5, 9, 1], 10) // [9, 1]
sumarDos([1, 2, 3, 4], 5) // [2, 3]
 
*/

//! SOLUCION 1 MENOS EFICIENTE.
// function sumarDos( arr: number[], num: number ): number[] | string {

//     for (const i in arr) {

//         for (const key in arr) {
//             if( i !== key ) 
//                 if ( arr[i] + arr[key] === num ) return [ arr[i], arr[key] ] ;
//         }

//     }
//     return 'no se encuentra los numeros dentro del array';
// }

// ! SOLUCION 2 

// function sumarDos( arr: number[], num: number ): (number | undefined)[] | string {

//     const primerValor = arr.find( (item, index) => {
//         const result = num - item; 
//         return arr.includes( result, index + 1 ) 
//     })
//     const segundoValor = num - primerValor!;
//     const response = [primerValor, segundoValor] 

//     if( !response[0] ) return 'no se encuentra los numeros dentro del array';
    
//     return response;
// }


// ! SOLUCION 3 + EFICIENTE

// function sumarDos(array: number[], objetivo: number): number[] | string {
//     // Crear un objeto vacío
//     let numeros: any = {};
//     // Recorrer el array
//     for (let num of array) {
//       // Calcular el complemento del número actual
//       let complemento = objetivo - num;
//       // Comprobar si el complemento está en el objeto
//       if (numeros[complemento]) {
//         // Si está, devolver el par de números
//         return [complemento, num];
//       }
//       // Si no está, añadir el número al objeto
//       numeros[num] = true;
//     }
//     // Si no se encuentra ningún par, devolver un array vacío
//     return 'no se encuentra';
// }

// ? No, la primera manera no es más eficiente que la segunda. La primera manera usa los métodos find () e includes () de los arrays de JavaScript, que recorren el array hasta encontrar el elemento buscado o hasta llegar al final. Esto significa que la complejidad de esta solución es de O (n^2), ya que se hace una búsqueda lineal dentro de otra búsqueda lineal. La segunda manera usa un objeto para guardar los números que ya se han visto en el array, y luego comprueba si el complemento de cada número está en el objeto. Esto significa que la complejidad de esta solución es de O (n), ya que se recorre el array una sola vez y la búsqueda del complemento es constante. Puedes ver una comparación del rendimiento de ambas soluciones en este enlace, donde se muestra que la segunda manera es mucho más rápida que la primera.

// ? Es importante elegir el método adecuado para resolver un problema, ya que puede afectar al tiempo y al espacio que se necesita para ejecutar el código. Los arrays de JavaScript tienen muchos métodos útiles, pero no todos son igual de eficientes. Te recomiendo que leas este artículo sobre algunos métodos de los arrays que pueden mejorar el rendimiento de tu código. También puedes consultar esta página sobre la complejidad algorítmica y cómo medirla. Espero haberte ayudado con tu ejercicio de JavaScript. 😊

function sumarDos( arr: number[], objetivo: number ): (number[] | string) {
    const isArr: any = {}
    for ( const item of arr ) {
        const complemento = objetivo - item;
        if( isArr[complemento] ) return [item, complemento]
        isArr[item] = true;
    }
    
    return 'no se encuentran los resultados'
}



console.time() 

console.log( sumarDos( [4, 5, 9, 1], 10 ) ) 

console.timeEnd()