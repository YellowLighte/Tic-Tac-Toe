const gameBoard = document.querySelector('.game-board-grid');
const clearBtn = document.querySelector('#clear-btn');
const squares = document.querySelector('.game-board-grid').querySelectorAll('.game-board-space');



// create player1 and player2
const player1_text = 'X';
const player2_text = 'O';
let moveCounter = 0;
let moveMemory = ['', '', '', '', '', '', '', '', '', ''];

let currentPlayer = player1_text;

clearBtn.addEventListener('click', clearBoard);

function createBoard() {
    console.log('called from createBoard - current player is: ', currentPlayer);
    moveCounter = 0;
    gameBoard.childNodes.forEach(child => {
        child.addEventListener('click', () => {
            child.innerText = currentPlayer;
            moveMemory[child.id] = currentPlayer;

            //check to see if the currentPlayer has won

            checkForWin();
            changePlayer();
            moveCounter++;
            console.log('called from createBoard() - move: ', moveCounter);
        }, {once: true})
    });
}

function clearBoard() {
    squares.forEach(square => {
        square.innerText = '';
    });
    currentPlayer = player1_text;

    console.log('called from clearBoard - moves :', moveCounter);
    console.log('called from clearBoard - current player is: ', currentPlayer);
    console.log(moveMemory);

    // Test to clear memory
    moveMemory = [];
    console.log(moveMemory);
    // End test
    createBoard();
}

function changePlayer() {
    if (moveCounter % 2 === 1){
        currentPlayer = player1_text;
    } else {
        currentPlayer = player2_text;
    }
    console.log('called from changePlayer() - current player is: ', currentPlayer);
}

function checkForWin() {
    if (moveCounter === 8) {
        alert('GAME OVER. Tie.');
    }

}

createBoard();