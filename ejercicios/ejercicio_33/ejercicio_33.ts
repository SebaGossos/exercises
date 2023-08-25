/* Enunciado Ejercicio 33:
Crea una función a la cual le pase un string y lo convierta 
a un listado en un objeto que cuente el número de elementos.
 
Las palabras no deben incluir guiones ni guiones bajos.
 
Ejemplos:
contarElementos("pc -ordenador _computadora consola- ps5 theLastOfUs ordenador"); 
 
Devuelve: 
{ pc: 1, ordenador: 2, computadora: 1, consola: 1, ps5: 1, theLastOfUs:  */

type Elements = {
    [key: string]: number
}

function contarElementos( elements: string ): Elements{

    const countElements: Elements = {}
    
    elements.replace(/[-_,!¡?¿.]/g, '')
            .split(' ')
            .forEach(el => {
                countElements[el] ? ++countElements[el] : countElements[el] = 1;
            })
    return countElements
} 


console.log( contarElementos( 'pc -ordenador _computadora consola- ps5 theLastOfUs ordenador' ))