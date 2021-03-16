console.log('script.js is linked');

const gameBoard = document.querySelector('.game-board-grid');
console.log('uses .childNodes: ' + gameBoard.childNodes);
console.log('uses .children: ' + gameBoard.children);

gameBoard.childNodes.forEach(child => {
    child.addEventListener('click', () => {
        console.log(child.textContent + 'button was selected');
        child.style.background = 'blue';
        console.log(child.style.background);
    })
});
