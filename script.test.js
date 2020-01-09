const assert = require("assert");
const dog = require("./dog");
const person = require("./person");

assert.strictEqual(dog.name, "Zeus");
assert.strictEqual(dog.bark(), "woof, I'm Zeus!");
assert.strictEqual(person.firstName, 'Nevin');
assert.strictEqual(person.lastName, 'Tay');
assert.strictEqual(person.age(), 28);

// console.clear();

// the three commands below are identical
// 1. npm run-script testnp
// 2. npm run test
// 3. npm test

console.log('\n no errors, good job!')