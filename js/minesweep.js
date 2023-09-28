    //Necessary Constants
//const AUDIO
//const PNGs
const GAME_BOARD_ID = 'game-board';
const MESSAGES_DISPLAY = 'messages-display';
const THE_BUTTON = 'the-button';
const INITIAL_BOMB_TOTAL = 0
const INITIAL_OPEN_TOTAL = 0

    //State Variables
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
    for (let i = 0; i < totalTiles; i++){
        const tile = createGameTiles();
        tile.setAttribute('id', i);
        gameBoard.appendChild(tile);
    };
}

function createGameTiles() {
    //create game spaces
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.style.backgroundColor = '#999';
    //randomly place newly generated mines 
    const randomNumber = Math.random() < 0.5;
        if (randomNumber) {
        //function createMineSpaces (Somewhat achieved in 'createGameTiles')
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
    };
    return tile; 
}

function handleBoomSpace() {
    endGame(false);
}

function handleOpenSpace(event) {
    //click on space to 'reveal' 
    //check for open space or bomb space
    event.target.style.backgroundColor = '#c4c4c4';
    //disabling clicked openSpaces
    event.target.removeEventListener('click', handleOpenSpace);
    event.target.classList.add('disabled-hover');
    totalOpenSpaces--;
    if (totalOpenSpaces === 0) {
        //check for win
        endGame(true);
    };
}

//function endGame()
function endGame(isWinner) {
    const openSpaces = document.querySelectorAll('.open-space');
    const boomSpaces = document.querySelectorAll('.boom-space');
        if (isWinner) {
        messagesDisplay.innerText = 'Congrats, Booms Avoided!';
        theButton.innerText = 'Replay!';
        openSpaces.forEach(openSpace => {
            openSpace.innerText = 'ʘ‿ʘ';
            openSpace.classList.add('spin');
                boomSpaces.forEach(boomSpace => {
                boomSpace.removeEventListener('click', handleBoomSpace);
                boomSpace.classList.add('disabled-hover');
            });
        });
    } else {
            boomSpaces.forEach(boomSpace => {
        //reveal mines upon loss and shake
                boomSpace.style.backgroundColor = '#ff7575';
                boomSpace.innerText = '✖╭╮✖';
                boomSpace.classList.add('rumble');
        //disable boomSpaces click and hover properties
                boomSpace.removeEventListener('click', handleBoomSpace);
                boomSpace.classList.add('disabled-hover');
        //disable remaining openSpaces click and hover properties
                    openSpaces.forEach(openSpace => {
                    openSpace.removeEventListener('click', handleOpenSpace);
                    openSpace.classList.add('disabled-hover');
            });
        theButton.innerText = 'Try Again!';
        messagesDisplay.innerText = 'BOOM!'
        });
    };
}
