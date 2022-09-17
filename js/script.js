import SnakeGame from "./SnakeGame.js"

const game = new SnakeGame()

const startBtn = document.getElementById('start-btn')
const startScreen = document.querySelector('.start-screen')

startBtn.addEventListener('click', e => {
    startScreen.classList.add('scale-down')
    game.start()
})

game.onGameOver = function(){
    console.log('game over');
}
game.onRestart = function(){
    console.log("restarted");
}