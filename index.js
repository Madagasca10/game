import { gameboard, isOutsideBoard } from "./Board/index.js";
import {
    SNAKE_SPEED,
    draw as snakeDraw,
    update as snakeUpdate,
    getSnakeHead,
    hasSelfCollision as hasSnakeSelfCollision,
} from "./Cobra/index.js";
import { draw as foodDraw, update as foodUpdate } from "./food/food.js";

console.log(gameboard);

let lastTimeRender = 0;

//milisegundos
function main(currentTime) {
    if (checkGameOver()) {
        if (confirm("perdeste")) {
            location.reload();
            return;
        }
    } else {
        requestAnimationFrame(main);
    }

    const secondsSinceLastRender = (currentTime - lastTimeRender) / 1000;

    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastTimeRender = currentTime;

    update();

    draw();
}

function update() {
    gameboard.innerHTML = "";
    snakeUpdate();
    foodUpdate();
}

function draw() {
    snakeDraw();
    foodDraw();
}

function checkGameOver() {
    return isOutsideBoard(getSnakeHead()) || hasSnakeSelfCollision();
}

requestAnimationFrame(main);
