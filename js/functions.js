const input = document.querySelector('input');
const output = document.querySelector('output');
const span = document.querySelector('span');
var arvaukset = 0

const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext"
];

let randomizedWord = '';
let maskedWord = '';

const newGame = () => {
    const random = Math.floor(Math.random() * words.length);
    randomizedWord = words[random];
    maskedWord = "*".repeat(randomizedWord.length);
    console.log(randomizedWord);
    output.innerHTML = maskedWord;
    arvaukset = 0
};

const win = () => {
    alert(`You have guessed right, the word is ${randomizedWord}. You guessed ${arvaukset} times!`);
    newGame();
};

const replaceFoundChars = (guess) => {
    guess = guess.toLowerCase();
    for (let i = 0;i  < randomizedWord.length; i++) {
        const char = randomizedWord.substring(i, i + 1).toLowerCase();
        if (char === guess) {
            let newString = maskedWord.split('');
            newString.splice(i,1,guess);
            maskedWord = newString.join('');
        }
    }
    output.innerHTML = maskedWord;
}
newGame();

input.addEventListener('keypress',(e) => {
    if (e.key === 'Enter') {
        e.preventDefault();

        const guess = input.value;
        if (guess.toLowerCase() === randomizedWord.toLowerCase()) {
            win();
        } else if (guess.length === 1) {
            replaceFoundChars(guess);
            if (maskedWord.toLocaleLowerCase() === randomizedWord.toLocaleLowerCase()) {
                win();
            }
        } else {
            alert("You guessed wrong!");
        }
        input.value='';

        arvaukset++;
    }
});