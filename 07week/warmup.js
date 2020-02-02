// let secret = "Don't tell anyone";
// secret = secret.split('');
// console.log(secret);
// let key = [4, 89, 16, 0, 120, 206];

// for (let i=0; i<255; i++) {
//     secret[i] = i;
// }

// let j = 0;
// for (let i=0; i<secret.length; i++) {
//     j = (j + secret[i] + key[i%key.length]) % 256;
//     temp = secret[i];
//     secret[i] = secret[j];
//     secret[j] = temp;
// }

// console.log(secret);


// THURSDAY 01/30/2020
//Go through the Fibonacci sequence and ad up all of the numbers 
//that are even up to the value 200 in the sequence
let first = 1
let second = 2
let next = 0;
let evensArray = [];

evensArray.push(second);

do {
    if (next % 2 == 0 && next !== 0) {
        evensArray.push(next);
    }

    next = first + second;
    first = second;
    second = next;

} while (next < 200)

let evensArrayTotal = evensArray.reduce(function(curr, prev){
    return curr + prev;
})
console.log('evensArray = ', evensArray);
console.log('evensArrayTotal = ', evensArrayTotal);