import SnakeGame from "./SnakeGame.js"

const game = new SnakeGame()

const startScreen = document.querySelector('.start-screen')
const restartScreen = document.querySelector('.restart-screen')
const startBtn = document.getElementById('start-btn')
const resetBtn = document.getElementById('reset-btn')
const restartBtn = document.getElementById('restart-btn')

//score
const score = document.getElementById('score')
const highestScore = document.getElementById('highest-score')

startBtn.addEventListener('click', e => {
    startScreen.classList.add('scale-down')
    game.start()
})

resetBtn.addEventListener('click', e => {
    if(confirm("Do you want to reset your highest score?")){
        localStorage.setItem('max-score', 0)
        updateHighestScore()
    }
})

restartBtn.addEventListener('click', e => {
    game.restart()
})

game.onGameOver = function(){
    updateScore()
    updateHighestScore()
    showRestartScreen()
}
game.onRestart = function(){
    hideRestartScreen()
}

function showRestartScreen(){
    restartScreen.classList.add('show')
}
function hideRestartScreen(){
    restartScreen.classList.remove('show')
    restartScreen.classList.remove('restart-screen')
    restartScreen.classList.add('restart-screen')
}
function updateScore(){
    score.innerHTML = game.getMarks()
}
function setHighestScore(){
    if(localStorage.getItem('max-score', 0) < game.getMarks()){
        localStorage.setItem('max-score', game.getMarks())
    }
    updateHighestScore()
}
function updateHighestScore(){
    highestScore.innerHTML = localStorage.getItem('max-score', 0)
}