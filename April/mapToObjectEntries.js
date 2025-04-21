// Creating a Map instance with key-value pairs
const mapaPrototipo = new Map();
mapaPrototipo.set('plazosPago', {
    condicion: 'decenal',
    id: 1,
});
mapaPrototipo.set('color', {
    condicion: 'azul',
    id: 2,
});

console.log('Original Map:', mapaPrototipo);
console.log('Map size:', mapaPrototipo.size);
console.log('Map keys:', [...mapaPrototipo.keys()]);

/**
 * Converts a Map to a plain JavaScript object
 * @param {Map} mapa - The Map to convert
 * @returns {Object} - The resulting object
 */
function convertMapToObject(mapa) {
    console.log('Converting Map to Object...');
    // Object.fromEntries() creates an object from the Map entries
    const planObject = Object.fromEntries(mapa);
    console.log('Conversion complete:', planObject);
    return planObject;
}

/**
 * Converts a plain JavaScript object to a Map
 * @param {Object} object - The object to convert
 * @returns {Map} - The resulting Map
 */
function convertObjectToMap(object) {
    console.log('Converting Object to Map...');
    // Create a new Map from the object entries
    const mapa = new Map(Object.entries(object));
    console.log('Conversion complete. Map size:', mapa.size);
    return mapa;
}

// Convert Map to Object
const objectResult = convertMapToObject(mapaPrototipo);
console.log('Final Object:', objectResult);
console.log('Object keys:', Object.keys(objectResult));

// Convert Object back to Map
const mapResult = convertObjectToMap(objectResult);
console.log('Final Map:', mapResult);
console.log('Are original and final Maps equal?', 
    [...mapaPrototipo.entries()].toString() === [...mapResult.entries()].toString());