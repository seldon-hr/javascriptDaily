let array = [10, 20, 30]

var forEach = function (list) {
    list.forEach(number => {
        console.debug(number*2)
    });
}

var forOf = function(list){
    for (let number of list) {
        console.debug(number*2)
    }
}

/* forEach(array);
forOf(array); */

/* Usando for... of con strings */
for (const letter of 'object') {
    console.debug(letter);
}


/* Iteración de Mapas */
let mapa = new Map();
mapa.set(0, 'Dan');
mapa.set(2, 'Serch');
mapa.set(1, 'Kia');

//podemos acceder a of mapa.keys(), mapa.values() y mapa.entries(), este es lo mismo que mapa

for (const element of mapa.keys()) {
    console.debug(element);
}