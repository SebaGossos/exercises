/* Enunciado Ejercicio 40:
Crea una función que convierta un número romano a decimal.
 
Ejemplos:
romanoAEntero("XVIII")   // 18
romanoAEntero("CXX")     // 120 */

type NumerosRomanos = {
    [key:string]: number
}
const romanoAEntero = ( romNum: string ): number => {
    const numerosRomanos: NumerosRomanos = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    const dividir = romNum.toUpperCase().split('');
    let result = 0;
    
    for ( let numRom of dividir ) 
        result += numerosRomanos[numRom]
    
    return result;
}

console.log( romanoAEntero("XVIII") )
console.log( romanoAEntero("CXX") )
