import Snake from "./Snake.js"
import Food from "./Food.js"

export default class SnakeGame {
    #marks = 0
    #game = document.getElementById('snake-game')
    #xCount = 100
    #yCount = 60
    #speed = 150
    #snake
    #currentFood

    //intervals
    #moveSnake
    #gameCheck

    //callbacks
    onGameOver
    onStart
    onRestart

    constructor(){
        this.listenForInputs()
    }
    
    start(){
        this.#marks = 0
        this.addSnake()
        this.addFood()

        //setting intervals
        this.#moveSnake = setInterval(this.#snake.move.bind(this.#snake), this.#speed)
        this.#gameCheck = setInterval(this.checkSnake.bind(this), this.#speed)
    }

    restart(){
        this.#game.innerHTML = ""
        this.start()
        this.onRestart()
    }

    gameOver(){
        this.onGameOver()
        this.#snake.hit()
        clearInterval(this.#moveSnake)
        clearInterval(this.#gameCheck)
    }

    addSnake(){
        this.#snake = new Snake()
        this.#game.appendChild(this.#snake.getSnake())
    }

    checkSnake(){
        var position = this.#snake.getHeadPosition()
        console.log(this.isSnakeHitItself(position));

        if(this.isSnakeHitTheWall(position)){
            this.gameOver()
        }else if(this.isSnakeHitItself(position)){
            this.gameOver()
        }

        this.checkFoodStatus()
    }

    isSnakeHitTheWall(position){
        return position.x <= 0 || position.x >= this.#xCount || position.y <= 0 || position.y >= this.#yCount
    }

    isSnakeHitItself(position){
        return this.#snake.hitItself(this.#snake.getHead().next, position)
    }

    checkFoodStatus(){
        var snakePosition = this.#snake.getHeadPosition()
        var foodPosition = this.#currentFood.getPosition()

        if(snakePosition.x == foodPosition.x && snakePosition.y == foodPosition.y){
            this.#marks += 1
            console.log(this.#marks);
            this.#game.appendChild(this.#snake.getNewSnakeCell())
            this.removeCurrentFoodAndAddNew()
        }
    }

    addFood(){
        var pos = this.getRandomPosition()
        this.#currentFood = new Food(pos.x, pos.y)
        this.#game.appendChild(this.#currentFood.getFood())
    }

    removeCurrentFoodAndAddNew(){
        this.#currentFood.remove()
        this.addFood()
    }

    getRandomPosition(){
        return{
            x: Math.floor(Math.random() * this.#xCount),
            y: Math.floor(Math.random() * this.#yCount)
        }
    }
    
    listenForInputs(){
        window.addEventListener('keyup', e => {
            if(e.key == 'ArrowUp'){
                if(this.#snake.direction != 'down')
                this.#snake.setDirection('up')
            }else if(e.key == 'ArrowLeft'){
                if(this.#snake.direction != 'right')
                this.#snake.setDirection('left')
            }else if(e.key == 'ArrowRight'){
                if(this.#snake.direction != 'left')
                this.#snake.setDirection('right')
            }else if(e.key == 'ArrowDown'){
                if(this.#snake.direction != 'up')
                this.#snake.setDirection('down')
            }
        })
    }

    getMarks(){
        return this.#marks
    }
}