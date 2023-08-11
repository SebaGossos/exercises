/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 9:
Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array
 
Ejemplos:
sumarPares([2, 13, 6, 15]);  // Resultado: 8
 
*/

//! SOLUCION 1
// function sumarPares( numeros: number[]): number {
//     return numeros.reduce((pervValue: number, currentValue: number): number => {
//         if( currentValue % 2 === 0 ) return pervValue + currentValue
//         return pervValue
//     }, 0)
// }


//! SOLUCION 2

function sumarPares( numeros: number[]): number {
    let suma:number = 0;
    numeros.forEach( n => {
        if ( n % 2 === 0 ) suma += n
    })
    return suma;
}


console.log(sumarPares([2, 13, 6, 15]))