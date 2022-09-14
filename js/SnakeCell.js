export default class SnakeCell {
    cellX = 1
    cellY = 2
    #cell
    #cellId

    next = null
    previous = null

    constructor(id){
        this.#cellId = id
        this.#cell = document.createElement('div')
        this.#cell.classList.add('snake-cell', 'move')
        this.#cell.id = `snake-cell-${id}`
        this.#cell.setAttribute('style', `--cell-x: ${this.cellX}; --cell-y: ${this.cellY};`)
    }

    getCell(){
        return this.#cell
    }

    updatePosition(x, y){
        document.getElementById('snake-cell-'+this.#cellId).setAttribute('style', `--cell-x: ${x}; --cell-y: ${y};`)
        if(this.next != null){
            this.next.updatePosition(this.cellX, this.cellY)
        }
        this.cellX = x
        this.cellY = y
    }
}