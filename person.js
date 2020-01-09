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

module.exports = person;