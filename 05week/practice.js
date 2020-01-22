let numArray = [1,2,3,4,5,6,7,8,9];


let squaredArr = numArray.map(function(element) {
    return element * element;
});

let fiteredArr = squaredArr.filter(function(element) {
    return element % 4 === 0;
});

let reducedArr = fiteredArr.reduce(function(prev, curr) {
    return prev + curr;
});

//Same thing here
// let reducedArr = numArray.map(function(element) {
//     return element * element;
// }).filter(function(element) {
//     return element % 4 === 0;
// }).reduce(function(prev, curr) {
//     return prev + curr;
// });

console.log('The total of the squared, filtered array is ' + reducedArr);

console.log('////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////');

//OOP practice
class Person {
    constructor(iName, iHeight, iGender, iAge) {
        this.name = iName;
        this.height = iHeight;
        this.gender = iGender;
        this.inches = iHeight % 12;
        this.feet = (iHeight - this.inches)/12;
        this.age = iAge;
    }
    sayHi() {
        return `Hi, my name is ${this.name}`;
    }

    makeOlder() {
        this.age++;
    }
    
    getNiceHeight() {
        let inches = this.height % 12;
        let feet = (this.height-inches)/12;

        return `${feet} feet, ${inches} inches`;
    }
}

let connor = new Person("Connor", 70, "Male");

console.log(connor.name + ' is ' + connor.getNiceHeight() + ' tall');

console.log('////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////');

//make a class that represents an Address

class Address {
    constructor(iNumber, iStreet, iCity, iState, iZip) {
        this.number = iNumber;
        this.street = iStreet;
        this.city = iCity;
        this.state = iState;
        this.zip = iZip;
    }
    
    generateString() {
        return `${this.number} ${this.street}
        ${this.city}, ${this.state} ${this.zip}`;
    }

}

let ACA = new Address(314, "Highland Mall Blvd", "Austin", "TX", 78752);
console.log(ACA.generateString());

//make a class the represents a DriversLicense

class License {
    constructor(iName, iNumber) {
        this.name = iName;
        this.number = iNumber;
        this.address = new Address(1234, "Main Street", "Austin", "TX", 78734);
    }
    
    updateAddress(someAddress) {
        this.address = someAddress;
    }
}

let d1 = new License("John Doe", "145728");

console.log(`${d1.name} lives at ${d1.address.generateString()}`);