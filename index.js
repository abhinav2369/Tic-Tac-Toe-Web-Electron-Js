// Variables to keep track of the current player and the game board
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

// Player's Move
function handleMove(position) {
    if (gameBoard[position] === '' && !isGameOver()) {
        gameBoard[position] = currentPlayer;
        
        renderGameBoard();

        if (checkWin(currentPlayer)) {
            alert('Player ' + currentPlayer + ' wins! 🚀👍');
        } else if (isBoardFull()) { // Check for a draw
            alert('It\'s a draw!');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}


function isGameOver() {
    return checkWin('X') || checkWin('O') || isBoardFull();
}


function checkWin(player) {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winningCombos.some(combo => {
        return combo.every(position => {
            return gameBoard[position] === player;
        });
    });
}


function isBoardFull() {
    return gameBoard.every(cell => cell !== '');
}


function renderGameBoard() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block, index) => {
        block.textContent = gameBoard[index];
    });
}


const blocks = document.querySelectorAll('.block');
blocks.forEach((block, index) => {
    block.addEventListener('click', () => {
        handleMove(index);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const resetButton = document.getElementById('reset');

    resetButton.addEventListener('click', function() {
        const blocks = document.querySelectorAll('.block');
        blocks.forEach(block => {
            block.textContent = '';
        });

        currentPlayer = 'X';
        gameBoard = ['', '', '', '', '', '', '', '', ''];
    });
});




// -------------- For Animation Change ---------------------

document.getElementById('start').addEventListener('click', function() {
    document.getElementById('welcome-screen').style.left = '-100vw';
  });

  document.getElementById('back-b1').addEventListener('click', function() {
    document.getElementById('about-this-project').style.left = '100vw';
  });
  
  document.getElementById('about').addEventListener('click', function() {
    document.getElementById('about-this-project').style.left = '0vw';
  });

  document.getElementById('play-game').addEventListener('click', function() {
    document.getElementById('play').style.left = '-100vw';
  });

  document.getElementById('back-play').addEventListener('click', function() {
    document.getElementById('play').style.left = '0vw';
  });