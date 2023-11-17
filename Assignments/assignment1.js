// Q1 Q.1] Write JavaScript code to compare a number and a string. For example, compare 5 (number) and "5" (string) and 
// explain the result. Is there a difference between == and === when comparing these values?
const number = 5; // number
const string = "5"; //string
console.log(number == string); // ture 
//because equality operator only checks value 
console.log(number === string); // false 
// because stricly euqality operator checks value as well as data type 

//Q.2] Explain the difference between primitive data types (e.g., numbers, strings, booleans) and 
//non-primitive data types (objects) in JavaScript in terms of where they are stored in memory.
// Provide an example of a primitive data type and a non-primitive data type, and describe how they behave in memory.

//primitive datatype stores value in stack , it is call by value
//non primitive datatype stores value in heap storage , it is call by reference

//Q.3] Write a code to print the typeof return value for all primitive and non-primitive datatypes.

let Pranav;
// typeof Pranav 
console.log(typeof Pranav);

let Pranav1;
// typeof Pranav1
console.log(typeof "Pranav1");

let age=18;
// typeof age
console.log(typeof age);

//typeof bigint
const bigInt = 1234567890
console.log(typeof bigInt);

let boolTrue = true;
// typeof boolTrue
console.log(typeof boolTrue);


let obj1 = {
    name: "Pranav2212",
    rolNO: 18,
    dept: "IT"
  }
console.log(typeof {obj1} );

// Q.4] Explain prefix and postfix with an example.

let x=10
x++ //postfix increment 
console.log(x)
++x 
console.log(x)


// Q.5] Explain the concept of weakly typed in JavaScript.


// let num=10  // num=10
// {
//     let num=2//num=2
// }
// //num=10 here
// console.log(num);

// var num2=10
// {

// var num2=2
// }
// //num2=2 here
// console.log(num2);



//weeekly typed
let num5= 5
console.log(num5 + "1")

let num1 = 10;
let num11 = "5";
let sum = num1 + num11;
console.log(sum);    //105
