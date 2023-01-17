import {update as updateSnake, draw as drawSnake, snake_speed, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import { outSizeGrid } from './grid.js';

const gameBoard = document.getElementById('game-board');

let lastRenderTime = 10;
let gameOver = false;

requestAnimationFrame(main)

function main(currentTime){  
    if (gameOver){
        if(confirm("voce perdeu!")){
            location ='/'
            
        return
        }
    }

    requestAnimationFrame(main)

    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    if(secondsSinceLastRender < 1 /snake_speed) return;

    lastRenderTime = currentTime;
    update()
    draw()
    console.log(lastRenderTime)
}

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = "";
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outSizeGrid(getSnakeHead()) || snakeIntersection()
}