/* Enunciado Ejercicio 35:
Crea un programa que dados dos arrays de lenguajes frontend y backend
y dado un parametro que sera un array con los nombres de dos lenguajes
nos diga si son compatibles o no.
 
Solo pueden ser compatibles lenguajes front con uno de back
 
Ejemplos:
sonCompatibles(["HTML", "PHP"])   // true
sonCompatibles(["PHP", "PYTHON"]) // false */

type Lenguages = [string, string] | string; 

function sonCompatibles( lenguages: Lenguages, lenguageTwo?: string ): boolean{
    
    if( Array.isArray(lenguages) && ( lenguageTwo === '' || !!lenguageTwo ) ) 
        throw `Din´t send an array of lenguages and a second argument, it's only array or two arguments in string`

    const fronted = ['HTML', 'HTML5', 'XHTML', 'CSS', 'CSS3', 'JAVASCRIPT'];
    const backend = ['PHP', 'PYTHON', 'RUBY', 'NODE', 'C#', 'RUST', 'GO', 'GOLANG', 'JAVA'];

    if ( Array.isArray( lenguages ) ) {
        if ((fronted.includes( lenguages[0].toUpperCase() ) && backend.includes( lenguages[1].toUpperCase() ))
           ||
           (fronted.includes( lenguages[1].toUpperCase() ) && backend.includes( lenguages[0].toUpperCase() ))) 
           return true
    }
    
    return false
}

console.log(sonCompatibles(["HTML", "PHP"]))