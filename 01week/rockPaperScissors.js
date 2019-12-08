'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//hand1
//hand2
//if hand1 === hand2 return "It's a tie!"
//If hand1 is the winning hand, return hand1 wins
//If hand2 is the winning hand, return hand2 wins
function rockPaperScissors(hand1, hand2) {
  var formatH1 = (hand1.trim()).toLowerCase();
  let formatH2 = (hand2.trim()).toLowerCase();

//If hand is paper, rock, or scissors, continue with comparison. Else return that the input is not valid.
if (((formatH1 === "paper" || formatH1 === 'rock' || formatH1 === 'scissors')) && (formatH2 === "paper" || formatH2 === 'rock' || formatH2 === 'scissors')) {
  if (formatH1 === formatH2) {
    return "It's a tie!";
  } else {
    //Scenarios for hand1 to win. Else hand2 wins. 
      if ((formatH1 === 'rock' && formatH2 === 'scissors') || 
           (formatH1 === 'paper' && formatH2 === 'rock') || 
           (formatH1 === 'scissors' && formatH2 === 'paper')) {
            return "Hand one wins!";
      } else {
        return "Hand two wins!";
      }
    }
  } else {
    return 'That is not a valid input.';
  } 
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
