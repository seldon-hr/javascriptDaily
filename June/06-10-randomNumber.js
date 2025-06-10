let randomDecimal = Math.random();
console.log(randomDecimal);

let randomInt = Math.floor(Math.random() * 10);
console.log(randomInt);

let min = 10000000000000000;
let max = 99999999999999999;
function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


