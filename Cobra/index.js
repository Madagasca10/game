import {getInputDirection} from './andar.js'
import { gameboard } from'../Board/index,js'

export const SNAKE_SPEED = 5;

let newSegments = 0;

const snakeBody = [
    { x:11, y:11},
]

export function update() {
    addSegments();

  const inputDirection = getInputDirection();

  // mover os segmentos da cobra
  for (let i = snakeBody.length -2; i >=0; i--){
    snakeBody[i+1] = { ... snakeBody};
  }

  
 //cabeça
 snakeBody[0].x += inputDirection.x;
 snakeBody[0].y += inputDirection.y;
};

export function draw() {

    snakeBody.forEach(segment => {        

    const snakeElement = document.createElement('div');

    //css
    snakeElement.classList.add('snake')

    //posição da cobra
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;

    //anexo no Dom
    gameboard.appendChild(snakeElement)
});
};

export function collision(position) {
    return snakeBody.some(segement =>{
       return position.x === segment.x && position.y === segment.y;
    });
}
//expandir a cobra
export function expandSnake(amount) {
   newSegments += amount;
}


function addSegments() {
   if (newSegments >0) {
     snakeBody.push({
        ...snakeBody[snakeBody.length -1],
     });
     
     newSegments -= 1;
   }
}
// funções auxiliares
export function getSnakeHead() {
    return snakeBody[0];
}

export function hasSelfCollision() {
   const snakehead = snakeBody[0];
    return snakeBody.some((segement, index =>{
        if(index === 0) return false;
        return snakehead.x === segment.x && snakehead.y === segment.y;
     });
}