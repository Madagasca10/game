import { gameboard, isOutsideBoard } from './Board/index.js';
import { SNAKE_SPEED, draw as snakeDraw, update as snakeUpdate, getSnakeHead, hasSelfCollision as hasSnakeSelfCollision } from './Cobra/index.js'
import {draw as foodDraw, update as foodUpdate} from './food/food.js'


let lastTimeRender = 0;

let gameOver = false;

//milisegundos
function main(currentTime) {

  if (gameOver) {
	alert('perdeste');
  }

	window,requestAnimationFrame(main);

	const secondsSinceLastRender = ( currentTime - lastTimeRender) / 1000;

	if( secondsSinceLastRender <1 / SNAKE_SPEED) return;

	lastTimeRender = currentTime;

	update();

	draw();
}

function update() {
	gameboard.innerHTML ='';
	snakeUpdate();
	foodUpdate();
	checkGameOver();
};

function draw() {
	snakeUpdate();
	foodDraw();
};

function checkGameOver() {
   if(isOutsideBoard(getSnakeHead())  || hasSnakeSelfCollision()) {
	gameOver = true;
   }
}

window.requestAnimationFrame()