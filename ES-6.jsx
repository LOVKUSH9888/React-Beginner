/*########## ES-6 ###############*/

const { func } = require("prop-types");

//Classes :-)
class Car {
    constructor(name, value) {
        this.brand = name;
    }
}

//Arrow-Function:-
hello = function(){
    return "Hello Lovkush"
}

hello = () => {
    return "hello World!"
}

//Variables :-)
var x = 5;
let y = 6;
const z = 10;

//Array Method :-)
const myArray = ['apple', 'orange', 'Mango'];

//The .map() method allows you to run a function on each item in the array, returning a new array as the result.
const myList myArray.map((item) => {item})


//Array-Destructuring :-)
//Destructuring makes it easy to extract only what is needed.

const vehicles = ['mustang', 'Ferrari', 'BMW'];
console.log(vehicles);

const numbers = [1, 2, 3];
//With Destructuring
const [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

//By-Using-Function;-
function calculate(a, b){
    const add = a+b;
    const subtract = a-b;
    const multiply = a*b;
    const divide = a/b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4,7);

console.log(add);
console.log(subtract);
console.log(multiply);
console.log(divide);

//Ternary-operator
//The ternary operator is a shorthand way of writing an if...else statement in JavaScript
// returns one value if a condition is true, and another value if the condition is false.
//Syntax:-
condition ? value1 : value2

const age = 21;
console.log(age);

const isAdult = age >= 18 ? 'yes' : 'no';
console.log(isAdult);

