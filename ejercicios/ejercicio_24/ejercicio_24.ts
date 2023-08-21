/* Enunciado Ejercicio 24:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]);
 
Devuelve: 
[ 'nombre', 'apellido', 'nombre(1)', 'nombre(2)' ]
 */



//! SOLUCION 1
// function renombrarArchivos( names: string[] ): string[] {
//     const filesName: any = {};
//     const finalFile = [];

//     for ( const name of names ) {
//         if ( filesName[name] >= 1 ) { finalFile.push( name + `(${ filesName[name]++ })`); continue }
//         if ( !filesName[name] ) { filesName[name] = 1 }
//         finalFile.push( name )
//     }

//     return finalFile;
// }


//TODO: ENTENDER COMO FUNCIONA EL MAP COMPARADO CON UN OBJECT POR EJEMPLO:
// Claro, te voy a explicar con algunos ejemplos lo que significan estas dos diferencias entre Map y Object en JavaScript.

// - Un Map es un iterable lo que permite iterar directamente sobre él, mientras que si quieres iterar sobre un Object necesitas obtener primero las claves de alguna forma para después iterar sobre ellas. Esto te ahorra tiempo y código al trabajar con tus datos.

// Esto significa que puedes usar un bucle for...of para recorrer los elementos de un Map sin necesidad de hacer nada más, ya que un Map implementa el protocolo iterable. Por ejemplo:

// // Crear un Map con algunos elementos
// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3]
// ]);

// // Iterar sobre el Map usando for...of
// for (const [key, value] of map) {
//   console.log(key, value); // Imprime a 1, b 2, c 3
// }

// En cambio, si quieres hacer lo mismo con un Object, tienes que usar algún método como Object.keys, Object.values o Object.entries para obtener primero un array con las claves, los valores o los pares clave-valor del Object. Por ejemplo:

// // Crear un Object con algunos elementos
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// // Iterar sobre el Object usando for...of y Object.entries
// for (const [key, value] of Object.entries(obj)) {
//   console.log(key, value); // Imprime a 1, b 2, c 3
// }

// Como puedes ver, el código con el Map es más simple y directo que el código con el Object. Además, el Map mantiene el orden de inserción de los elementos, mientras que el Object no garantiza ningún orden específico.

// - Un Object tiene prototipo, por lo que hay claves por defecto en tu mapa que pueden colisionar con tus claves si no eres cuidadoso. En el estándar ES5 esto se puede evitar usando mapa = Object.create (null), pero esto raramente se hace. Un Map no tiene este problema, ya que solo contiene las claves que tú le asignas.

// Esto significa que un Object hereda algunas propiedades y métodos de su prototipo, que es el objeto base de JavaScript. Esto puede causar problemas si usas alguna de esas propiedades o métodos como clave para tu Object. Por ejemplo:

// // Crear un Object con algunos elementos
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// // Intentar acceder a una propiedad que no existe en el Object
// console.log(obj.d); // Imprime undefined

// // Intentar acceder a una propiedad que existe en el prototipo del Object
// console.log(obj.toString); // Imprime una función

// // Intentar usar una propiedad del prototipo como clave para el Object
// obj.toString = "Hola";
// console.log(obj.toString); // Imprime "Hola"

// Como puedes ver, al intentar usar la propiedad toString como clave para el Object, se sobrescribe la función original que hereda del prototipo. Esto puede causar errores inesperados o comportamientos indeseados en tu código. Además, si intentas iterar sobre las claves del Object usando algún método como Object.keys o for...in, también obtendrás las propiedades del prototipo. Por ejemplo:

// // Iterar sobre las claves del Object usando for...in
// for (const key in obj) {
//   console.log(key); // Imprime a, b, c y toString
// }

// // Iterar sobre las claves del Object usando Object.keys
// console.log(Object.keys(obj)); // Imprime [ 'a', 'b', 'c', 'toString' ]

// Para evitar este problema, puedes crear un Object sin prototipo usando el método Object.create(null). Esto crea un objeto vacío que no hereda nada de nadie. Por ejemplo:

// // Crear un Object sin prototipo
// const obj = Object.create(null);

// // Intentar acceder a una propiedad que no existe en el Object
// console.log(obj.d); // Imprime undefined

