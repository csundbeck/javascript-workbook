let i = 1

do {
    console.log(i);
    i++;
} while (i <= 1000);

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}
let key;

for (key in person) {
    const lastYear = person[key].charAt(person[key].length-1)
    if (key == 'birthDate' && parseInt(lastYear) % 1 == 0) {
        console.log(person[key]);
    }
}

let persons = [
{
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
},
{
    firstName: "Rick",
    lastName: "James",
    birthDate: "May 17, 1956",
    gender: "male"
},
{
    firstName: "Jennifer",
    lastName: "Simons",
    birthDate: "Oct 12, 1997",
    gender: "female"
},
{
    firstName: "Connor",
    lastName: "Sundbeck",
    birthDate: "Jan 21, 1996",
    gender: "male"
}
];

let newPersons = persons.map(function(element) {
    console.log(`${element.firstName} ${element.lastName} was born on ${element.birthDate} and is a ${element.gender}.`);
});

console.log(newPersons);

let malesOnly = persons.filter(function(element) {
    return element.gender == 'male'
})

console.log(malesOnly);

let pre1990 = persons.filter(function(element) {
    return Date.parse(element.birthDate) < Date.parse("Jan 1, 1990");
});

console.log(pre1990);