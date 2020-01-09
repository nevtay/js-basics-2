const dog = {
    name: 'Zeus',
    bark: function() {
        return `woof, I'm ${this.name}!`;
    }
}

module.exports = dog;