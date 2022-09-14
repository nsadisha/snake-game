import Snake from "./Snake.js"

export default class SnakeGame {
    #marks = 0
    #game = document.getElementById('snake-game')
    #xCount = 100
    #yCount = 60
    #speed = 500
    #snake = new Snake(this.#speed)
    constructor(){
    }

    start(){
        this.addSnake()
        this.addFood()
        this.listenForInputs()
    }

    stop(){
        this.#game.innerHTML = ""
    }

    addSnake(){
        this.#game.innerHTML = this.#snake.getSnake()
    }

    addFood(){
        var x = Math.floor(Math.random() * this.#xCount)
        var y = Math.floor(Math.random() * this.#yCount)
        this.#game.innerHTML += `<div class="food" style="--row: ${x}; --col: ${y};"></div>`
    }
    listenForInputs(){
        window.addEventListener('keyup', e => {
            if(e.key == 'ArrowUp'){
                console.log('up');
            }else if(e.key == 'ArrowLeft'){
                console.log('left');
            }else if(e.key == 'ArrowRight'){
                console.log('right');
            }else if(e.key == 'ArrowDown'){
                console.log('down');
            }
        })
    }
}