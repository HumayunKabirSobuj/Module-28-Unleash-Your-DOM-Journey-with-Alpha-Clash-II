/*

function play() {
    //step-1: hide the home screen . to hide the screen add the class hidden to the home section

    const homeSection=document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    // console.log(homeSection.classList);


    //step-2: show the playground


    const playgrondSection=document.getElementById('play-ground');
    // console.log(playgrondSection.classList)
    playgrondSection.classList.remove('hidden');

}

*/
function handleKeyboardKeyupEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);
    //check match or not
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point');
        //update score
        //step 1: get the currect score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScoreText);
        //step 2: increase the score by 1
        const newScore = currentScore + 1;
        //step 3: show the updated score
        currentScoreElement.innerText=newScore;
        //start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else {
        console.log('you missed. you lost a life.')
    }
}

//capture keyboard keypress
document.addEventListener('keyup', handleKeyboardKeyupEvent)

function continueGame() {
    // step -1: genarate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet ',alphabet);
    //set rendomly generated alphabet to the screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);

}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground')
    continueGame();
}

