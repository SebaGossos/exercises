/* Enunciado Ejercicio 18:
Dado un array de usuarios, mostrar sólo los que tengan más de 20 años
y en su nombre tengan la letra "o" y "n"
 
  const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];
 
Ejemplos:
filtrarUsuarios(usuarios);
 
Devuelve: 
[
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Jason', edad: 56}
]
*/



interface User {
    nombre: string;
    edad: number;
}
//! SOLUCION 1
// function filtrarUsuarios( usuarios: User[] ): object[] {

//     const filterUser: any = []
    
//     usuarios.map( user => {
//         const name: string = user.nombre.toLowerCase()
//         const isOandN = ( name.indexOf( 'o' ) !== - 1 ) && ( name.indexOf( 'n' ) !== - 1 ) ? true : false;
//         if ( isOandN && user.edad > 20 )
//             filterUser.push( user )
//         return user;
//     });
    
//     return filterUser;
// }

//! SOLUCION 2 MAS LIMPIA :)
function filtrarUsuarios( usuarios: User[] ): object[] {

    const filterUser: User[] = usuarios.filter( ({ nombre, edad }) => {
        const name: string = nombre.toLowerCase()
        const isOandN = ( name.indexOf( 'o' ) !== - 1 ) && ( name.indexOf( 'n' ) !== - 1 ) ? true : false;

        return isOandN && edad > 20;
    });
    
    return filterUser;
}


const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
];

console.log(filtrarUsuarios( usuarios ))