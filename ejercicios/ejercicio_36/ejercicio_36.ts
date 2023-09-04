/* Enunciado Ejercicio 36:
Crea un programa que encuentre las parejas de números que como resultado
dan un número que pasamos a la función por parametro.
 
Ejemplos:
encontrarParejasConSuma([1, 2, 3, 4], 5);
 
Devuelve: 
[ [ 1, 4 ], [ 2, 3 ] ] */

type TwoNumb = [number, number]
type Couple = TwoNumb[]


function encontrarParejasConSuma( numeros: number[], suma: number ): Couple {
    const cantidad: Map< number, boolean > = new Map() 
    const result: Couple = []

    for ( const numero of numeros ){
        cantidad.set(numero, true)
        const restNumb = suma - numero;
        if ( cantidad.has(restNumb) ) result.push([ restNumb, numero ]);
    }
    
    return result;
}

console.time()
console.log( encontrarParejasConSuma([1, 2, 3, 4], 5) )
console.timeEnd()