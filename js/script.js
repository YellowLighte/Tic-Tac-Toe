const gameBoard = document.querySelector('.game-board-grid');
const clearBtn = document.querySelector('#clear-btn');
const squares = document.querySelector('.game-board-grid').querySelectorAll('.game-board-space');
const headText = document.querySelector('#head-text');
const player1_text = 'X';
const player2_text = 'O';
let moveCounter = 0;
let moveMemory = [1,2,3,4,5,6,7,8,9];
let currentPlayer = player1_text;

clearBtn.addEventListener('click', clearBoard);

function createBoard() {
    currentPlayer = player1_text;
    moveCounter = 0;
    gameBoard.childNodes.forEach(child => {
        child.addEventListener('click', squareEventHandling, {once: true})
    });
}

function squareEventHandling(event) {
    if (currentPlayer === player1_text) {
        event.target.style.color = 'blue';
    } else {
        event.target.style.color = 'green';
    }
    event.target.innerText = currentPlayer;
    moveMemory[event.target.id] = currentPlayer;
    if (moveCounter >= 4) {
        checkForWin();
        if (checkForWin()) {
            headText.innerText = `${currentPlayer} won the game`;
        }
    }
    changePlayer();
}

function clearBoard() {
    squares.forEach(square => {
        square.innerText = '';
    });
    moveMemory = [1,2,3,4,5,6,7,8,9];
    currentPlayer = player1_text;
    moveCounter = 0;
    squares.forEach(square => {
        square.removeEventListener('click', squareEventHandling);
    });
    createBoard();
}

function changePlayer() {
    currentPlayer = currentPlayer === player1_text ? player2_text : player1_text;
    moveCounter++;
}

function checkForWin() {
    if (moveMemory[0] === moveMemory[1] && moveMemory[0] === moveMemory[2]) {
        console.log('won on top row');
        return true;
    }
    else if (moveMemory[3] === moveMemory[4] && moveMemory[3] === moveMemory[5]) {
        console.log('won on middle row');
        return true;
    }
    else if (moveMemory[6] === moveMemory[7] && moveMemory[6] === moveMemory[8]) {
        console.log('won on bottom row');
        return true;
    }
    else if (moveMemory[0] === moveMemory[3] && moveMemory[0] === moveMemory[6]) {
        console.log('won on first column');
        return true;
    }
    else if (moveMemory[1] === moveMemory[4] && moveMemory[1] === moveMemory[7]) {
        console.log('won on second column');
        return true;
    }
    else if (moveMemory[2] === moveMemory[5] && moveMemory[2] === moveMemory[8]) {
        console.log('won on third column');
        return true;
    }
    else if (moveMemory[0] === moveMemory[4] && moveMemory[0] === moveMemory[8]) {
        console.log('won diagonally right');
        return true;
    }
    else if (moveMemory[2] === moveMemory[4] && moveMemory[2] === moveMemory[6]) {
        console.log('won diagonally left');
        return true;
    }
     else if (moveCounter === 8) {
        alert('GAME OVER. Tie.');
    }
}

createBoard();