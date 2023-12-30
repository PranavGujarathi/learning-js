// array 

const fruits = ["Banana", "Orange", "Apple", "Mango"];


// array Methods
/*

Array length     
Array toString()    !!
Array join()        !!
Array pop()
Array push()
Array shift()
Array unshift()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()
 */

//----------------- Array length ----------------   

// arrayVariable.length for length of the array

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

let size = fruits.length;
console.log(size);                          //4
console.log(fruits[fruits.length-1]);       //Mango   // Accessing the last element



// 1]....... Array toString()...... ==> array convert into a string

// arrayVariable.toString(); for converting to sting
let string = fruits.toString();
console.log(string);


// 2]....... Array join().......... ==> Similar toString but it provides Separator in value, which you pass

// arrayVariable.join(" * "); for join 
let join =fruits.join(" * ");
console.log(join);

// 3]........Array pop()...... >> last Elements get remove 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

//  pop (removing of elemnts)
let pop= fruits.pop();              //Mango is popped

// will show poped element    
console.log(pop);                   // Mango

// will show array after popped element
console.log(fruits);                //[ 'Banana', 'Orange', 'Apple' ]

//4] ...........Array push().........==>last Elements get add 


// push (for entering new element)
fruits.push("Baingan")
console.log(fruits);                 //[ 'Banana', 'Orange', 'Apple', 'Baingan' ]


//.... push also create nested array

let array = ["1", "2", "3"];
const newArray = ["4", "5", "6"];

array.push(newArray);
console.log(array)                   // nestedArray //[ '1', '2', '3', [ '4', '5', '6' ] ]

// nested array element accessing 

let name =["Pranav", "sujal", "Sahil" , ["Aditya", "Vibhu"]]
console.log(name[3][1]);                  //Vibhu


//........flat()....... ==> merge nested array element into a single array

let number = ["01", "02", "03",["04", "05", ["06", "07"]]];
let flatNumberis = number.flat(2)                // Infinity //1 //2
console.log(flatNumberis);                         
//  [
//     '01', '02',
//     '03', '04',
//     '05', '06',
//     '07'
//   ] 


//..........Shifting elements     1]shift()  2]unshift()...........

// 1]shift()

// // The shift() method removes the first element of an array (and "shifts" the other elements to the left):
fruits.shift();
console.log(fruits);

// //The shift() method returns the element that was shifted out.
let fruit = fruits.shift();
console.log(fruit);                 //Shifted element //Orange
console.log(fruits);                //[ 'Apple', 'Baingan' ]


//  2] unshift()

// //The unshift() method adds new elements to the beginning of an array:
fruits.unshift("Lemon");
console.log(fruits);                //[ 'Lemon', 'Apple', 'Baingan' ]




// ---------------------Changing elements [lemon changes to kiwi]

fruits[0] = "Kiwi";
console.log(fruits);               //[ 'Kiwi', 'Apple', 'Baingan' ]

// The [length property] provides an easy way to append new elements to an array without using the push() method:
fruits[fruits.length] = "WaterMelon";
console.log(fruits);                       //[ 'Kiwi', 'Apple', 'Baingan', 'WaterMelon' ]


// array delete

// Warning !
// Array elements can be deleted using the JavaScript operator delete.
// Using delete leaves undefined holes in the array.
// Use pop() or shift() instead.


delete fruits[0];         // [ index number]
console.log(fruits);       //[ <1 empty item>, 'Apple', 'Baingan', 'WaterMelon' ]


//--------------------- Merging (Concatenating) Arrays

//The concat() method creates a new array by merging (concatenating) existing arrays:

const boys =["B1","B2"];
const girls=["G1","G2"];

console.log(boys);
console.log(girls);

console.log("after concatination");

const Students =boys.concat(girls)
console.log(Students);


//..........flat............

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(myArr)

// slice()   and   splice()

// Splicing and Slicing Arrays

// The splice() method adds new items to an array.

// The slice() method slices out a piece of an array.


// 1] slice()

// slice() ==> Cut/Remove the elements

// The slice() method creates a new array.

// The slice() method does not remove any elements from the source array.
// Call by value aahe 

const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits1.slice(3);

console.log(fruits1);      //[ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
console.log(citrus1);      //[ 'Apple', 'Mango' ]


// The slice() method can take two arguments like slice(1, 3).

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2 = fruits2.slice(1, 3);

console.log(citrus2);               //[ 'Orange', 'Lemon' ]


//  2] splice()

// The splice() method can be used to add new items to an array:

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits3);

// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.


const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.splice(2, 2, "Lemon", "Kiwi");

//Removed Items: Apple,Mango

console.log(fruits4);           //[ 'Banana', 'Orange', 'Lemon', 'Kiwi' ]


// Using splice() to Remove Elements
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7.splice(0, 1);

console.log(fruits7);

// The first parameter (0) defines the position where new elements should be added (spliced in).

// The second parameter (1) defines how many elements should be removed.



// for more arraymethods ==> go to browser console window,Declare an array 
// and you get more methods

