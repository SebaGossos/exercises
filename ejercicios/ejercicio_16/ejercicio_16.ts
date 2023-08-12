/* 
Enunciado Ejercicio 16:
Crea una función que meta en una caja de asteriscos la frase 
que le pasemos por parametro
 
Ejemplos:
mostrarTextoCaja('Hola soy Víctor Robles WEB');
 
**********
* Hola   *
* soy    *
* Víctor *
* Robles *
* WEB    *
**********
 
*/

function mostrarTextoCaja( text: string ): void {

    const words = text.split(' ')
    let maxWord = 0;

    words.forEach( word => {
        maxWord = Math.max( maxWord, word.length );
    })

    const defaultSlots = 4;
    const totalAsterisks = maxWord + defaultSlots

    console.log( '*'.repeat( totalAsterisks ) )

    words.forEach( word => {
        let maxSlots = maxWord - word.length;
        console.log( `* ${ word }${' '.repeat( maxSlots )} *`)
    })
    
    console.log( '*'.repeat( totalAsterisks ) )
    
}

mostrarTextoCaja('Hola soy Víctor Robles WEB');
