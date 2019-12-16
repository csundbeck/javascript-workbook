'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//indexOf()
//subString(startIndex, endIndexExcluded)
//startsWith()
//if word starts with a vowel, add 'yay' to the end. (egg becomes eggyay)
//If word has a vowel in the middle, split the word in two at the middle, swap the parts, and add 'ay' to the end (cat becomes atcay)
//how to solve if a word has no vowel
function pigLatin(word) {
  console.log('The original word is', word);
  word = word.trim();
  word = word.toLowerCase();
  if (word.indexOf('a') === 0 || word.indexOf('e') === 0 || word.indexOf('i') === 0 || word.indexOf('o') === 0 || word.indexOf('u') === 0) {
    let newWord = word + 'yay';
    return newWord;
  }


  for (let i = 1; i < word.length; i++) {
    if (word[i] === 'a') {
      let firstSub = word.substring(0, word.indexOf('a'));
      let secondSub = word.substring(word.indexOf('a'));
      let newWord = secondSub + firstSub + 'ay';
      return newWord;
    } else if (word[i] === 'e') {
      let firstSub = word.substring(0, word.indexOf('e'));
      let secondSub = word.substring(word.indexOf('e'));
      let newWord = secondSub + firstSub + 'ay';
      return newWord;
    } else if (word[i] === 'i') {
      let firstSub = word.substring(0, word.indexOf('i'));
      let secondSub = word.substring(word.indexOf('i'));
      let newWord = secondSub + firstSub + 'ay';
      return newWord;
    } else if (word[i] === 'o') {
      let firstSub = word.substring(0, word.indexOf('o'));
      let secondSub = word.substring(word.indexOf('o'));
      let newWord = secondSub + firstSub + 'ay';
      return newWord;
    } else if (word[i] === 'u') {
      let firstSub = word.substring(0, word.indexOf('u'));
      let secondSub = word.substring(word.indexOf('u'));
      let newWord = secondSub + firstSub + 'ay';
      return newWord;
    }
  }
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
