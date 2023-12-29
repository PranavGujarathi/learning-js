
const number = 56;                      // primitive way of declaring Number 
console.log(typeof number);             //number 


let number1 = new Number(78);           // Number as a object 
console.log(typeof number1);           //object
console.log(number1);

let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals


// Extra large or extra small numbers can be written with scientific (exponent) notation:

let x1 = 123e5;    // 12300000
let y1 = 123e-5;   // 0.00123



// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

let x2 = 999999999999999;   // x will be 999999999999999
let y2 = 9999999999999999;  // y will be 10000000000000000

// Floating point arithmetic is not always 100% accurate:
// 0.2 + 0.1 = 0.30000000000000004

let x3 = 0.2 + 0.1;

// To solve the problem above, it helps to multiply and divide:

let x4 = (0.2 * 10 + 0.1 * 10) / 10;

// But it helps to multiply and divide:
// 0.2 + 0.1 = 0.3

//--------------------------------------------------------------


// If you add two numbers, the result will be a number:

let x5 = 10;
let y5 = 20;
let z5 = x5 + y5;

// If you add two strings, the result will be a string concatenation:

let x6 = "10";
let y6 = "20";
let z6 = x6 + y6;
console.log(z6);              //1020

// If you add a number and a string, the result will be a string concatenation:

let x7 = 10;
let y7 = "20";
let z7 = x7 + y7;
console.log(z7);              //1020


// If you add a string and a number, the result will be a string concatenation:

let x8 = "10";
let y8 = 20;
let z8 = x8 + y8;
console.log(z8);           //The result is: 1020


// A common mistake is to expect this result to be 30:

let x9 = 10;
let y9 = 20;
let z9 = "The result is: " + x9 + y9;
console.log(z9);                      //The result is: 1020


// A common mistake is to expect this result to be 102030:


let x10 = 10;
let y10 = 20;
let z10 = "30";
let result = x10 + y10 + z10;
console.log(z10);                  //3030

// The JavaScript interpreter works from left to right.
// First 10 + 20 is added because x and y are both numbers.
// Then 30 + "30" is concatenated because z is a string.


// Numeric Strings

let x11 = 100;         // x is a number

let y11 = "100";       // y is a string




// JavaScript will try to convert strings to numbers in all numeric operations:

// This will work:

let x12 = "100";
let y12 = "10";
let z12 = x12 / y12;             //10

// This will also work:

let x13 = "100";
let y13 = "10";
let z13 = x13 * y13;             //1000

// And this will work:

let x14 = "100";
let y14 = "10";
let z14 = x14 - y14;             //90

// But this will not work:

let x15 = "100";
let y15 = "10";
let z15 = x15 + y15;             //10010

// In the last example JavaScript uses the + operator to concatenate the strings.


// NaN - Not a Number

// NaN is a JavaScript reserved word indicating that a number is not a legal number.

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

let x16 = 100 / "Apple";          //NaN

// However, if the string is numeric, the result will be a number:

let x17 = 100 / "10";            //10

// You can use the global JavaScript function isNaN() to find out if a value is a not a number:

let x18 = 100 / "Apple";
isNaN(x18);                      // true


// Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:

let x19 = NaN;
let y19 = 5;
let z19 = x19 + y19;             //NaN

// Or the result might be a concatenation like NaN5:

let x20 = NaN;
let y20 = "5";
let z20 = x20 + y20;             //NaN5



// NaN is a number: typeof NaN returns number:

typeof NaN;         //number




//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Number Methods

// Method	                   Description
// toString()	               Returns a number as a string
// toExponential()	           Returns a number written in exponential notation
// toFixed()	               Returns a number written with a number of decimals
// toPrecision()	           Returns a number written with a specified length
// ValueOf()                   Returns a number as a number


// The toString() Method

// The toString() method returns a number as a string.

let x21 = 123;
x21.toString();           // string 


// The toExponential() Method
// toExponential() returns a string, with a number rounded and written using exponential notation.

// A parameter defines the number of characters behind the decimal point:

let x22 = 9.656;
x22.toExponential(2);         //  9.66e+0
x22.toExponential(4);        //9.6560e+0
x22.toExponential(6);       //9.656000e+0


// The toFixed() Method
// toFixed()......  ==> round off the value 
// toFixed() returns a string, with the number written with a specified number of decimals:

let x23 = 9.656;
x.toFixed(0);              //10
x.toFixed(2);             //9.66
x.toFixed(4);            //9.6560
x.toFixed(6);           //9.656000


// The toPrecision() Method
// toPrecision() returns a string, with a number written with a specified length:

let x24 = 9.656;
x.toPrecision();            //9.656
x.toPrecision(2);          //9.7
x.toPrecision(4);         //9.656
x.toPrecision(6);        //9.65600

// extra 
// for more Number property........
// ==>browser,console window,create number object,
// print variable ,you will get all method
// Number. ==> more methods 


// Converting Variables to Numbers
// There are 3 JavaScript methods that can be used to convert a variable to a number:

// Method	          Description
// Number()	          Returns a number converted from its argument.
// parseFloat()	      Parses its argument and returns a floating point number
// parseInt()	      Parses its argument and returns a whole number


const rValue = parseInt(Math.random() *10+1)
console.log(rValue);


const rValue1 = parseFloat(Math.random() *10+1)
console.log(rValue1);














