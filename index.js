// Array map() Method
// The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array.
// Generally map() method is used to iterate over an array and calling function on every element of array.

const array = [2, 4, 8, 12, 32, 64]

// With arrow function expression

const mapResult = array.map(num =>
    num * 2)

// With traditional function expression

// const mapResult = array.map(someFunction);

// function someFunction(num) {
//     return num * 2;
// }
console.log(mapResult);

// Another example
// const mapResult = array.map(num => num ** 2)


const fruits = [
    'Avocado',
    'Apple',
    'Strawberry',
    'Watermelon'
];
console.log(fruits.map(fruits => fruits.length));

// Array reduce() Method

// To sum all the amounts in an array

const reduceResult = array.reduce((sum, item) => sum + item)

console.log(reduceResult);

// Reduce accepts two parameters, the total and the current amount.

const money = [12.36, 20.53, 57.21];

const sum = money.reduce((acc, amount) => acc + amount);

console.log(sum);