import SnakeCell from "./SnakeCell.js"

export default class Snake {
    #length = 1
    #snakeHead
    #snakeTail
    direction = 'right'
    
    constructor(speed){
        this.#snakeHead = new SnakeCell(this.#length, 1, 2)
        this.#snakeTail = this.#snakeHead
    }

    getSnake(){
        return this.#snakeHead.getCell()
    }

    move(){
        var currentX = this.#snakeHead.cellX
        var currentY = this.#snakeHead.cellY

        if(this.direction == 'up'){
            this.#snakeHead.updatePosition(currentX, currentY-1)
        }else if(this.direction == 'down'){
            this.#snakeHead.updatePosition(currentX, currentY+1)
        }else if(this.direction == 'left'){
            this.#snakeHead.updatePosition(currentX-1, currentY)
        }else if(this.direction == 'right'){
            this.#snakeHead.updatePosition(currentX+1, currentY)
        }
    }

    getHeadPosition(){
        return {
            x: this.#snakeHead.cellX,
            y: this.#snakeHead.cellY
        }
    }

    setDirection(direction){
        this.direction = direction
    }

    getNewSnakeCell(){
        this.#length += 1
        var cell = new SnakeCell(this.#length, this.#snakeTail.cellX, this.#snakeTail.cellY)
        this.#snakeTail.next = cell
        cell.previous = this.#snakeTail
        this.#snakeTail = cell
        return cell.getCell()
    }
}