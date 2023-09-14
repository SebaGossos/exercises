
// Enunciado Ejercicio 39:
// Dado un número crea una función que genere todas las combinaciones
// de parentesis válidas.
 
// Ejemplos:
// combinacionesParentesis(3);
 
// Devuelve:
// [
//     "((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
// ]

type Conbination = string[]



// const conbinacionesParentesis = ( num: number ): Conbination => {

//     const quantParen = {
//         'open': num,
//         'close': num
//     }

//     const posibleConbination = {
//         '()()()': '()()()',
        
//     }
//     // console.log(posibleConbination["()()()"][3] === ')')

//     const conbination: Conbination = []
//     const open = '('
//     const close = ')'
//     let parentesis = '';

//     while ( quantParen.close > 0 ) { 
//         if ( quantParen.open > 0 ) { parentesis += open; --quantParen.open }
//         if ( quantParen.close > 0 ) { parentesis += close; --quantParen.close }
//         if ( (parentesis.length + 1) >= (num*2) ) conbination.push( parentesis )
//     }
//     return conbination 
// }


function conbinacionesParentesis( numero:number ){
    let resultados: any = []

    if( numero < 1 ) return resultados;
    
    generarParentesis('', numero, numero, resultados)

    return resultados;

}

let contadorEjecucionesRecursivas = 0;

function generarParentesis( conbinaciones: string, abiertos: number, cerrados: number, resultados: string[] ) {

    if( abiertos === 0 && cerrados === 0 ) {
        resultados.push( conbinaciones )
        return true
    }
    
    if( abiertos > 0 ) {
        generarParentesis( conbinaciones + '(', abiertos - 1, cerrados, resultados )
    }
    
    if( cerrados > 0 && abiertos < cerrados ) {
        generarParentesis( conbinaciones + ')', abiertos, cerrados - 1, resultados )
    }
    
    contadorEjecucionesRecursivas++
    console.log( 'Ejecuciones: ', contadorEjecucionesRecursivas, conbinaciones, resultados )
}

console.log( conbinacionesParentesis( 3 ) )
