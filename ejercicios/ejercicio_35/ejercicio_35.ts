/* Enunciado Ejercicio 35:
Crea un programa que dados dos arrays de lenguajes frontend y backend
y dado un parametro que sera un array con los nombres de dos lenguajes
nos diga si son compatibles o no.
 
Solo pueden ser compatibles lenguajes front con uno de back
 
Ejemplos:
isASupportedLenguage(["HTML", "PHP"])   // true
isASupportedLenguage(["PHP", "PYTHON"]) // false */
type Lenguage = string

type Lenguages = [string, string] | Lenguage; 

enum LenguajeFrontend {
    HTML = 'HTML',
    CSS = 'CSS',
    JAVASCRIPT = 'JAVASCRIPT'
}

enum LenguajeBackend {
    PHP = 'PHP',
    PYTHON = 'PYTHON',
    RUBY = 'RUBY',
    NODE = 'NODE',
    CSHARP = 'CSHARP',
    RUST = 'RUST',
    GO = 'GO',
    JAVA = 'JAVA'
}

function isASupportedLenguage( lenguages: Lenguages, lenguageTwo?: string ): boolean{
    
    if( Array.isArray(lenguages) && ( lenguageTwo === '' || !!lenguageTwo ) ) 
        throw `Din´t send an array of lenguages and a second argument, it's only array or two arguments in string`

    if ( Array.isArray( lenguages ) ) {
        console.log(( lenguages[1] in LenguajeBackend ))
        if (
            ( lenguages[0] in LenguajeBackend && lenguages[1] in LenguajeFrontend ) ||
            ( lenguages[0] in LenguajeFrontend && lenguages[1] in LenguajeBackend )
        ) return true
    }
    
    return false
}

console.log(isASupportedLenguage([LenguajeFrontend.HTML, LenguajeBackend.CSHARP]))