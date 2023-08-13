/* Enunciado Ejercicio 19:
Crea una función que simule el lanzamiento de dos dados.
 
Ejemplos:
dados(); */


function dados(): number[] {
    let dado1:number, dado2: number;
    dado1 = Math.floor( Math.random() * 6 + 1 );
    dado2 = Math.floor( Math.random() * 6 + 1 );

    return [ dado1, dado2 ]
} 

console.log( dados() );