
<div align = 'center'>

# *Nine Tweeper*

</div>

---

*Nine Tweeper* is a *Mine Sweeper*-inspired game that involves having to clear out all the tiles while avoiding all the 'BOOMS' randomized throughout the board!

## In-Game Images 

>![Start Screen](<img/startscreen.png>)

>![Start of a new game!](<img/beginninggame.png>)

>!['Loss' Screen](<img/losescreen.png>)

>!['Win' Screen](<img/winscreen2.png>)

<div align = 'center'>

## Technologies Used

</div>

---

>![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) 
![HTML Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) 
![CSS Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) 
![Git Badge](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) 
![Github Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

<div align = 'center'>

## Getting Started

</div>

---

>### [Nine Tweeper Live Link](https://jstnliu.github.io/MineSweeper_Proj1/)

### Instructions

Do your best to clear the board without clicking any 'BOOM' spaces, or else it's Game Over!

## (Half of) The Final Piece of Code!

---

```js
function endGame(isWinner) {
    const openSpaces = document.querySelectorAll('.open-space');
    const boomSpaces = document.querySelectorAll('.boom-space');
        if (isWinner) {
                    .
                    .
                    .
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
```
>The above code is part of the longest function that I have written for this game. As the name suggests, it expresses what to do when the user has either won the game or when they've accidentally clicked on a 'BOOM' space and executes code according to the required condition. I had the most trouble getting it to work properly because of the sheer length that it had. Ironically, I only realized I had the final two lines for ```theButton``` and ```messagesDisplay``` elements nested incorrectly after I implemented *even more* code into ```endGames``` functionality.

## Only Up From Here!

---

### *Nine Tweeper* is only at MVP; in the future, I'd like to:

- [ ] Create revealOpenSpaces function that reveals surrounding spaces that don't carry a 'BOOM'
- [ ] Create countBooms function that tells the player how many 'BOOM' spaces are around revealed spaces
- [ ] Following completion of above, remove the 'BOOM' text in respected places
- [ ] Add a 'flagging' system like the one in the original *Mine Sweeper*
- [ ] Create a difficulty option (ie. Easy: 10 x 10 grid/ 20 grid, Medium: 25 x 25 grid, Hard: 100 x 100 grid)
- [ ] Custom grid size based off of user input
