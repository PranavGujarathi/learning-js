/*

Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans

*/


//Converting Strings to Numbers
let marks="35"
console.log(typeof marks);      // string

marks=Number("35")
console.log(typeof marks);    //number

let name=Number("Pranav")
console.log(typeof name);   // number

console.log(name);          // value after conversion is NaN

let abcmark= Number("1234abc");
console.log(abcmark);       // NaN



//  Number(),parseInt(),parsefloat() 

//number("")
let num=Number("123.45")
console.log(num);

//parseInt()
// only take before decimal point

let num1=parseInt("123.45")
console.log(num1);

// parsefloat() 
//similar as number // but remove abc // only give number

let num2=parseFloat("123.45abc")
console.log(num2);   //123.45




let marks2=null
console.log(marks2);  //null
console.log(typeof marks2);   //object

//
let marks3=Number(null)
console.log(marks3);  // output is 0

//
let marks4=Number(undefined)
console.log(marks4);  //NaN

//
let marks5=Number(true)
console.log(marks5);  // 1

//
let marks6=Number(false)
console.log(marks6);  // 0


// boolean() conversion

let bool=Boolean("Pranav1234")
console.log(bool);         //true
console.log(typeof bool);   //boolean


let bool1=Boolean("")
console.log(bool1);        // false
console.log(typeof bool1); 

let bool2=Boolean(0)      //0      //1
console.log(bool2);      //false  //true


// String() conversion

let str=String(55)
console.log(str);           //55
console.log(typeof str);   //string

//trickey conversion
// let isPasses=1    //true

// Operations 

let random = 5;
let random2 = -random;
console.log(random2);  //-5



let str1 ="Pranav ";
let str2 ="Gujarathi"
console.log(str1 +  str2);



console.log(2 + 2);    //4
console.log(2 - 2);     //0
console.log(2 **3);    //8   //** for exponential
console.log(10 / 2);    //5
console.log(2%2);    //0  //remainder

// tricky case

console.log("1"+2);  //12
console.log(2+"1");   //21

// if string at start it concat
console.log("1"+2+3);   //123

//if string not at start it adds expect string
console.log(1+2+"3");   //33

//first converts to number when string
console.log("2"-2);   // output is 0

// special cases


console.log(true);           // true
console.log(false);          // false
console.log(null);           // null
console.log(undefined);      //undefined

// console.log(true +);     //error
// console.log(""+);        //error
console.log(+"");          //0






