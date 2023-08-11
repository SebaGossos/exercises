"use strict";
function calcularAreaPoligono({ tipo, base, altura }) {
    tipo = tipo.toLowerCase();
    switch (tipo) {
        case 'cuadrado':
            return base * base;
        case 'circulo':
            if (!altura)
                return 'Is necesary the property altura';
            return Math.PI * Math.pow(base, altura);
        case 'triangulo':
            if (!altura)
                return 'Is necesary the property altura';
            return (base * altura) / 2;
        case 'rectangulo':
            if (!altura)
                return 'Is necesary the property altura';
            return base * altura;
    }
    return `Din´t found type of Poligon ${tipo}`;
}
console.log(calcularAreaPoligono({ tipo: 'triangulo', base: 6 }));
