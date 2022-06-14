import { gameboard } from './Board/index.js';
import { SNAKE_SPEED, draw as snakeDraw, update as snakeUpdate } from './Cobra/index.js'
import {draw as foodDraw, update as foodUpdate} from './food/food.js'

const SNAKE_SPEED = 5;

let lastTimeRender = 0;

//milisegundos
function main(currentTime) {

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
};

function draw() {
	snakeUpdate();
	foodDraw();
};

window.requestAnimationFrame()