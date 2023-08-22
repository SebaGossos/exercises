/* Enunciado Ejercicio 28:
Crea una función que me diga si un número es armstrong o no.
 
Un número es armstrong si la suma de los cubos de sus dígitos es igual al número. 
Por ejemplo, el número 371 es armstrong porque 3^3 + 7^3 + 1^3 = 371.
 
Si la cifra es de 4 digitos, se eleva a 4, y si es de 5 a 5.
 
Ejemplos:
esArmstrong(371)  // Devuelve: true */

function esArmstrong( armStrong: number ): boolean {

    const divisionArmStrong = armStrong.toString().split('');

    let addFinal: number = 0;
    for ( let i of divisionArmStrong ){
        addFinal += Math.pow( +i, divisionArmStrong.length )
    }
    
    return addFinal === armStrong;
}
 
console.log( esArmstrong(371) )