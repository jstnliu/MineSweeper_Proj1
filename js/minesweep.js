    //Necessary Constants
const GAME_BOARD_ID = 'game-board';
const MESSAGES_DISPLAY = 'messages-display';
const THE_BUTTON = 'the-button';
const INITIAL_BOMB_TOTAL = 0
const INITIAL_OPEN_TOTAL = 0

    //State Variables
let totalBoomSpaces;
let totalOpenSpaces;

    //Cached Element References
//'You win' or 'You lose' element 
const messagesDisplay = document.getElementById(MESSAGES_DISPLAY);
//Where Tiles Are Generated
const gameBoard = document.getElementById(GAME_BOARD_ID);
//Start/Restart/Replay Button
const theButton = document.getElementById(THE_BUTTON);

    //Tile Spaces Variables
//Sets Height and Width
//Can Be Adjusted Accordingly for Future Versions of Game
let gridSize = 10;
//Sets Parts In Place for Eventual gameBoard
const totalTiles = gridSize * gridSize;

    //Click Events
//Start/Restart/Replay Button Functionality
theButton.addEventListener('click', initializeGame);


    //Code To Run "Minesweeper"
//Starts Actual Game
function initializeGame() {
    //'Start' Button Now 'Restart' Button
    theButton.innerText = 'Restart';
    //What Lets All Tiles/Spaces Into Board
    gameBoard.innerHTML = '';
    //Ensures 'BOOM' and 'Open' Space Counters Start @ Zero
    totalBoomSpaces = INITIAL_BOMB_TOTAL;
    totalOpenSpaces = INITIAL_OPEN_TOTAL;
    //Loads gameBoard with Elements for Game
    render();
}

function render() {
    //Game Start Message
    messagesDisplay.innerText = 'Watch Where You Click, There Are Booms All Around!';
    //Create Tile Spaces
    createTileSpaces();
}

function createTileSpaces() {
//Makes 100 Tiles 
    for (let i = 0; i < totalTiles; i++){
        const tile = createGameTiles();
    //Numbers Each Tile
        tile.setAttribute('id', i);
    //Adds Tiles to gameBoard
        gameBoard.appendChild(tile);
    };
}

function createGameTiles() {
    //Create Game Spaces In Each Tile
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.style.backgroundColor = '#999';
    //Randomly Selects What Spaces Will Generate Mines 
    const randomNumber = Math.random() < 0.5;
        if (randomNumber) {
        //Assign 'BOOM' Space Properties
            tile.classList.add('boom-space');
            tile.innerText = "BOOM";
        //Keeps Track of How Many 'BOOM' Spaces There Are
            totalBoomSpaces++;
        //Make 'BOOM' Spaces Clickable
            tile.addEventListener('click', handleBoomSpace)
        } else {
        //Assign 'Open' Space Properties
            tile.classList.add('open-space');
        //Keeps Track of How Many 'Open' Spaces There Are 
            totalOpenSpaces++;
        //Make 'Open' Spaces Clickable
            tile.addEventListener('click', handleOpenSpace)
        };
    //Puts All Spaces on gameBoard
    return tile; 
}

function handleBoomSpace() {
    //Directs to 'Loss' Screen
    endGame(false);
}

function handleOpenSpace(event) {
    //Changes 'Open' Space Color After Being Clicked 
    event.target.style.backgroundColor = '#c4c4c4';
    //Disable Clicked 'Open' Space and Remove Active Properties
    event.target.removeEventListener('click', handleOpenSpace);
    event.target.classList.add('disabled-hover');
    //Subtracts from 'Open' Spaces Counter
    totalOpenSpaces--;
        //Checks for Win Condition
        //Condition Met When 'Open' Spaces Counter = Zero
        if (totalOpenSpaces === 0) {
            //Directs to 'Win' Screen
            endGame(true);
        };
}

//function endGame()
function endGame(isWinner) {
    //Selects All 'Open' and 'BOOM' Spaces, Respectively
    const openSpaces = document.querySelectorAll('.open-space');
    const boomSpaces = document.querySelectorAll('.boom-space');
        if (isWinner) {
    //endGame(true)
        //Change to 'Win' Message
        messagesDisplay.innerText = 'Congrats, Booms Avoided!';
        //'Restart' Button Is Now 'Replay' Button
        theButton.innerText = 'Replay!';
            openSpaces.forEach(openSpace => {
        //Plays Animation for All 'Open' Spaces Upon Win
                openSpace.style.backgroundColor = '#99ff99'
                openSpace.innerText = 'ʘ ‿ ʘ';
                openSpace.classList.add('spin');
        //Disables All boomSpaces from Being Clicked After Win
                    boomSpaces.forEach(boomSpace => {
                    boomSpace.removeEventListener('click', handleBoomSpace);
                    boomSpace.classList.add('disabled-hover');
                });
            });
        } else {
    //endGame(false)
            boomSpaces.forEach(boomSpace => {
        //Reveals All 'BOOM' Spaces Upon Loss and Plays Animation 
                boomSpace.style.backgroundColor = '#ff7575';
                boomSpace.innerText = '✖╭╮✖';
                boomSpace.classList.add('rumble');
        //Disables All 'BOOM' Spaces' Click and Hover Properties
                boomSpace.removeEventListener('click', handleBoomSpace);
                boomSpace.classList.add('disabled-hover');
        //Disables All Remaining 'Open' Spaces' Click and Hover Properties
                    openSpaces.forEach(openSpace => {
                    openSpace.removeEventListener('click', handleOpenSpace);
                    openSpace.classList.add('disabled-hover');
                });
        //'Restart' Button Now 'Try Again' Button
        theButton.innerText = 'Try Again!';
        //'Lose' Message
        messagesDisplay.innerText = 'BOOM!'
            });
        };
}
