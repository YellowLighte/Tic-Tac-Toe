const gameBoard = document.querySelector('.game-board-grid');
const clearBtn = document.querySelector('#clear-btn');
const squares = document.querySelector('.game-board-grid').querySelectorAll('.game-board-space');



// create player1 and player2
const player1_text = 'X';
const player2_text = 'O';
let moveCounter = 0;
let moveMemory = ['', '', '', '', '', '', '', '', '', ''];

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let player1Moves = [];
let player2Moves = [];


let currentPlayer = player1_text;

// track which player selects which square
    // if square has not been selected yet, track that the player has clicked the square

clearBtn.addEventListener('click', clearBoard);

function createBoard() {
    gameBoard.childNodes.forEach(child => {
        child.addEventListener('click', () => {
            child.innerText = currentPlayer;
            moveMemory[child.id] = currentPlayer;
            if (currentPlayer === player1_text) {
                player1Moves.push(child.id);
            } else {
                player2Moves.push(child.id);
            }

            //check to see if the currentPlayer has won
            console.log(checkForWin());
            // if (checkForWin()) {
            //     console.log('a player has won!');
            // }// testing to see if winning condition is met
            changePlayer();
            moveCounter++;
        }, {once: true})
    });
}


function clearBoard() {
    squares.forEach(square => {
        square.innerText = '';
    });
    moveCounter = 0;
    currentPlayer = player1_text;
}

function changePlayer() {
    if (moveCounter % 2 === 1){
        currentPlayer = player1_text;
    } else {
        currentPlayer = player2_text;
    }
}

function checkForWin() {
    // if winningCombos contains player1/2Moves
    // winningCombos.forEach(combo => {
    //     for (let i = 0; i < player1Moves.length; i++) {
    //         if (!combo.includes(player1Moves[i])) {
    //             return false;
    //         }
    //         return true;
    //     }
    //     for (let i = 0; i < player2Moves.length; i++) {
    //         if (!combo.includes(player2Moves[i])) {
    //             return false;
    //         }
    //         return true;
    //     }
    // })
    // winningCombos.forEach(combo => {
    //     if (combo.includes(player1Moves.forEach(move => {
    //             console.log('a player has won!');
    //         })
    //     ))
    // }})
}

createBoard();