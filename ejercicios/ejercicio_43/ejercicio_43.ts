/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 43:
Dada una colección de letras:
[
   ['A','B','C','D'],
   ['Z','V','K','S'],
   ['F','G','O','E']
]
 
Crea una función que me diga si la palabra que le paso como parametro 
se puede formar con las letras de la colección
 
Ejemplos:
puedeFormarPalabra('PERRO', coleccion)  // false
puedeFormarPalabra('CASO', coleccion)   // true
 
*/




function puedeFormarPalabra( palabra: string, collection: string[][] ): boolean {
   
   const mapaLetras:{[key: string]: boolean} = {};
   palabra = palabra.toLowerCase()

   collection.forEach( fila => {
      fila.forEach( letra => {
         letra = letra.toLowerCase()

         if( !mapaLetras[letra] ) {
            mapaLetras[letra] = false;
         }
         mapaLetras[letra] = true;
      })
   })
   
   for ( let i = 0; i < palabra.length; i++ ) {
      const letra = palabra[i];
      if( !mapaLetras[letra] ) {
         return false;
      }
      mapaLetras[ letra ]
   }
   
   return true
}


const collection: string[][] = [
   ['A','B','C','D'],
   ['Z','V','K','S'],
   ['F','G','O','E']
]


console.log( puedeFormarPalabra('CASSO', collection) )
console.log( puedeFormarPalabra('PERRO', collection) )