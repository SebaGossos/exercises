/* Enunciado Ejercicio 17:
Dada un array de frases, contar el número de palabras que tiene
 
Ejemplos:
contarPalabras([
                "Hola, soy Víctor Robles WEB",
                "Me gusta programar",
                "Y soy desarrollador web"
            ]);
 
Devuelve: 12 */


function contarPalabras( palabras: string[] ): number {

    let quantityWords = 0;

    palabras.forEach( sentence => {
        quantityWords += sentence.split( ' ' ).length 
    })
    
    return quantityWords;
}


console.log(contarPalabras([
    "Hola, soy Víctor Robles WEB",
    "Me gusta programar",
    "Y soy desarrollador web"
]));
