//Array of numbers that is sorted and find the specific number
//Binary Search

//Bubble sort
let array = [0,3,0,1,12,8];

function bubbleSort(arr) {
    let len = arr.length;
    let flipped;
    do {
        flipped = false;
        for(let i=0; i<len-1;i++) {
            if (arr[i+1] < arr[i]) {
            //create a variable to hold the variable of the following value
            let temp = arr[i+1];
            //whatever is in position i should move to position i+1
            arr[i+1] = arr[i];
            //whatever is in position i+1 should move to position i
            arr[i] = temp;
            flipped = true;
            }
        }
    } while (flipped);
    return arr;
}

console.log(bubbleSort(array));