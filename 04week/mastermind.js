'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


//Display "0-1", "1-3" as appropriate. Compare the guess to the solution and generate what should be populated
//Use sting.split('') to convert the string into an array of comparison if needed
//Assign a null value where the first value in a guess string matches a value in the solution string
function generateHint(guess) {
  let exactMatches = 0;
  let fuzzyMatches = 0;
  let guessArr = guess.split('');
  let solnArr = solution.split('');

  for (let i=0; i < 4; i++) {
    //exact matches
    if (guessArr[i] == solnArr[i]) {
      exactMatches = exactMatches + 1;
      guessArr[i] = null;
      solnArr[i] = null;
    //fuzzy matches
    } else if (solnArr.includes(guess[i]) && guessArr.includes(solution[i]) && guessArr[i] != solnArr[i]) {
      fuzzyMatches = fuzzyMatches + 1;
    }
  }
  return exactMatches + '-' + fuzzyMatches;
}

//Set the index values to null when you have an exact match.
//Each character in the solution must match the corresponding character in the guess
function mastermind(guess) {
  //solution = 'abcd'; // Comment this out to generate a random solution
  generateSolution();
  // your code here

  if (guess === solution) {
    console.log('You guessed it!');
    return 'You guessed it!';
  }
  console.log(generateHint(guess));
}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    if (mastermind(guess) === true) {
      return true;
    } else {
    printBoard();
    getPrompt();
    }
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });
  });

} else {

  generateSolution();
  getPrompt();
}
