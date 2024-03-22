let randomNum =parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const us_in = document.querySelector('#guessfield');
const prev_r = document.querySelector('.guesses');
const rem = document.querySelector('.lastres');
const lh = document.querySelector('.lh');
const startOver = document.querySelector('.res');

const p = document.createElement('p');

let prevGuess = [];
let newGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(us_in.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
     if(isNaN(guess)){
        alert('please enter a valid number');
     }else if(guess<1){
        alert('please enter a number strictly greater than 0');
     }
     else if(guess>100){
        alert('please enter a number less than or equal to 100');
     }else{
        prevGuess.push(guess);
        if(newGuess === 11){
            displayGuess(guess);
            displayMsg(`Game Over, Random Number was ${randomNum}`);
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
     }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMsg(`Congratulation! You won the Game.`);
        endGame();
    }
    else if(guess<randomNum){
        displayMsg(`your guessed number is too low`);
    }
    else{
        displayMsg(`your guessed number is too high`);
    }
}

function displayGuess(guess){
    us_in.value = ''
    prev_r.innerHTML += `${guess} `
    newGuess++;
    rem.innerHTML = `${11-newGuess}`
}

function displayMsg(msg){
    lh.innerHTML =`<h2> ${msg}</h2>`
}

function endGame(){
    us_in.value = '';
    us_in.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    startGame();
}

function startGame(){
const newGameButton =  document.querySelector('#newGame');
newGameButton.addEventListener('click',function(e){
randomNum = parseInt(Math.random()*100+1);
prevGuess = [];
newGuess =1;
prev_r.innerHTML = '';
rem.innerHTML = `${11-newGuess}`;
us_in.removeAttribute('disabled');
startOver.removeChild(p);
playGame = true;
    })

}

