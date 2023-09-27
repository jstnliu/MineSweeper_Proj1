    //Necessary Constants
//const AUDIO
//const PNGs
const GAME_BOARD_ID = 'game-board';
const MESSAGES_DISPLAY = 'messages-display';
const THE_BUTTON = 'the-button';
            const INITIAL_BOMB_TOTAL = 0
            const INITIAL_OPEN_TOTAL = 0


    //State Variables
let results;
let totalBoomSpaces;
let totalOpenSpaces;

    //Cached Element References
//'you win' or 'you lose' element 
const messagesDisplay = document.getElementById(MESSAGES_DISPLAY);
//where tiles are generated
const gameBoard = document.getElementById(GAME_BOARD_ID);
//start/replay button
const theButton = document.getElementById(THE_BUTTON);
    //Tile Spaces Variables
let gridSize = 10;
const totalTiles = gridSize * gridSize;
let tiles =[]

    //Click Events (Use Event Delegation -Jim Clark)
//start/replay button
    //addEventListener
theButton.addEventListener('click', initializeGame);


    //Code To Run Minesweeper
//initialize
function initializeGame() {
    theButton.innerText = 'Restart';
    gameBoard.innerHTML = '';
    totalBoomSpaces = INITIAL_BOMB_TOTAL;
    totalOpenSpaces = INITIAL_OPEN_TOTAL;
    render();
}

function render() {
    //would like to add random quips to pull from
    messagesDisplay.innerText = 'Watch Where You Click, There Are Booms All Around!';
    //update board
    createTileSpaces();
}

function createTileSpaces() {
    //Arrays to store open and bomb spaces 
    for (let i = 0; i < totalTiles; i++){
        const tile = createGameTiles();
        tile.setAttribute('id', i);
        // tile.innerText = `${tile.id}`; //only here for readability 
        gameBoard.append(tile);
        tiles.push(tile.id)
    }
    console.log(tiles)
}

function createGameTiles() {
    //create game spaces
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.style.backgroundColor = '#999';
    //randomly place newly generated mines 
    const randomNumber = Math.random() < 0.2;
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
    // console.log(totalBoomSpaces, totalOpenSpaces)
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
    // let remainingOpenSpaces = totalBoomSpaces - totalOpenSpaces;
    // remainingOpenSpaces--;
    totalOpenSpaces--;
    if (totalOpenSpaces === 0){
        //check for win/loss/in-progress
        endGame(true);
        //function countBombs()
    }
    // console.log(remainingOpenSpaces)
}

// function countBombs()
//use ternary operator to count bombs

// function endGame()
function endGame(isWinner) {
        if (isWinner) {
        messagesDisplay.innerText = 'Congrats, Booms Avoided!';
        theButton.innerText = 'Replay!'
    } else {
        const openSpaces = document.querySelectorAll('.open-space');
        const boomSpaces = document.querySelectorAll('.boom-space');
    boomSpaces.forEach(boomSpace => {
        //reveal mines upon loss 
        boomSpace.style.backgroundColor = '#ff7575';
        boomSpace.innerText = '✖╭╮✖';
        boomSpace.removeEventListener('click', handleBoomSpace);
        boomSpace.classList.add('disabled-hover');
        openSpaces.forEach(openSpace => {
            openSpace.removeEventListener('click', handleBoomSpace);
            openSpace.classList.add('disabled-hover');
        });
        theButton.innerText = 'Try Again!';
        messagesDisplay.innerText = 'BOOM!'
    });
    }
}




    //depends on ability: 
//do a flagging system
//extra animations
//user-inputted grid size