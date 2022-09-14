export default class SnakeCell {
    cellX = 1
    cellY = 2
    #cell
    #cellId

    next = null
    previous = null

    constructor(id){
        this.#cellId = id
        this.#cell = `<div class="snake-cell move" id="snake-cell-${id}" style="--cell-x: ${this.cellX}; --cell-y: ${this.cellY};"></div>`
    }

    getCell(){
        return this.#cell
    }

    updatePosition(x, y){
        this.cellX = x
        this.cellY = y
        document.getElementById('snake-cell-'+this.#cellId).setAttribute('style', `--cell-x: ${x}; --cell-y: ${y};`)
    }
}