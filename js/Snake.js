import SnakeCell from "./SnakeCell.js"

export default class Snake {
    #length = 1
    #speed
    #snakeHead
    
    constructor(speed){
        this.#speed = speed
        this.#snakeHead = new SnakeCell(this.#length)
    }

    getSnake(){
        return this.#snakeHead.getCell()
    }

    move(){
        console.log(78);
    }
}