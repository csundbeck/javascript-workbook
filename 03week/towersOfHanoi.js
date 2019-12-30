'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//move the top (last iitem in the array) piece from the startstack to the top of the endstack
//when deciding where to move pieces, use stacks[startStack] and stacks[endStack]
function movePiece(startStack, endStack) {
  let itemToMove = stacks[startStack].pop();
  stacks[endStack].push(itemToMove);
}

//return true if the move is legal
//return false if the move is illegal
//legal move if:
//the startstack has at least 1 piece && (endstack is empty || when top piece of startstack is less than top piece of end stack)
function isLegal(startStack, endStack) {
  let lengthOfStart = stacks[startStack].length;
  let lengthOfEnd = stacks[endStack].length;

  if (lengthOfStart != 0 && (lengthOfEnd == 0 || (stacks[endStack][lengthOfEnd-1] > stacks[startStack][lengthOfStart-1]))) {
    return true;
  } else {
    return false;
  }
}

//Return true if player won
//Return false if player did not win
//a win is when all 4 blocks are in either stack b or stack c 
function checkForWin() {
  if (stacks["b"].length === 4) {
    return true;
  } else if (stacks["c"].length === 4) {
    return true;
  } else {
    return false;
  }
}

//takes in user input for tartstack and endstack and digitally plays the round
function towersOfHanoi(startStack, endStack) {
  // Your code here
  //check if the move is legal
  //if move is legal
  //   -move the piece
  //   -check if they won (tell them that they won)
  //else If move is not legal
  //   -tell them the move is not legal
  //check to see if they won
  //    -tell them they won!
  if (isLegal(startStack, endStack) === true) {
    movePiece(startStack, endStack);
    if (checkForWin() === true) {
      console.log("You win!!!");
    }
  } else {
    console.log('That move is not legal. Please try again...');
  }
  // checkForWin();
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      if (checkForWin() === true) {
        return true;
      } else {
        getPrompt();
      }
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
