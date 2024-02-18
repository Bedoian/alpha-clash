//Callback function//
document.addEventListener('keyup', handleKeyboard)
// keyboard manage function typing
function handleKeyboard(event) {
    const playerPressed = event.key;
if(playerPressed=='Escape'){
    gameOver()
}
    // expected code
    const randomAlphabet = document.getElementById('random-alphabet')
    const randomInnerText = randomAlphabet.innerText;
    const randomLowerCase = randomInnerText.toLowerCase()

    // Game logic function
    if (randomLowerCase === playerPressed) {
        //update Score//
        //get the current score;
        const currentScore = getElementForInnerText('current-score')
        // increse score;
        const score = currentScore + 1;
        // show the result//
        setInnertextValue('current-score', score)

        // start a new round//
        removebkcolorById(randomLowerCase)
        continueGame()
    }
    else {
        const currentLife = getElementForInnerText('current-life')
        const life = currentLife - 1
        setInnertextValue('current-life', life)
        if (life === 0) {
            gameOver()

        }
    }
}
// onclick on play button
function play() {
    hideElementByid('home-screen')
    hideElementByid('final-score')
    unhideElementByid('play-ground')
    // reset score & life
    setInnertextValue('current-life', 5)
    setInnertextValue('current-score', 0)
    continueGame()
}

// inner function of play
function continueGame() {
    const alphabe = mainGame()
    const currentAlphabet = document.getElementById('random-alphabet')
    currentAlphabet.innerText = alphabe
}
// game over
function gameOver() {
    hideElementByid('play-ground')
    unhideElementByid('final-score')
    // set fianl value
    const currentScore = getElementForInnerText('current-score')
    setInnertextValue('score', currentScore)
    //remove current text bkcolor
    const randomAlphabet = document.getElementById('random-alphabet')
    const alphabe = randomAlphabet.innerText
    removebkcolorById(alphabe)
}
