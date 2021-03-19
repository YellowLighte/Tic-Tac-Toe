const gameBoard = document.querySelector('.game-board-grid');
const clearBtn = document.querySelector('#clear-btn');
const squares = document.querySelectorAll('.game-board-grid > div');
const headText = document.querySelector('#head-text');
const playerTurnText = document.querySelector('#player-turn-text');

// These can be changed depending on which tokens the player wants to use v
const player1_text = 'X';
const player2_text = 'O';
let moveCounter = 0;
let moveMemory = [1,2,3,4,5,6,7,8,9];
let currentPlayer = player1_text;

clearBtn.addEventListener('click', clearBoard);

// Function initializes game board and adds event listeners to each box in the grid
function createBoard() {
    currentPlayer = player1_text;
    clearBtn.innerHTML = 'Clear Board';
    playerTurnText.innerHTML = `${currentPlayer} starts`;
    playerTurnText.style.display = 'block';
    moveCounter = 0;
    gameBoard.childNodes.forEach(child => {
        child.addEventListener('click', squareEventHandling, {once: true})
    });
}

// Function contains logic for square event clicks
function squareEventHandling(event) {

    if (currentPlayer === player1_text) {
        event.target.style.color = 'blue';
    } else {
        event.target.style.color = 'green';
    }
    event.target.innerText = currentPlayer;
    moveMemory[event.target.id] = currentPlayer;
    if (moveCounter >= 4) {
        if (checkForWin()) {
            gameBoard.style.animation = 'hinge 2s ease-in-out';
            //TODO: Figure out how to get the game grid box to stay hidden until createBoard() is called
            removeSquareEventHandlers();
            window.confirm(`${currentPlayer} won the game`);
            clearBtn.innerHTML = 'Play again?';
            playerTurnText.style.display = 'none';
        } else if (moveCounter === 8) {
            clearBtn.innerHTML = 'Play again?';
            playerTurnText.style.display = 'none';
            alert('GAME OVER. Tie.');
        }
    }
    changePlayer();
}

// Clears board once game is over and recalls function that will reset the game
function clearBoard() {
    removeSquareEventHandlers();
    squares.forEach(square => {
        square.innerText = '';
    });
    moveMemory = [1,2,3,4,5,6,7,8,9];
    currentPlayer = player1_text;
    moveCounter = 0;
    headText.innerText = 'Tic Tac Toe';
    createBoard();
}

// Removes event listeners from each square so they can't be clicked once win condition is met
function removeSquareEventHandlers() {
    squares.forEach(square => {
        square.removeEventListener('click', squareEventHandling);
    })
}

// Logic to determine whose turn it is
function changePlayer() {
    currentPlayer = currentPlayer === player1_text ? player2_text : player1_text;
    moveCounter++;
    playerTurnText.innerHTML = `It's ${currentPlayer}'s turn`;
}


// Cycles through win conditions and returns true if one of the conditions has been met
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
    } else {
        console.log('No winner yet');
    }
}

// Starts game
createBoard();