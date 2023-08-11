/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los proximos 30 años
 
Ejemplo:
bisiestos(2023);
 
Salida:
2024
2028
2032
2036
2040
2044
2048
2052
 
*/

//! SOLUCION 1
// function diasTotales ( anio ) {
//     const fechaInicio = new Date( anio, 0, 1 )
//     const fechaFin = new Date( anio + 1, 0, 1)

//     const diferncia = fechaFin - fechaInicio;

//     const dia = 1000 * 60 * 60 * 24;

//     return diferncia / dia;
// }

// export function anoBisiesto( anio ){
//     for (let index = anio; index <= anio + 30 ; index++) {
//         const isBisiesto = diasTotales( index )
//         if( isBisiesto === 366) console.log( index )
//     }
// }

//! SOLUCION 2

export function anoBisiesto( anio: number ): void {
    const limite: number = 30;

    for( let i:number =0; i < limite; i++){
        // Comprueba si el mes 29 del año que le paso existe devuelve 1 que es el mes si no develve un 2 que saltaria al proximo mes(marzo).
        if ( new Date( anio, 1, 29 ).getMonth() === 1 ) console.log( anio )
        anio++
    }
}
