//Find nd return the smallest number in an array of numbers

//1. Get a list of numbers
//2. Compare each number to the other numbers in the array
//3. Output the smallest number after comparison

'use strict'

let numList = [45, 3, 15, 63, -100, 7, 81, 16, 0, -35, 900];
let emptyList = []; //undefined

function getMinNum (arr) {
    let result = arr[0];
    for (let i=0; i<arr.length; i++) {
        if (arr[i] <= result) {
            result = arr[i];
        }
    }
    return result;
}

function getMaxNum(arr) {
    let result = arr[0];
    for (let i=0; i<arr.length; i++) {
        if (arr[i] >= result) {
            result = arr[i];
        }
    }
    return result;
}



function getSum (arr) {
    let result = 0;
    for (let j=0; j<arr.length; j++) {
        result += arr[j];
    }
    return result;
}

function average(arr) {
    return getSum(arr) / arr.length;
}

console.log('The smallest number in the array is', getMinNum(numList));
console.log('The largest number in the array is ', getMaxNum(numList));
console.log('The sum of the numbers in the list is ', getSum(numList));
console.log('The Average of all of the numbers in the list is ', average(numList));