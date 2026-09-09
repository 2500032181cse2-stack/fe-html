// 1. COMMENTS
// This is a single-line comment

/* This is a
   multi-line comment */


// 2. VARIABLES
var oldVariable = "Hello";
let age = 25;
const country = "India";


// 3. DATA TYPES
let name = "Malli";          // String
let marks = 90;             // Number
let isStudent = true;       // Boolean
let value = null;           // Null
let result;                 // Undefined
let sub = ["FEWD", "AIML"]; // Array


// 4. OPERATORS
let a = 10;
let b = 5;

console.log(a + b);   // Addition
console.log(a - b);   // Subtraction
console.log(a * b);   // Multiplication
console.log(a / b);   // Division
console.log(a > b);   // Comparison


// 5. TYPE CONVERSION
let textNumber = "100";
let number = Number(textNumber);

console.log(number + 20); // 120


// 6. INPUT AND OUTPUT
let userName = prompt("Enter your name");

console.log("Hello " + userName);
alert("Welcome " + userName);


// 7. CONTROL STATEMENTS
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

for (let i = 1; i <= 3; i++) {
    console.log(i);
}


// 8. FUNCTIONS
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Ravi"));


// 9. ARRAY
let colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // Red

for (let color of colors) {
    console.log(color);
}


// 10. OBJECT
let student = {
    name: "Ravi",
    age: 20,
    course: "JavaScript"
};

console.log(student.name);
console.log(student.course);