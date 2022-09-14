import SnakeCell from "./SnakeCell.js"

export default class Snake {
    #length = 1
    #speed
    #snakeHead
    direction = 'right'
    moving = null
    
    constructor(speed){
        this.#speed = speed
        this.#snakeHead = new SnakeCell(this.#length)

        this.moving = setInterval(this.move.bind(this), speed)
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

    setDirection(direction){
        this.direction = direction
    }
}