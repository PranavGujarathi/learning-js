//  String Methods

/*
String length

String slice()
String substring()
String substr()

String replace()
String replaceAll()

String toUpperCase()
String toLowerCase()
String concat()


String trim()
String trimStart()
String trimEnd()

String padStart()
String padEnd()

String charAt()
String charCodeAt()

String split()
*/

// [1]  length

let fruits= "Apple, Banana, Kiwi, Baingan"
// apple 0 to 5 banana 7 to 13
console.log(`The string elements are  ${fruits}`);
console.log(fruits.length);

//[2] there are 3 methods for extracting string part

//                      put index in ()
//                           vvvvvvv
// 1]slice()             slice(start, end)
// 2] substring()        substring(start, end)       convert -ve index to 0
// 3] substr()           substr(start, length)

// 1] slice()

//let fruits= "Apple, Banana, Kiwi,Baingan "
let slicePart=fruits.slice(7,13)
console.log(slicePart);     // Banana

//negative index is possible 
let slicePart1=fruits.slice(-8,-1)
console.log(slicePart1); 

//only one index can be passed
let slicePart2=fruits.slice(-13)
console.log(slicePart2); 


// 2] substring()   

//Slice and substring are similar 
//But negative is automatically converts to 0

// let fruits= "Apple, Banana, Kiwi, Baingan"
let substringPart=fruits.substring(7,14)
console.log(substringPart);


let substringPart1=fruits.substring(-8,-1)
console.log(substringPart1);  // convert any negative index to 0 index


let substringPart2=fruits.substring(-5)
console.log(substringPart2);  // convert any negative index to 0 index



// 3] substr() 

// substr(start, length)
// can take negative index 

// let fruits= "Apple, Banana, Kiwi, Baingan"

let substrPart=fruits.substr(15,4)
console.log(substrPart);

let substrPart1=fruits.substr(-7,7)
console.log(substrPart1);


// 3]  1] replace("what to replace","which to replace")  
//     2] replace all()

// Note
// The replace() method does not change the string it is called on.
// The replace() method *returns a new string.*
// The replace() method replaces only the first match
// case sensitive


// let fruits= "Apple, Banana, Kiwi, Baingan"

let newFruit=fruits.replace(" Kiwi","Orange");
console.log(newFruit);

// case sensitive case
let newFruit1=fruits.replace(" kiWi","Orange");
console.log(newFruit1);  // does not replace 

//to make unsensitive
// /i flag have to add

let newFruit2=fruits.replace( /kiWi/i,"Orange");
console.log(newFruit2);   


//replace only one morning

const newString="hey there morning! Good morning"
console.log(`before : ${newString}`);

const newString2=newString.replace("morning","afternoon")
console.log(newString2);

//replace both morning
//   /g is use for global replace
const newString3=newString.replace(/morning/g,"afternoon")
console.log(newString3);





// replaceAll

const repall=newString.replaceAll("morning","afternoon")
console.log(repall);



// UPPERCASE and lowercase

const Pname="PRANAV"
console.log(Pname.toLowerCase())

const Dname="dignesh"
console.log(Dname.toLocaleUpperCase());



//concat

const name2="Omkar"
const surname1="Gujarathi"

const broName=name2.concat(surname1)
console.log(broName);  //OmkarGujarathi

// for adding space/anything


const broName1=name2.concat(" ",surname1)
console.log(broName1);  //Omkar Gujarathi

//trim
// String trim()
// String trimStart()
// String trimEnd()

let randomname= "    pranav    "
console.log(randomname);

let trim1=randomname.trim();   // trim from both start and end
console.log(trim1);

let trimstart1=randomname.trimStart()
console.log(trimstart1);    // trim from start // pranav      


let trimEnd=randomname.trimEnd()
console.log(trimEnd);  // trim from end //       pranav


// extracting string character

//1] charAt

let str8="Abhishek"
let str9=str8.charAt(3)
console.log(str9);

//2] charCodeAt()   // 16-utf char

// let str8="Pranav"
console.log(str8.charCodeAt(0));


// property access

let abcd="Abhishek"
console.log(abcd[0]);


//spilt()

// text.split(",")    // Split on commas
// text.split(" ")    // Split on spaces
// text.split("|")    // Split on pipe


// let fruits= "Apple, Banana, Kiwi, Baingan"
console.log(fruits);

let spiltKar=fruits.split(",")
console.log(spiltKar[3]);






