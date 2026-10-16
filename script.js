const fullName = "Kamila Rakanova";
let age = 18;
const isStudent = true;
let favouriteColour = "Blue";
console.log(fullName, typeof fullName);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);
console.log(favouriteColour, typeof favouriteColour);
favouriteColour = "Green";
console.log("New colour:", favouriteColour);

let yourName = prompt("What's your name?");
alert("Hi, " + yourName + ".");
let myName = "Kamila";
let group = "MT=2503";
console.log("I am " + myName + " and my group is " + group);

let a = Number(prompt("Enter any 1st number: "));
let b = Number(prompt("Enter any 2nd number: "));
console.log("Sum: ", a + b);
console.log("Difference: ", a - b);
console.log("Product: ", a * b);
console.log("Quotient: ", a / b);
console.log("Remainder: ", a % b);

let name = "Kamila Rakanova";
console.log("Length:", name.length);
console.log("Uppercase:", name.toUpperCase());
console.log("Lowercase:", name.toLowerCase());
console.log("First 3 characters:", name.slice(0, 3));
let first = "I am";
let second = "a student";
console.log(first + " " + second + ".");

let counter = 10;
counter++;
console.log(counter);
counter--;
console.log(counter);
counter += 5;
console.log(counter);
counter -= 3;
console.log(counter);
counter *= 2;
console.log(counter);
counter /= 4;
console.log(counter);


let dogAge = 2;
let humanAge = (dogAge - 2) * 4 + 21;
console.log("Dog age:", dogAge, "Human age:", humanAge);
dogAge = 5;
humanAge = (dogAge - 2) * 4 + 21;
console.log("Dog age:", dogAge, "Human age:", humanAge);


function greetUser(name)
 {
    console.log("Hi, " + name + "!");
 }
function calculateSum(a, b)
 {
    return a + b;
 }
function calculateRectangleArea(width, height)
 {
    return width * height;
 }
greetUser(yourName);
greetUser("Kamila");
greetUser("Amina");
console.log(calculateSum(5, 2));
console.log(calculateSum(254, 789));
console.log(calculateRectangleArea(5, 9));
console.log(calculateRectangleArea(6, 7));

