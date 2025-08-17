
/* Dentro de varios programas de bajo nivel como C y Java, ocurré que tenemos arrays estáticos y dinámicos, mientras que en JS, solo tenemos uno solo dinámicos.
la cuestión conforme a Estructuras de datos, en C es vector y en Java ArrayList. Pero vamos a simular las operaciones que hace un array dinámico en JS.
Donde en un estático, tenemos un espacio de memoria que ya no puede cambiar y si queremos aumentar, se hace manualmente, mientras que el dinámico lo hace automáticamente.
Por esto, contamos con estas propiedades.
capacity //El espacio en memoria asignado en un inicio, // siempre debe ser capacity > 0
length el tamaño real elementos en el array.
data: donde se encuentra la info del dinámico, pero definido del tamaño de capacity, un estático.
*/

class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.length = 0;
        this.data = new Array(this.capacity);
    }

    /* Después tendríamos sus propios métodos:  */
    //obtener el valor según el índice
    /**
     * @param {number} index
     * @returns {number}
     */
    get(index) {
        if(index >= this.length || index < 0){
            console.debug('Error Array')
        }
        return this.data[index];
    }

    // Reemplzar un valor por índice.
    /**
     * @param {number} index
     * @param {number} val
     * @returns {void}
     */
    set(index, val) {
        if(index >= this.length || index < 0){
            console.debug('Error Array')
        }
        return this.data[index] = val;
    }

    // Añadir un element, si nuestra capacidad ya fue superada, entonces se incrementa al capacity * 2, después añadimso el valor.
    /**
     * @param {number} val
     * @returns {void}
     */
    pushback(val) {
        if(this.length === this.capacity){
            this.resize();
        }
        this.data[this.length] = val;
        this.length++
    }

    // Eliminar el último elemento y devolverlo
    /**
     * @returns {number}
     */
    popback() {
        if(this.length === 0){
            console.debug('Error')
        }
        this.length--
        return this.data[this.length]
    }


    // Incrementar o resize the array.
    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2 //Incrementar la capacidad al doble.
        let newData = new Array(this.capacity)

        //Pasar la información previa.
        for(let index = 0; index < this.length; index++){
            newData[index] = this.data[index]
        }

        this.data = newData;
    }

    //Obtener el tamaño
    /**
     * @returns {number}
     */
    getSize() {
        return this.length
    }

    //Obtener la capcidad en memoria asignado.
    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
