/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 14:
Dada una cadena de texto, comprobar si es un palindromo o no. No usar funciones de
javascript, solo estructuras de control
 
Los palíndromos son palabras que se leen igual aun estando invertidas. 
Por ejemplo: ana, bob, otto, allivessevilla
 
Ejemplos:
esPalindromo("otto") // Devuelve: true
esPalindromo("victor") // Devuelve: false
 
*/

//! SOLUCION 1
// function esPalindromo( name: string ): boolean {
    // if ( !name ) throw new Error( `Must send the name like an argument, actually name is: ${ name }`)
//     const rightLeft = name.split('')
//                           .reverse()
//                           .join('')
                          
//     return ( name === rightLeft );
// }

//! SOLUCION 2
// function esPalindromo( name: string ): boolean {
    // if ( !name ) throw new Error( `Must send the name like an argument, actually name is: ${ name }`)
//     const newArr: string[] | string = []

//     name.split('').forEach(letter => {
//         newArr.unshift( letter )
//         return letter;
//     })
    
//     const leftRight = newArr.join(''); 

//     return ( name === leftRight );
// }

//! SOLUCION 3
function esPalindromo( name: string ): boolean {
    if ( !name ) throw new Error( `Must send the name like an argument, actually name is: ${ name }`)
    let rightLeft = ''

    for ( let i = ( name.length - 1 ); i >= 0 ; i-- ){
        if ( !rightLeft ) { rightLeft = name[i]; continue }
        rightLeft += name[i]
    }

    return ( name === rightLeft );
}


console.log( esPalindromo( "otto" ) ) // Devuelve: true
console.log( esPalindromo( "victor" ) ) // Devuelve: false


