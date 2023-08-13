/* Enunciado Ejercicio 22:
Crea una función que invierta el orden de un texto
sin usar funciones nativas del lenguaje.
 
Ejemplos:
invertirTexto("Hola");
 
Devuelve: 
aloH */

//!SOLUCION CON METODOS NATIVOS DE JS
// function invertirTexto ( word: string ): string {
//     return word.split('').reverse().join('')
// }

//!SOLUCION SIN METODOS NATIVOS DE JS
function invertirTexto ( word: string ): string {
    if ( !word ) throw new Error( `Must send an valid argument word` )

    let wordReverse = ''
    
    for ( let i = word.length - 1; i >= 0; i--) {
        wordReverse += word[i]
    }

    return wordReverse;
}

console.log( invertirTexto( 'Hello' ))


