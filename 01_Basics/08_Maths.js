//.....................Maths........................
// No need to import maths library like other languages 
//browser window ==> Math. for more


console.log(Math);      //Object [Math] {}



// Math.abs()......... ==> convert -ve value in +ve 
let number3 = -100;
console.log(Math.abs(number3)); //100

const num3 = 100;
console.log(Math.abs(num3)); //100


// Math.round()........==> round off the value 
let numberIs = 34.6; 
console.log(Math.round(numberIs));  // 35

const Num = 34.4
console.log(Math.round(Num))       // 34


// Math.ceil().........==> round off to smallet greater value
let longerValue= 34.1;
console.log(Math.ceil(longerValue));    //35



// Math.floor().........==> round off to largest lesser value 
const shorterValue= 12.9; 
console.log(Math.floor(shorterValue));      //12



//Math. Min,Max().......
console.log(Math.max(34,4,3,2,0));  //34
console.log(Math.min(34,3,2,1,3));  //1


// Math.pow()
// Math.pow(x, y) returns the value of x to the power of y:

let x=Math.pow(8, 2);
console.log(x);          //64

// Math.sqrt()
// Math.sqrt(x) returns the square root of x:

let x1=Math.sqrt(64);
console.log(x1);         //8

// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x:

let x3=Math.abs(-4.7);
console.log(x3);              //4.7

// Math.random()
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

let x4=Math.random();
console.log(x4);           //returns random value



// extra         //un-naccecery


// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E


// JavaScript Math Constants
// Math.E: 2.718281828459045

// Math.PI: 3.141592653589793

// Math.SQRT2: 1.4142135623730951

// Math.SQRT1_2: 0.7071067811865476

// Math.LN2: 0.6931471805599453

// Math.LN10: 2.302585092994046

// Math.LOG2E: 1.4426950408889634

// Math.Log10E: 0.4342944819032518



