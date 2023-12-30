//Javascript Arrays 
//Arrays==> Collection of multiple values with same dataTypes
//it,can be string,number,boolean,etc 

/*
Why Use Arrays?
If you have a list of items (a list of car names, for example), storing the cars in single variables
could look like this:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

However, what if you want to loop through the cars and find a specific one ? And what if you had not 3 cars,
but 300 ?

The solution is an array!
*/


// Creating an array  

//1] primitive arrays literals

let Names =["Pranav","Gujarathi",19,true,false,{},function(){}];
console.log(Names[0]);                //Pranav
console.log(typeof Names);           // Object


// 2] object : Consructor
const constructor = new Array()
console.log(typeof constructor);         //object 

let obj ={
    name:"Pranav",
    branch:"IT"
}

console.log(Array.isArray(obj));    //False  //  Is to Strictly check the array or not 
console.log(Array.isArray(Names));  //true



// Major difference between primitive/literal and object 

const array = [30];
console.log(typeof array);
console.log(array);                      //[ 30 ]

let newArray = new Array(10);
console.log(typeof newArray);            //object
console.log(newArray);                   // [ <10 empty items> ]

// It is not passing 10 value in it,it is creating 10 empty elements //undefined 


//................ Accessing and changing Array Elements..................


const access = ["Object", "Array", "Function"];      // Accessing the array element 
console.log(access[2]);               //Function

access[0] = "datatype";     // Changing array element 
console.log(access);    
// after change
//[ 'datatype', 'Array', 'Function' ]


let brothers = ["Pranav", "Sahil", "Abhishek", "Prasad" ]
console.log(brothers[1]);                      // Sahil 
console.log(brothers.length);                 // 4
console.log(brothers[brothers.length-2]);     // accesing the Second last elements
console.log(brothers[brothers.length-1]);    // accesing the last elements


//..........Looping Array Elements........

// One way to loop through an array, is using a for loop:

for(let i=0; i < 4;i++)
{
    console.log("");
    console.log(brothers[i])
}



//...Converting an array to a String ==> toString()


let names=["Om","Sujal","Adi","Sahil"]
let convertedString = names.toString()
console.log(convertedString);                
console.log(typeof convertedString);        //String


//..........Shallow copies vs deep copies................ 
// array always create a shallows copies


// let toppers = ["Prasad", "Sujata", "Sahil", "Mayuri"];
// let anotherArr = toppers;
// console.table([toppers,anotherArr])                   // Having Same value


let toppers = ["Prasad", "Sujata", "Sahil", "Mayuri"];
let anotherArr = toppers;  

anotherArr[1] = "Pranav";
console.log(toppers);        

// Shallow copies ==> passes the reference
// Whenever changes in anotherArray it will change the value of original array 


// Deep copies is opposite of Shallow copies


