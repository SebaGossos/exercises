/* Enunciado Ejercicio 26:
Optimizar el gasto en mi gasolinera favorita.
 
Tiene dos opciones:
 
- Gasolina individual: Cuesta 10 euros por cada llenado.
- Tarjeta de socio: Cuesta 90 euros anuales pero cada vez que llenas 
te cuesta 8.2 euros el tanque pagas sólo el 78% del precio del llenado.
 
Cada vez que llenas el tanque, se paga el 78% del precio 
del llenado que pagaste la última vez hasta llegar a un descuento maximo
del 50%. Acumula el descuento (0.78 ** 3).
 
Hacer una función que, al pasarle las veces que voy a llenar el tanque, 
me diga si vale la pena comprar la tarjeta de socio o no.
 
Ejemplos:
deboSerSocio(15);
 
Devuelve: 
Como usuario casual te sale a: 150        
Como socio te sale a: 154.68487999999994 
No te sale a cuenta ser socio ser socio   */

function deboSerSocio( times: number ): string {

    const fullTanqPrice = times * 10;

    const partnerCartYear = 90;
    const partnerTanqPrice = 8.2;
    const partnerDiscount = 0.78;
    const partnerLimitDiscount = 0.5;

    let finalPartnerPrice = partnerCartYear;
    let currentDiscount = partnerTanqPrice;

    for (let i = 1; i < times; i++) {
        currentDiscount *= partnerDiscount; // Actualizas el descuento
        if (currentDiscount < partnerLimitDiscount * partnerTanqPrice) {
          // Verificas el límite
          currentDiscount = partnerLimitDiscount * partnerTanqPrice;
        }
        finalPartnerPrice += currentDiscount; // Sumas el precio con descuento
      }

    const message = `Como usuario casual te sale: ${ fullTanqPrice }` + '\n' +
                    `Como socio te sale: ${ finalPartnerPrice }` + '\n' 
                    

    return message 
}

console.log( deboSerSocio( 15 ) )
// console.log( 2 **  0.5)