
const mapaPrototipo = new Map();
mapaPrototipo.set('plazosPago', {
    condicion: 'decenal',
    id: 1,
});
mapaPrototipo.set('color', {
    condicion: 'azul',
    id:2,
});



function convertMapToObject(mapa) {
    /* console.log(mapa); */
    const planObject = Object.fromEntries(mapa);
    return planObject;
}


function convertObjectToMap(object) {
    const mapa = new Map(Object.entries(object));
    return mapa;
}



console.log(convertMapToObject(mapaPrototipo));
console.log(convertObjectToMap(convertMapToObject(mapaPrototipo)));