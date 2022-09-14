export default class Food {
    _x
    _y
    #food

    constructor(x, y){
        this._x = x
        this._y = y
        this.#food = document.createElement('div')
        this.#food.classList.add('food')
        this.#food.setAttribute('style', `--row: ${y}; --col: ${x};`)
    }

    getFood(){
        return this.#food
    }
    remove(){
        this.#food.remove()
    }
    getPosition(){
        return{
            x: this._x,
            y: this._y
        }
    }
}