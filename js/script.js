//import game module
import SnakeGame from "./SnakeGame.js"

//create an object
const game = new SnakeGame()

//element references
const startScreen = document.querySelector('.start-screen')
const restartScreen = document.querySelector('.restart-screen')
const startBtn = document.getElementById('start-btn')
const resetBtn = document.getElementById('reset-btn')
const restartBtn = document.getElementById('restart-btn')

const score = document.getElementById('score')
const highestScore = document.getElementById('highest-score')

//click event handlers
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

// on game over callback
game.onGameOver = function(){
    updateScore()
    setHighestScore()
    showRestartScreen()
}

//on game restart callback
game.onRestart = function(){
    hideRestartScreen()
}

//show restart screen
function showRestartScreen(){
    restartScreen.classList.add('show')
}

//hide restart screen
function hideRestartScreen(){
    restartScreen.classList.remove('show')
    restartScreen.classList.remove('restart-screen')
    restartScreen.classList.add('restart-screen')
}

//display scores
function updateScore(){
    score.innerHTML = game.getMarks()
}

//set highest score in local storage
function setHighestScore(){
    if(localStorage.getItem('max-score', 0) < game.getMarks()){
        localStorage.setItem('max-score', game.getMarks())
    }
    updateHighestScore()
}

//display highest scores
function updateHighestScore(){
    highestScore.innerHTML = localStorage.getItem('max-score', 0)
}