// // Intentar acceder a una propiedad que existe en el prototipo del Object
// console.log(obj.toString); // Imprime undefined

// // Intentar usar una propiedad del prototipo como clave para el Object
// obj.toString = "Hola";
// console.log(obj.toString); // Imprime "Hola"

// // Iterar sobre las claves del Object usando for...in
// for (const key in obj) {
//   console.log(key); // Imprime solo toString
// }

// // Iterar sobre las claves del Object usando Object.keys
// console.log(Object.keys(obj)); // Imprime solo [ 'toString' ]

// Sin embargo, esta forma de crear objetos es poco común y puede tener algunas desventajas, como la falta de métodos útiles que provienen del prototipo. Por eso, es mejor usar un Map si quieres evitar el problema de las claves por defecto, ya que un Map no tiene prototipo y solo contiene las claves que tú le asignas. Por ejemplo:

// // Crear un Map con algunos elementos
// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3]
// ]);

// // Intentar acceder a una clave que no existe en el Map
// console.log(map.get("d")); // Imprime undefined

// // Intentar acceder a una clave que existe en el prototipo del Object
// console.log(map.get("toString")); // Imprime undefined

// // Intentar usar una clave del prototipo como clave para el Map
// map.set("toString", "Hola");
// console.log(map.get("toString")); // Imprime "Hola"

// // Iterar sobre las claves del Map usando for...of
// for (const [key, value] of map) {
//   console.log(key); // Imprime a, b, c y toString
// }

// // Iterar sobre las claves del Map usando Map.keys
// console.log([...map.keys()]); // Imprime [ 'a', 'b', 'c', 'toString' ]

// Como puedes ver, el código con el Map es más seguro y consistente que el código con el Object. Además, el Map tiene métodos propios para acceder, modificar y eliminar los elementos, como get, set y delete.

// Espero que estos ejemplos te hayan ayudado a entender mejor las diferencias entre Map y Object en JavaScript. Si tienes alguna otra duda o pregunta, no dudes en preguntarme. Estoy aquí para ayudarte. 😊

// el map te puede crear tambien un array en vez de un object?

// No, el Map no te puede crear un array en vez de un object. El Map es una estructura de datos diferente al array y al object, que tiene sus propias características y métodos. Un array es una colección ordenada de elementos de cualquier tipo, que se pueden acceder por su índice numérico. Un object es una colección no ordenada de propiedades, que se pueden acceder por su nombre o clave. Un Map es una colección ordenada de pares clave-valor, que se pueden acceder por su clave de cualquier tipo.

// Si quieres convertir un Map en un array, puedes usar el operador de propagación (...) o el método Array.from para crear un nuevo array con los elementos del Map. Por ejemplo:

// // Crear un Map con algunos elementos
// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3]
// ]);

// // Convertir el Map en un array usando el operador de propagación
// const array1 = [...map];
// console.log(array1); // Imprime [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// // Convertir el Map en un array usando el método Array.from
// const array2 = Array.from(map);
// console.log(array2); // Imprime [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// Como puedes ver, al convertir un Map en un array, se obtiene un array de arrays, donde cada subarray contiene la clave y el valor de cada elemento del Map. Si quieres obtener solo las claves o los valores del Map, puedes usar los métodos Map.keys o Map.values respectivamente. Por ejemplo:

// // Obtener solo las claves del Map
// const keys = [...map.keys()];
// console.log(keys); // Imprime [ 'a', 'b', 'c' ]

// // Obtener solo los valores del Map
// const values = [...map.values()];
// console.log(values); // Imprime [ 1, 2, 3 ]

// Espero que esta explicación te haya aclarado la diferencia entre Map y array en JavaScript. Si tienes alguna otra duda o pregunta, no dudes en preguntarme. Estoy aquí para ayudarte. 😊

//! SOLUCION 2
function renombrarArchivos( names: string[] ): string[] {
    const filesName = new Map<string, number>()
    const finalFile: string[] = [];
    
    for ( const name of names ) {
        if ( filesName.has( name ) ){
            finalFile.push( name + `(${filesName.get( name )})`);
            filesName.set( name, filesName.get( name )! + 1 );
            continue;
        }
        filesName.set( name, 1 )
        finalFile.push( name )
    }
    
    return finalFile;
}

// console.log(renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]))
