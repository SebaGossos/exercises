/* Enunciado Ejercicio 34:
Crea una función a la cual le pase un array y me devuelva 
un objeto con los elementos agrupados
 
Ejemplos:
agrupar([7.2, 5.3, 7.4], Math.floor)  
Devuelve: { 7: [7.2, 7.4], 5: [5.3] }
 
agrupar(['uno', 'dos', 'tres', 'cuatro'], 'length') 
Devuelve: { 3: ['uno', 'dos', 'tres'], 6: ['cuatro'] }
 
agrupar([{nombre: "victor", edad: 33}, {nombre: "paco", edad: 44}], 'edad') 
Devuelve: { 33: [{edad: 33}], 44: [{edad: 44}] }
  */

type Filter<T> = {
    [key:number]: T[]
}

type FilterKey = Math['floor'] | 'length' | 'edad';

//! SOLUTION LESS EFICIENT
// function agrupar( elements: T[], filter: FilterKey ): Filter{

//     const wrappSend: Filter = {}
    

//     switch( filter ){
//         case Math.floor:
//             elements.forEach( e => {
//                 const numb = Math.floor( e )
//                 if ( !wrappSend[ numb ] ){
//                     wrappSend[numb] = [];
//                 }
//                 wrappSend[numb].push( e ) 
//             })

//         case 'length':
//             elements.forEach( e => {
//                 const quantityChain = e.length

//                 if ( !wrappSend[quantityChain] ){
//                     wrappSend[quantityChain] = [];
//                 }

//                 wrappSend[quantityChain].push( e )
                
//             })

//         case 'edad':
//             elements.forEach( e => {
//                 const age = e.edad;
//                 if ( !wrappSend[age] ){
//                     wrappSend[age] = []
//                 }

//                 wrappSend[age].push(e)
//             })
//     }
    
//     return wrappSend
// }

//!SOLUTION WITH GENERIC FUNCTION
function agrupar<T extends { length?: number, edad?: number }>( elements: T[], filter: FilterKey ): Filter<T>{

    function groupBy( func: (item:T) => number ): Filter<T>{

        return elements.reduce((acc, e) => {
            const key = func( e ) 
            acc[key] = acc[key] || []
            acc[key].push(e)
            return acc
        }, {} as Filter<T> )
        
    }
    
    if (filter === Math.floor) {
        return groupBy(Math.floor as unknown as (item: T) => number);
    } else if (filter === 'length') {
        return groupBy(e => e.length ?? 0);
    } else if (filter === 'edad') {
        return groupBy(e => e.edad ?? 0);
    }
    
        
    return {} as Filter<T>;
}


console.log( agrupar( [7.2, 5.3, 7.4], Math.floor ))
// console.log( agrupar( ['uno', 'dos', 'tres', 'cuatro'], 'length' ))
// console.log(  agrupar([{nombre: "victor", edad: 33}, {nombre: "ella", edad: 33}, {nombre: "paco", edad: 44}], 'edad' ))
