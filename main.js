"use strict";
/* Enunciado Ejercicio 32:
Dado un texto, crea una función que sea capaz de generar
un nuevo texto que incluya solo las palabras de 4 caracteres o más.
 
Ejemplos:
fraseFiltrada("Hola soy Victor Robles, hoy hace frio");
 
Devuelve: Hola Victor Robles, hace frio */
function fraseFiltrada(frase) {
    return frase.split(' ')
        .filter(word => {
        if (word.length >= 4)
            return word;
    })
        .join(' ');
}
console.log(fraseFiltrada("Hola soy Victor Robles, hoy hace frio"));
