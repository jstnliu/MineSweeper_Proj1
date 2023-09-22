    //Necessary Constants
//const AUDIO
//const PNGs
const GAME_BOARD_ID = document.getElementById('game-board');
const MESSAGES_DISPLAY = document.getElementById('messages-display');
const THE_BUTTON = document.getElementById('the-button');


    //Defining Variables
let results;


    //Cached Element References
//start/replay button
const theButton = document.getElementById(THE_BUTTON);
const gameBoard = document.getElementById(GAME_BOARD_ID);
//'you win' or 'you lose' element 
const messagesDisplay = document.getElementById(MESSAGES_DISPLAY);


    //Click Events (Use Event Delegation -Jim Clark)
//start/replay button
//addEventListener
theButton.addEventListener('click', initializeGame);


    //Code To Run Minesweeper
//initialize
function initializeGame() {
    theButton.disabled = true;
    theButton.style.display = 'none';
    gameBoard.innerHTML = '';
    render();
}

function render() {
    //update board
    
}




//function createTileSpaces
    //generate grid (trying for difficulty selection ie. 10x10 = easy, 25x25 = med, etc.)
    //randomly place newly generated mines 


//function createGameTiles
    //create game spaces
    //make game spaces clickable
    //check for win/loss/in-progress


    //click on space to 'reveal' 
    //check for open space or bomb space
    //if open, clear surrounding spaces/list number of mines around 3x3


    //else reveal mines upon loss (hopefully)
    //display a "death" message 
    //turn start button to restart button





    //depends on ability: 
//do a flagging system
//extra animations
//user-inputted grid size