/* Enunciado Ejercicio 27:
Crea una función a la cual le pasemos una frase y una palabra,
y busque si la palabra existe en la frase. Indistinto de mayusculas y minusculas.
 
Ejemplos:
buscarPalabra('Hola como estas', 'Hola')  // Devuelve: true */

function buscarPalabra(frase: string, wordToFind: string ): boolean{
    frase = frase.toLowerCase()
    wordToFind = wordToFind.toLowerCase()

    return frase.includes( wordToFind )
}

console.log( buscarPalabra('Hola como estas', 'Hola') )