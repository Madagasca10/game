import {gameboard, generateRandowBoardPosition} from '../Board/index.js';
import { collision as snakeCollision} from '../Cobra/index.js';

let foodPosition = generateRandowPosition();

export function update() {
};


export function draw() {
    const foodElement = document.createElement('div');

//css
foodElement.classList.add('food')

//posição da cobra
foodElement.style.gridRowStart = foodPosition.y;
foodElement.style.gridColumnStart = foodPosition.x;

//anexo no Dom
gameboard.appendChild(foodElement);
};

function generateRandowPosition() {
    let newFoodPosition;

    while (newFoodPosition === undefined || snakeCollision(newFoodPosition)) {
        newFoodPosition = generateRandowBoardPosition();
    }

    return newFoodPosition;
}