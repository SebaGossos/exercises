/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 13:
Crea una funcion que calcule el area de un cuadrado, un rectangulo o un triangulo
 
Ejemplos:
calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }); 
 
Devuelve: 27
 
*/
interface Poligono {
    tipo: string;
    base: number;
    altura?: number;
}

function calcularAreaPoligono( {tipo, base, altura}: Poligono ): number | string {

    tipo = tipo.toLowerCase()

    switch( tipo ){
        case 'cuadrado':
            return base * base;
        
        case 'circulo':
            if( !altura ) return 'Is necesary the property altura'
            return Math.PI * Math.pow( base, altura! );

        case 'triangulo':
            if( !altura ) return 'Is necesary the property altura'
            return ( base * altura! ) / 2;

        case 'rectangulo':
            if( !altura ) return 'Is necesary the property altura'
            return base * altura!;
    }

    return `Din´t found type of Poligon ${ tipo }`
    
}



console.log( calcularAreaPoligono({tipo: 'triangulo', base: 6, altura: 9}) )
console.log( calcularAreaPoligono({tipo: 'cuadrado', base: 6}) )
console.log( calcularAreaPoligono({tipo: 'rectangulo', base: 6, altura: 9}) )