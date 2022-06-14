const gameboard = document.getElementById('game-board');

const SNAKE_SPEED = 5;

let lastTimeRender = 0;

//milisegundos
function main(currentTime) {

	window,requestAnimationFrame(main);

	const secondsSinceLastRender = ( currentTime - lastTimeRender) / 1000;

	if( secondsSinceLastRender <1 / SNAKE_SPEED) return;

	lastTimeRender = currentTime;

	console.log(lastTimeRender);

	update();

	draw();
}

function update() {};

function draw() {};

window.requestAnimationFrame()