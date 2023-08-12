/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 15:
Dada un array de palabras, crear una función que lo devuelva ordenado
por la longitud de sus palabras de menor a mayor
 
Ejemplos:
ordenarPorLongitud([
  "Hola",
  "soy",
  "Víctor Robles",
  "como",
  "estas",
  "hoy",
  "amigo",
  "yo",
  "voy",
  "a",
  "estudiar",
  "ahora"
]);
 
*/

function ordenarPorLongitudYAlfabetico ( chain: string[]): string[] {
    if ( !chain ) throw new Error( `must send chain as a argument, actually name is ${ chain }` )
    chain.sort( (a: string, b: string): number => {
        console.log( 'a:'+ a, ' |  ' + 'b:'+ b )
        return b.length - a.length || a.localeCompare(b);
    })
    
    console.log( chain )
    return []
}


ordenarPorLongitudYAlfabetico([
    "Hola",
    "soy",
    "Víctor Robles",
    "como",
    "estas",
    "hoy",
    "amigo",
    "yo",
    "voy",
    "a",
    "estudiar",
    "ahora"
])




