    //Necessary Constants
//const AUDIO
//const PNGs
const GAME_BOARD_ID = 'game-board';
const MESSAGES_DISPLAY = 'messages-display';
const THE_BUTTON = 'the-button';


    //State Variables
let results;
let totalBoomSpaces;
let totalOpenSpaces;

    //Cached Element References
    //'you win' or 'you lose' element 
const messagesDisplay = document.getElementById(MESSAGES_DISPLAY);
const gameBoard = document.getElementById(GAME_BOARD_ID);
    //start/replay button
const theButton = document.getElementById(THE_BUTTON);
    //Tile Spaces Variables
let gridSize = 10; 
const totalTiles = gridSize * gridSize;
let remainingOpenSpaces = totalTiles - totalBoomSpaces;
// let tiles = [];


    //Click Events (Use Event Delegation -Jim Clark)
//start/replay button
    //addEventListener
theButton.addEventListener('click', initializeGame);


    //Code To Run Minesweeper
//initialize
function initializeGame() {
    theButton.innerText = 'Restart';
    gameBoard.innerHTML = '';
    render();
}

function render() {
    //would like to add random quips to pull from
    messagesDisplay.innerText = 'Watch for misclicks!';
    //update board
    createTileSpaces();
}


function createTileSpaces() {
    //Arrays to store open and bomb spaces 
    for (let i = 0; i < totalTiles; i++){
        const tile = createGameTiles();
        tile.setAttribute('id', i);
        gameBoard.append(tile);
        // tiles.push(tile);
    }
}


function createGameTiles() {
    //create game spaces
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.style.backgroundColor = '#333';
    //randomly place newly generated mines 
    const randomNumber = Math.random() < 0.9;
    // totalOpenSpaces = 0;
    // totalBoomSpaces = 0;
    if (randomNumber) {
    //function createMineSpaces (Somewhat achieved in 'createGameTiles'?)
        tile.classList.add('boom-space');
        tile.innerText = "BOOM";
        totalBoomSpaces++;
    //make game spaces clickable
        tile.addEventListener('click', handleBoomSpace)
    } else {
        tile.classList.add('open-space');
        totalOpenSpaces++;
    //make game spaces clickable
        tile.addEventListener('click', handleOpenSpace)
    }
    return tile;
}

function handleBoomSpace() {
    endGame(false);
}

function handleOpenSpace(event) {
    //click on space to 'reveal' 
    //check for open space or bomb space
    //USE YT VID FOR REFERENCE
    //if open, clear surrounding spaces/list number of mines around 3x3
    event.target.style.backgroundColor = '#c4c4c4';
    //disabling clicked openSpaces
    event.target.removeEventListener('click', handleOpenSpace);
    event.target.classList.add('disabled-hover');
    remainingOpenSpaces--;
    if (remainingOpenSpaces === 0){
        //check for win/loss/in-progress
        endGame(true);
        //function countBombs()
    }
}

// function countBombs()
//use ternary operator to count bombs

// function endGame()
function endGame(isWinner) {
        if (isWinner) {
        messagesDisplay.innerText = 'Congrats! Booms Avoided!';
        console.log('yur')
    } else {
        const boomSpaces = document.querySelectorAll('.boom-space');
    boomSpaces.forEach(boomSpace => {
        //reveal mines upon loss 
        boomSpace.style.backgroundColor = 'red';
        boomSpace.innerText = '✖╭╮✖'
    });
    messagesDisplay.innerText = 'BOOM!'
    theButton.innerText = 'Try Again!';
    }
}




    //depends on ability: 
//do a flagging system
//extra animations
//user-inputted grid size