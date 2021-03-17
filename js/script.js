const gameBoard = document.querySelector('.game-board-grid');
const clearBtn = document.querySelector('#clear-btn');
const squares = document.querySelector('.game-board-grid').querySelectorAll('.game-board-space');



// create player1 and player2
const player1_text = 'X';
const player2_text = 'O';
let moveCounter = 0;

// array to hold winning combinations

// current player starts with player1
let currentPlayer = player1_text;

// track which player selects which square
    // if square has not been selected yet, track that the player has clicked the square
    // update the square with the player marker

// after each click, check to see if that player has won


clearBtn.addEventListener('click', clearBoard);

function createBoard() {
    gameBoard.childNodes.forEach(child => {
        child.addEventListener('click', () => {
            child.innerText = currentPlayer;
            changePlayer();
            moveCounter++;
            console.log('total moves: ' + moveCounter);
        })
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
    console.log('player has been changed');
    console.log('current player is: ' + currentPlayer);
}

createBoard();