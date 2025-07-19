/* Extensión de la clase SetExtentido() 
    solo para ejmplificar sus métodos, porque este ya los posee.
    teoría de conjuntos.
*/
class SetExtentido extends Set {
    #isValidSet = (set) => {
        return set && set instanceof SetExtentido && set.size > 0;
    };

    /* Método de union de cojuntos */
    union(set) {
        if (!this.#isValidSet(set)) {
            return new SetExtentido();
        }

        return new SetExtentido([...this, ...set]);
    }

    /* Intersección de conjuntos
        Recorrer el conjunto más pequeño, (evitando comprobaciones innecesarias).
    */
    inserection(set) {
        const intersectionSet = new SetExtentido();

        if (!this.#isValidSet(set)) {
            return intersectionSet;
        }

        const [smallerSet, biggerSet] = set.size <= this.size ? [set, this] : [this, set];

        smallerSet.forEach((item) => {
            if (biggerSet.has(item)) {
                intersectionSet.add(item);
            }
        });

        return intersectionSet;
    }

    /* Diferencia de conjuntos
    Sustracción, devolver los elementos que un conjunto no tiene en común con el otro.
    */
    difference(set) {
        const sutractionSet = new SetExtentido();

        if (!this.#isValidSet(set)) {
            return sutractionSet;
        }

        this.forEach((item) => {
            if (!set.has(item)) {
                sutractionSet.add(item);
            }
        });
        return sutractionSet;
    }

    /* Simétrica diferencias, diferencia de intersección */
    symetricDiference(set) {
        const symetricDiferenceSet = new SetExtentido();

         if (!this.#isValidSet(set)) {
            return symetricDiferenceSet;
            
         }
        
        this.forEach((item) => {
            if (!set.has(item)) {
                symetricDiferenceSet.add(item);
            }
        });
        set.forEach((item) => {
            if (!this.has(item)) {
                symetricDiferenceSet.add(item);
            }
        });

        return symetricDiferenceSet;
    }

    /* Diferencia de intersección, usando lo previo, el mismo método */
    diferenciaIntersection(set) {
        const symetricDiferenceSet = new SetExtentido();

         if (!this.#isValidSet(set)) {
            return symetricDiferenceSet;
            
         }
        
        return new SetExtentido([...this.difference(set), ...set.difference(this)]);
    }

    /* Subconjunto */
    isSubsetOf(set) {
        if (!this.#isValidSet(set)) {
            return false;
        }
        
        return this.size <= set.size &&
            [...this].every(item => set.has(item));
    }

    /* Superconjunto */
    isSupersetOf(set) {
        if (!this.#isValidSet(set)) {
            return false;
        }
        
        return this.size >= set.size &&
            [...set].every(item => this.has(item))
    }

    /* Son diferentes */
    isDisjointFrom(set) {
        if (!this.#isValidSet(set)) {
            return false;
        }

        return this.size !== set.size &&
        [...this].every(item => !set.has(item))
    }

}


const conjuntoA = new SetExtentido(['a', 'b', 'c']);
const conjuntoB = new SetExtentido(['e', 'd', 'c', 'a', 'b']);

const setC = new Set([1, 4, 6])
const setD = new Set([4, 7, []])




/* Unión de múltiples sets */
console.log('SetExtentido A', conjuntoA);
console.log('SetExtentido B', conjuntoB);
console.log('Unión de Sets', [...conjuntoA.union(conjuntoB)]);
console.log('Intersección de Sets', [...conjuntoA.inserection(conjuntoB)]);
/* console.log('Int with set()', [...setC.intersection(setD)]); */
console.log('Sustracción del conjunto A con el conjunto B', [...conjuntoA.difference(conjuntoB)]);
console.log('Sustracción del conjunto B con el conjunto  B\A"', [...conjuntoB.difference(conjuntoA)]);
console.log('Simétrica Diferencia de A con B,',[...conjuntoA.symetricDiference(conjuntoB)]);
console.log('Simétrica Diferencia de A con B,', [...conjuntoA.diferenciaIntersection(conjuntoB)]);
console.log('¿A es subconjunto de B?', conjuntoA.isSubsetOf(conjuntoB));
console.log('¿B es superconjunto de A?', conjuntoB.isSupersetOf(conjuntoA));
console.log('¿Set C y SetD son distintos?', setC.isDisjointFrom(setD));

/* Finalización con el uso de sets, y su comportamiento, teoría de conjuntos. */



/* Conjunto estático 
Este no existe en JS, es decir un conjunto no mutable, bueno, pues este lo extendemos igual
*/
class StaticState extends SetExtentido {
    constructor(items) {
        super(items);
    

        this.add = undefined;
        this.delete = undefined;
        this.clear = undefined;
    }
}


const conjuntoEstatico = new StaticState(['Juan', 'John', 'Korn']);
console.log(conjuntoEstatico);
conjuntoEstatico.clear();
/* Nos marcará error, porque no podemos mutar un nuevo set estático, y le hemos
undefined estos métodos de mutación. */
console.log(conjuntoEstatico);