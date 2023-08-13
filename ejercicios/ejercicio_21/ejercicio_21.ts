/* Enunciado Ejercicio 21:
Crea una función que reciba un numero y me genere una matriz
con el numero de columnas y filas que le hemos indicado por parámetro
 
Ejemplos:
generarMatriz(4);
 
Devuelve: 
[
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]
] */

function generarMatriz( num: number ): number[][]{
    if ( !num ) throw new Error( `Must send number as an argument` )
    const matriz: number[][] = []
    let addArrayToMatriz: number[] = []
    
    for ( let i = 1; i <= (num*num); i++ ){
        addArrayToMatriz.push( i )
        if ( addArrayToMatriz.length === num ) {
            matriz.push( addArrayToMatriz );
            addArrayToMatriz = []
        }
        console.log( matriz )
    }

    return matriz;
}
 
console.log(generarMatriz( 4 ))
console.log( !NaN )

