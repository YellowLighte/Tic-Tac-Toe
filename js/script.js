console.log('script.js is linked');

const gameBoard = document.querySelector('.game-board-grid');
const clearBtn = document.querySelector('#clear-btn');
const squares = document.querySelector('.game-board-grid').querySelectorAll('.game-board-space');

console.log(squares);

clearBtn.addEventListener('click', () => {
    console.log('board should be cleared');
    clearBoard();
});

function createBoard() {
    gameBoard.childNodes.forEach(child => {
        child.addEventListener('click', () => {
            child.style.background = 'blue';
        })
    });
}

function clearBoard() {
    squares.forEach(square => {
        square.style.background = 'white';
    });
}

createBoard();