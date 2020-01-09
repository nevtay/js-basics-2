const dog = {
    name: 'Zeus',
    bark: function() {
        console.log(`woof, I'm ${this.name}!`);
    }
}

const person = {
    firstName:'Nevin',
    lastName: 'Tay',
    fullName: function() {
        console.log(`${this.firstName} ${this.lastName}`)
    },
    birthYear: 1992,
    age: function() {
        currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }   
}

let someString = 'someString';
console.log(someString.length);
someString.length = 200;
console.log(someString.length);
someString.toUpperCase();
someString.toLowerCase();
console.log(someString.replace('some', 'dome'));

let decimalNumber = 22.12345;
console.log(decimalNumber.toFixed(3));

const sum = (a, b)  => a + b;
console.log(sum.name);
console.log(sum.name.toString());


module.exports = {
    dog,
    person
};