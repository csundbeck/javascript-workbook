//WARM-UP
const array1 = ["john", "mark", "matt", "bob"];
const array2 = ["jim", "mark","andrew", "matt"];

/*
    testDiff => {
        shared: ["mark", "matt"],
        sideA: ["john", bob""],
        sideB: ["jim", "andrew"]
    }
*/

//For each element in the first array, check to see if it exists in the second array
//If it does, it is a shared element. Else, it is a sideA element
//For each element in the second array, check to see if it exists in the first Array
//If it does not, add it to the second array

function diff(arr1, arr2) {
    var result = {
        shared: [],
        sideA: [],
        sideB: []
    };

    for (let i=0; i<arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            result.shared.push(arr1[i]);
        } else if (!arr2.includes(arr1[i])) {
            result.sideA.push(arr1[i]);
        }
    }

    for(let j=0; j<arr2.length; j++) {
        if (!arr1.includes(arr2[j])) {
            result.sideB.push(arr2[j]);
        }
    }

    return result;
}

var testDiff = diff(array1, array2);

console.log("The shared elements are ", testDiff.shared);
console.log("The side A elements are ", testDiff.sideA);
console.log("The side B elements are ", testDiff.sideB);

console.log('//////////////////////////////////////////////////////////////////////////////////////');

class Car {
    //engine
    //passengerCapacity
    constructor (engineSize, passengerCapacity, make, model) {
        this.engineSize = engineSize;
        this.passengerCapacity = passengerCapacity;
        this.make = make;
        this.model = model;
    }
    description() {
        return `A ${this.make} ${this.model} with a ${this.engineSize} cylinder engine with a capacity of ${this.passengerCapacity} passengers.`;
    }
}

let myCar = new Car(4, 5, 'Honda', 'Civic');

console.log(myCar.description());

class Truck extends Car {
    constructor (engineSize, passengerCapacity, make, model, bedSize) {
        super(engineSize, passengerCapacity, make, model);
        this.bedSize = bedSize;
    }
    description() {
        return `A ${this.make} ${this.model} with a ${this.engineSize} cylinder engine with a capacity of ${this.passengerCapacity} passengers, and a ${this.bedSize} bed.`;
    }
}

let someTruck = new Truck(8, 5, "Ford", "F-150", "Long");
console.log(someTruck.description());

class Sedan extends Car{
    constructor (engineSize, passengerCapacity, make, model, trunkSize, isHatchBack) {
        super(engineSize, passengerCapacity, make, model);
        this.trunkSize = trunkSize;
        this.isHatchBack = isHatchBack;
    }
    
}