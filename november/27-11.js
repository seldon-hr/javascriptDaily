// Extensión del prototipo de Array para obtener el último elemento de un arreglo
Array.prototype.last = function() {
    // If the array is empty, return -1
    if (this.length === 0) {
        return -1;
    }
    // Return the last element of the array
    return this[this.length - 1];
};

/* 
    En JavaScript, todas las matrices (arrays) son instancias del objeto Array, 
    y Array.prototype es un objeto que contiene todos los métodos que están disponibles para los arrays. 
    Cuando escribimos Array.prototype.last, estamos agregando un nuevo método llamado last al prototipo de Array.
    
    Vamos a desglosarlo:

        Array - Es el constructor base para todos los arrays en JavaScript.
        prototype - Es el mecanismo por el cual JavaScript implementa la herencia. Todos los arrays heredarán los métodos definidos en Array.prototype.
        last - Es el nombre del nuevo método que estamos creando.
        function() { ... } - Es la definición del método como una función.
*/