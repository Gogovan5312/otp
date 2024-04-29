let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const message = document.getElementById('message');

function makeMove(cellIndex) {
  if (gameActive && board[cellIndex] === '') {
    board[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
    
    if (checkWin()) {
      message.innerText = `${currentPlayer} wins!`;
      gameActive = false;
    } else if (checkDraw()) {
      message.innerText = `It's a draw!`;
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  return winningConditions.some(condition => {
    return condition.every(index => {
      return board[index] === currentPlayer;
    });
  });
}

function checkDraw() {
  return board.every(cell => {
    return cell !== '';
  });
}

function reset() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  message.innerText = '';
  document.querySelectorAll('.cell').forEach(cell => {
    cell.innerText = '';
  });
}
