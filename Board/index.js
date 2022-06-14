const BOARD_SIZE = 21;

export const gameboard = document.getElementById('game-board');

function generateRandowBoardPosition() {
    return {
      x: Math.floor(Math.random() * BOARD_SIZE + 1,
      y: Math.floor(Math.random() * BOARD_SIZE + 1,
  }
}