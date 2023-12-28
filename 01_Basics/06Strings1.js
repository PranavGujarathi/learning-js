// Strings
//A JavaScript string is zero or more characters written inside quotes.


// String literals : primitive

let str1="Pranav"
const str2="Gujarathi"

// old / out dated fo concatenate

const str3= str1 +" "+ str2
console.log(str3);

// new method

console.log(`My name is ${str1} and surName is ${str2}`);

// String object : string constructor()

const str=new String("Hello World!");
console.log(str);

console.log(typeof str);    // object

  
// { } curly braces
// ( ) parenthesis
// [ ] squared brackets

// objects basic syntax

const name={
    name:"Pranav",
    rollNo: 18,
    age : 18,
    class : "2nd year"
}
console.log(name);


// "=="  and  "==="
//primitive string type 
//string literals

let str4="12345"
let str5="12345"
console.log(typeof str4);
console.log(typeof str5);
//string is same 
console.log(str4==str5);   //true
// string and as well as data type is same
console.log(str4===str5);  //true


// string objects=constructor

// here we get initial reference

const str6=new String("Pranav")
const str7=new String("Pranav")


console.log(typeof str6);
console.log(typeof str7);


console.log(str6==str7);   //false
console.log(str6===str7);   //false


// method vs function
//methods  // dependent on objects //not standAlone  means cant perform indivisually
//function  // independent  //standAlone  means *can* perform indivisually




// extra

//The sequence \"  inserts a double quote in a string:
let text = "We are the so-called \"Vikings\" from the north.";
console.log(text);

//The sequence \'  inserts a single quote in a string:
const text1= 'It\'s alright.';
console.log(text1);

//The sequence \\  inserts a backslash in a string:
let text2 = "The character \\ is called backslash.";
console.log(text2);

//  \f cha pahilecha print nay hot
let text4 = "The character  is called \f backslash.";
console.log(text4);

// \n for new line 

let text5 = "The character \n is called  6789.";
console.log(text5);


// \t Horizontal Tabulator
let text6 = "The character \t is called  12345.";
console.log(text6);

// \v	Vertical Tabulator

let text7 = "The character \t is called nothing.";
console.log(text7);




