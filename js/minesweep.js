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
const totalTiles = gridSize * gridSize;
let gridSize = 10; 
let bombAmount = 20;
let tiles = [];


    //Click Events (Use Event Delegation -Jim Clark)
//start/replay button
//addEventListener
theButton.addEventListener('click', initializeGame);


    //Code To Run Minesweeper
//initialize
function initializeGame() {
    // theButton.disabled = true;
    // theButton.style.display = 'none';
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
    // really cool command on vs code for making multiple elements: for example divs.
    // div*5 --> makes 5 divs
    //generate grid (trying for difficulty selection ie. 10x10 = easy, 25x25 = med, etc.)
    //randomly place newly generated mines 
   for (let i = 0; i < totalTiles; i++){
    const tile = createGameTiles();
    tile.setAttribute('id', i);
    gameBoard.append(tile);
    tiles.push(tile);
   }
}


function createGameTiles() {
    //create game spaces
    //make game spaces clickable
    //check for win/loss/in-progress
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.style.backgroundColor = '#333';
    const randomNumber = Math.random() < 0.1;
    totalOpenSpaces = 0;
    totalBoomSpaces = 0; // research a way make it like the TTT example
    if (randomNumber && totalOpenSpaces < 90) {
        tile.classList.add('boom-space');
        tile.innerText = "BOOM";
        totalBoomSpaces++;
        tile.addEventListener('click', handleBoomSpace)
    } else {
        tile.classList.add('open-space');
        totalOpenSpaces++;
        tile.addEventListener('click', handleOpenSpace)
    }
    return tile;
}


//function createMineSpaces (Somewhat achieved in 'createGameTiles'?)
//randomly placed 
//up to a certain number (per difficulty)

function handleBoomSpace(event) {
    const boomSpaces = document.querySelectorAll('.boom-space');
    event.target.style.backgroundColor = 'red'; 
    // boomSpaces.forEach(event.target.removeEventListener('click', handleBoomSpace));
    messagesDisplay.innerText = 'BOOM!'
    theButton.innerText = 'Try Again!';
    // boomSpaces.style.backgroundColor = 'red';
}

function handleOpenSpace(event) {
    //click on space to 'reveal' 
    //check for open space or bomb space
    //if open, clear surrounding spaces/list number of mines around 3x3
    //use ternary operator to count bombs
    // totalOpenSpaces.style.backgroundColor = lightgrey;
    const openSpaces = document.querySelectorAll('.open-space');
    event.target.style.backgroundColor = 'white';

}

// function handleMineSpace() {
    //else reveal mines upon loss (hopefully)
    //display a "death" message 
    //turn start button to restart button
    // totalBoomSpaces.style.backgroundColor = red;
// }





    //depends on ability: 
//do a flagging system
//extra animations
//user-inputted grid size