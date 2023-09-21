"use strict";
/* Enunciado Ejercicio 42:
Dado un objeto de superheroes, crear una función que sea capaz
de ordenarlos por su nombre real o por su nombre de superheroe.
 
Superheroes:
 
let informacionSuperheroes = {
    "Superman": {
      "nombreReal": "Clark Kent",
      "afiliacion": "DC Comics",
      "poderes": ["vuelo", "super fuerza", "super velocidad", "rayos x"]
    },
    "Spider-Man": {
      "nombreReal": "Peter Parker",
      "afiliacion": "Marvel Comics",
      "poderes": ["telarañas", "agilidad", "sensores arácnidos"]
    },
    "Batman": {
      "nombreReal": "Bruce Wayne",
      "afiliacion": "DC Comics",
      "poderes": ["inteligencia", "habilidades físicas sobresalientes", "ricos recursos"]
    },
    "Iron Man": {
      "nombreReal": "Tony Stark",
      "afiliacion": "Marvel Comics",
      "poderes": ["armadura de hierro", "inteligencia", "ricos recursos"]
    },
    "Wonder Woman": {
      "nombreReal": "Diana Prince",
      "afiliacion": "DC Comics",
      "poderes": ["super fuerza", "vuelo", "resistencia sobrenatural"]
    },
    "Thor": {
      "nombreReal": "Thor Odinson",
      "afiliacion": "Marvel Comics",
      "poderes": ["martillo mágico", "vuelo", "trovador"]
    },
    "The Flash": {
      "nombreReal": "Barry Allen",
      "afiliacion": "DC Comics",
      "poderes": ["super velocidad", "manipulación del tiempo"]
    },
    "Captain America": {
      "nombreReal": "Steve Rogers",
      "afiliacion": "Marvel Comics",
      "poderes": ["super fuerza", "agilidad", "resistencia sobrenatural", "escudo indestructible"]
    },
    "Green Lantern": {
      "nombreReal": "Hal Jordan",
      "afiliacion": "DC Comics",
      "poderes": ["anillo mágico", "manipulación de la energía"]
    },
    "Hulk": {
      "nombreReal": "Bruce Banner",
      "afiliacion": "Marvel Comics",
      "poderes": ["super fuerza", "resistencia sobrenatural", "transformación en Hulk"]
    }
  }
 
 
Ejemplos:
ordenarSuperheroes("nombre")
 
Devuelve:
[
  {
    nombre: 'Batman',
    nombreReal: 'Bruce Wayne',
    poderes: [
      'inteligencia',
      'habilidades físicas sobresalientes',
      'ricos recursos'
    ]
  },
  ...
] */
var Errors;
(function (Errors) {
    Errors["ERROR_FILTER"] = "DIND\u00B4T FOUND THE FILTER THAT YOU SEND";
})(Errors || (Errors = {}));
let informacionSuperheroes = {
    "Superman": {
        "nombreReal": "Clark Kent",
        "afiliacion": "DC Comics",
        "poderes": ["vuelo", "super fuerza", "super velocidad", "rayos x"]
    },
    "Spider-Man": {
        "nombreReal": "Peter Parker",
        "afiliacion": "Marvel Comics",
        "poderes": ["telarañas", "agilidad", "sensores arácnidos"]
    },
    "Batman": {
        "nombreReal": "Bruce Wayne",
        "afiliacion": "DC Comics",
        "poderes": ["inteligencia", "habilidades físicas sobresalientes", "ricos recursos"]
    },
    "Iron Man": {
        "nombreReal": "Tony Stark",
        "afiliacion": "Marvel Comics",
        "poderes": ["armadura de hierro", "inteligencia", "ricos recursos"]
    },
    "Wonder Woman": {
        "nombreReal": "Diana Prince",
        "afiliacion": "DC Comics",
        "poderes": ["super fuerza", "vuelo", "resistencia sobrenatural"]
    },
    "Thor": {
        "nombreReal": "Thor Odinson",
        "afiliacion": "Marvel Comics",
        "poderes": ["martillo mágico", "vuelo", "trovador"]
    },
    "The Flash": {
        "nombreReal": "Barry Allen",
        "afiliacion": "DC Comics",
        "poderes": ["super velocidad", "manipulación del tiempo"]
    },
    "Captain America": {
        "nombreReal": "Steve Rogers",
        "afiliacion": "Marvel Comics",
        "poderes": ["super fuerza", "agilidad", "resistencia sobrenatural", "escudo indestructible"]
    },
    "Green Lantern": {
        "nombreReal": "Hal Jordan",
        "afiliacion": "DC Comics",
        "poderes": ["anillo mágico", "manipulación de la energía"]
    },
    "Hulk": {
        "nombreReal": "Bruce Banner",
        "afiliacion": "Marvel Comics",
        "poderes": ["super fuerza", "resistencia sobrenatural", "transformación en Hulk"]
    }
};
function orderNamesInArr(superArr) {
    const superHeroesOrder = {};
    for (const hero of superArr) {
        superHeroesOrder[hero] = informacionSuperheroes[hero];
    }
    return superHeroesOrder;
}
function orderByFilter(superHeroes, orderBy) {
    let sortSuperHeroes;
    switch (orderBy) {
        case 'nombre':
            sortSuperHeroes = superHeroes.sort((a, b) => a.localeCompare(b));
            return orderNamesInArr(sortSuperHeroes);
        case 'nombreReal':
            sortSuperHeroes = superHeroes.sort((a, b) => {
                a = informacionSuperheroes[a].nombreReal;
                b = informacionSuperheroes[b].nombreReal;
                return a.localeCompare(b);
            });
            return orderNamesInArr(sortSuperHeroes);
    }
}
const orderSuperHeroes = (orderBy) => {
    if (orderBy === 'nombre') {
        const superHeroes = Object.keys(informacionSuperheroes);
        return orderByFilter(superHeroes, orderBy);
    }
    if (orderBy === 'nombreReal') {
        const superHeroes = Object.keys(informacionSuperheroes);
        return orderByFilter(superHeroes, orderBy);
    }
    return Errors.ERROR_FILTER;
};
console.log(orderSuperHeroes("nombre"));
// console.log(orderSuperHeroes( "nombreReal" ))
// console.log(orderSuperHeroes( "nombreReal7" )) //!ERROR
