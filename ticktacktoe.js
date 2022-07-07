// 0. Iniciar el juego
alert('Start the game');
alert('Choose your attack');

// 1. Choose your attack
let player = prompt('write your attack');

if (player == 0) {
    alert('Choose rock');
} else if (player == 1) {
    alert('Chossed paper');
} else if (player == 1) {
    alert('Chossed sccissors');
}

// 2. the next
let enemy = Math.round(Math.random() * 2)

if(enemy == 0) {
    alert('Enemy choosse rock');
} else if (enemy == 1) {
    alert('Enemy chossed paper');
} else if (enemy == 2) {
    alert('Enemy chossed sccissors');
}


// 3. The result
if (player == enemy) {
    alert('Draw');
} else if (player == 0 && enemy == 2) {
    alert('You win');
} else if (player == 1 && enemy == 0) {
    alert('You win');
} else if (player == 2 && enemy == 1) {
    alert('You win');
} else {
    alert('You loose');
}