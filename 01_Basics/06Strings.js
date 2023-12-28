// Strings

let str1="Pranav"
const str2=`Gujarathi`
console.log([typeof str1 , typeof str2]);


// string litrals : primitive
// old 
const str3=str1 +" "+  str2
console.log(str3);

// new
console.log(`My name is ${str1} and surName is ${str2}`);


// string object : string contructor
const str=new String("Hello world!")
console.log([typeof str]);

//{} curly braces              used in objects
//( ) paranthesis              used in functions
//[ ] square bralets           used in aarays

// objects:
const object1=
{
    name:"Pranav",
    rollNO:18,
    class:2
}
console.log(object1);


//primitive string type
let str4="Pranav"
let str41="Pranav"
console.log(str4===str41); // true  :value and data type must be same 

// // //string object: contructor

const str6=new String("Pranav")
const str61=new String("Pranav")
console.log(str6==str61) 

// false because of the difference between value and datatype
// due to we get instance/address/reference

// rarely used
let str7=new String("Pranav")
let str62= str6
str62="Gujarathi"
console.log(str7);  // false 



//String Methods

// 1] Length property

let fruits="Apple,Banana,Kiwi"
console.log(fruits.length);  


//2] 3 methods for extracting string part
// 1] slice()
// 2] subString()
// 3]substr()


//1]slice
// let fruits1="Apple,Banana,Kiwi"
// let sliceFruits=fruits.slice(start,end)

let sliceFruits=fruits.slice(0,5)
console.log(sliceFruits);

// // slice takes negative index too

let sliceFruits1=fruits.slice(-4,-1)
console.log(sliceFruits1);        // kiw

let text = "Apple, Banana, Kiwi";

let part = text.slice(-12, -6);
console.log(part);           // Banana

//2]substring
//slice and substring are similar

// let fruits1="Apple,Banana,Kiwi"

let substring=fruits.substring(6,12)
console.log(substring);

//dont support negative value
let substring1=fruits.substring(-12,-6)
// ===> fruits.substring(0,0)
// no output

//3] substr() 
// takes (start,lenth)
// it also take negative index 
let fruits1="Apple,Banana,Kiwi"
let substr=fruits.substr(6,6)
console.log(substr);

let substr1=fruits.substr(-11,6)
console.log(substr);

// replace 
let text100 = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

// // ???
// // To replace case insensitive, use a regular expression with an /i flag (insensitive):
let text1 = "Please visit Microsoft!";
let newText1= text.replace(/MICROSOFT/i, "W3Schools");
console.log(newText1);

//replace golbal
// // To replace all matches, use a regular expression with a /g flag (global match):
let text2 = "Please visit Microsoft and Microsoft!";
let newText2= text.replace(/Microsoft/g, "W3Schools");
console.log(newText2);


//replace all

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
console.log(text);

// to upperCase

let text5 = "Hello World!";
let text6 = text5.toUpperCase();
console.log(text6);

// // to lower case
let text3 = "HELLO WORLD!";
let text4 = text3.toLowerCase();
console.log(text3);

// // string concat
let text10 = "Hello";
let text20 = "World";
let text30 = text1.concat(" ", text2);
console.log(text3);

//The concat() method can be used instead of the plus operator. These two lines do the same:

text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
console.log(text);


