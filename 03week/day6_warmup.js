//compare the first two words
function findLongestWord(sentence) {
    sentence = sentence.split(' ');
    let longestWord = sentence[0];

    for (let i=0; i < sentence.length; i++) {
        if (sentence[i].length > longestWord.length) {
            longestWord = sentence[i];
        }
    }
    return longestWord;
}

function printOutput() {
    let textAreaElement = document.getElementById('userInput');
    let mySentence = textAreaElement.value;
    console.log(mySentence);

    let theLongestWord = findLongestWord(mySentence);

    let output = document.getElementById('output');
    output.innerText = theLongestWord;
}