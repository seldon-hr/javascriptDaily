function prepareGifts(gifts) {
    let result = [];
    gifts.forEach(element => {
        /* Preguntamos si existe en nuestra lista vacia, de lo contrario lo agregamos, evitantdo
        duplicados, para aquellos que se iteren posterioremente y ya se encuentren. */
        if (!result.includes(element)) {
            result.push(element);
        }
    });
    /* Ordenamiento del array */
    result.sort((a, b) => a - b);
    return result;
}

console.log(prepareGifts([3, 1, 3]));

const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [5, 6]

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3) // []
// There are no gifts, the list remains empty