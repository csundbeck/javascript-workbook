'use strict'

const initArr = [1,2,3,3,4,5,7,7,7,9];

//Add the index from the first array to the econd, only if that index does not already exist in the second (skip if it does.)
function removeDupes(arr) {
    let resultArr = [];
    for (let i=0; i < arr.length; i++) {
        if (resultArr.includes(arr[i])) {
            //If true, skip to the else
            continue;
        } else {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}

console.log(removeDupes(initArr));

console.log('///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////');

function print(element, index) {
    console.log(`${element} is at the index is ${index}`)
}

let array1 = ['Jack', 'John', 'James', 'Justin', 'Jared'];

array1.forEach(print);

console.log('///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////');

let jack = {
    name: 'Jack Black',
    role: 'Development Manager',
    phone: '512-965-9113',
    email: 'jblack@thisisfake.com',
    company: 'ACME Co.'
}

let john = {
    name: 'John Doe',
    role: 'VP of Sales',
    phone: '512-914-8475',
    email: 'jdoe@thisisfake.com',
    company: 'This is Fake Industries'
}

let leads = [john, jack];

function personalLetter(element, index) {
    console.log(`
        Hi ${element.name},

        I understand that you are the ${element.role} at ${element.company}.
        Is your email still ${element.email}?
        I would like to setup a time to demo this cool product for you.
        Can I call you at ${element.phone} tomorrow?

        Thanks,
        Connor
    `);
}

leads.forEach(personalLetter);

console.log('///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////');

//forEach() from scratch
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

console.log(forEach(leads, personalLetter));

('///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////');

//Mastermind help!!!

function exactMatches(array1, array2) {
    return numExact;
}

function fuzzyMatches(array1, array2) {
    return numFuzzy;
}

let a1 = ['a','b','c','d'];
let a2 = ['a','a','b','b'];

console.log(exactMatches(a1, a2));
console.log(fuzzyMatches(a1, a2));