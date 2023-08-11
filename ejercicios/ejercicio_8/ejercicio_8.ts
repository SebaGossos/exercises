

/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 8:
Crea un algoritmo al cual le pase un número entero
y me lo convierta a número romano
 
Ejemplos:
enteroARomano(100)); // Resultado:  C
enteroARomano(345)); // Resultado: CCCXLV
 
*/

function enteroARomano( numero: number ): string {

    let resultado = '';

    const caracteresRomanos: string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

    const valoresDecimales: number[] = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]

    for( let i: number = 0; i < valoresDecimales.length; i++){

        while( numero >= valoresDecimales[i]){
            resultado += caracteresRomanos[i]

            numero -= valoresDecimales[i]
            console.log( valoresDecimales[i], '-', numero )
        }
    }
    
    return resultado;
}
console.log( enteroARomano(321) )