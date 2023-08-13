/* Enunciado Ejercicio 20:
Crea una función que ordene un array de objetos en base a las propiagees
que le pase por parametro.
 
  const users = [
    { name: 'Antonio', age: 20 },
    { name: 'Juan', age: 23 },
    { name: 'Pepe', age: 12 },
    { name: 'Raul', age: 28 },
    { name: 'Paco', age: 38 },
    { name: 'Jason', age: 56}
  ];
 
 
Ejemplos:
ordenarObjetos(users, "age"); */
interface User {
    name: string;
    age: number;
}

function ordenarObjetos( users: User[], filter: string ): User[] | string {
    if ( !users || !filter ) throw new Error( `Must send 2 arguments users and filter` )

    switch( filter ){
      case 'age':
        return users.sort( ( a, b ) => a.age - b.age )
      case 'name':
        return users.sort( ( a, b ) => a.name.toLowerCase().localeCompare( b.name.toLowerCase() ) )
      default:
        return `Filter must be age or name, not ${ filter }`;   
    }

}
const users: User[] = [
    { name: 'Antonio', age: 20 },
    { name: 'Juan', age: 23 },
    { name: 'Pepe', age: 12 },
    { name: 'Raul', age: 28 },
    { name: 'Paco', age: 38 },
    { name: 'Jason', age: 56}
];

console.log( ordenarObjetos( users, 'name' ))

