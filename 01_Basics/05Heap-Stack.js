//................Primitive...................... 

// 7 types : Number, String, Boolean, null, undefines, Symbol, Bigint

//Number
let num = 78;
const num1 = 85.5;

console.log(typeof num);
console.log(typeof num1);

let numtoint = parseInt(num1);
console.log(numtoint);

//string
let str = "Pranav";
let str1 = "Gujarathi";


// Boolean
let bool = true;
let bool2 = false;


//undefined
let a;
console.log(typeof a);
var b;
console.log(typeof b);

//Null
let c = null;
console.log(typeof c);  //Object


//Symbol

const syn = Symbol("newSymbol");
const syn1 = Symbol("newSymbol");       // Symbol returns new unique value ****
console.log(syn===syn1);           //false
 
//Bigint

let Bigint = 123456789n;
console.log(typeof  Bigint);

//Non-primitive

// Array, Objects, Functions


//Array
let nonprimitive = ["Pranav","Prasad","Abhishek",true,false];
console.log(nonprimitive[0]);

//objects
const object = {
    name : "Pranav",
    rollNo : 18,
    age : 19 
}
console.log(object.name);      // Pranav
console.log(object.rollNo);    //18
 
//function
//function defination ==> function(){}

let myfunction = function(){
    console.log("hello World");
}

myfunction()     //Hello World


//-----------------------------------------------------------------------------------------------


// Stack(Primitive) , Heap(Non-primitive)
// We get copy  , original value reference

let myName = "Pranav";
let nickName = myName;
nickName = "Vibhu";

console.log(myName);
console.log(nickName);


let user = {
 email:"pranav@gmail.com",
 phoneNo : 1234567890
}

let user2 = user;
user.email ="vibhu@gmail.com";
console.log(user.email);
console.log(user2.email);


