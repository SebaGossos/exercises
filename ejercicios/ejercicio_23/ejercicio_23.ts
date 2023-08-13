/* Enunciado Ejercicio 23:
Crea una función que a la cual le pase unos números en un array y me decodifique
el mensaje teniendo en cuenta que cada letra tiene un numero asignado.
 
Las letras del abecedario de la A a la Z tienen un número
por ejemplo la A es el numero 1 y la Z es el numero 26
 
Ejemplos:
decodificarMensaje([8, 15, 12, 1]);
 
Devuelve: 
HOLA */



//!SOLUCION 1
// function decodificarMensaje( message: number[] ): string {
//     if ( !message ) throw new Error( 'Must send an argument message')

//     let finishMessage = '';

//     for ( const number of message ) finishMessage += String.fromCharCode( number + 64 )

//     return finishMessage;
// }

//!SOLUCION 2
function decodificarMensaje( message: number[] ): string {
    if ( !message ) throw new Error( 'Must send an argument message')

    const numberMessage = message.map( num => {
        return num + 64;
    })

    return String.fromCharCode( ...numberMessage )
}


console.log(decodificarMensaje( [8, 15, 12, 1] ))