// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).


// function() {}

function computer (computerParts,computerParts1) {          // inside  this (a,b,......n) ==> parameters
             
    console.log(`Hey there are so many parts of computer ${computerParts} and ${computerParts1} `)  ;
  
  }
  computer("monitor","CPU")           // function call  // inside this (a,b,.....n) ==> arguments


function washingMachine(cloth) {
    console.log(`Hey there! your washu has started! i received your ${cloth} cloth and i am washing it! `);
}
washingMachine(4)


//this is a simple multiplication program that takes three numbers as input and returns the 

function multipy(num1,num2,num3)
//product of these three numbers
{
    let product = num1 * num2;
    return (product*num3);
    }
    console.log(multipy(4,5,6)); 

// // -------------OR--------------

function multipy1(num1,num2,num3)
{
 return num1*num2*num3

}
console.log(multipy1(4,4,5));

function addition(number1,number2){
    console.log(number1+number2);
}

addition(4,5)  //9
addition(9,1)  //10

let number3 = addition(4,10);
console.log(number3);             // undefined  since,number3 is not storing any value ,the function is not returning any value
                                  // function only printing the value 



  // .................return keyword...............
  //return keyword use when to store value in another variable,return act as full stop
  //after return keyword any code line will not excute
  
//array inside function

const students=["Pranav","Prasad","Abhi","Vishal","Durvesh","Nikhil"];

function studentFunction(studentArr)
{
    for(let student in studentArr)
    console.log(studentArr[student]);
}
studentFunction(students);

function studentFunction(studentArr)
{
    for(let sportsTeacher in studentArr)
    console.log(studentArr[sportsTeacher]=="Prasad");
}
studentFunction(students);


//passing objects inside a function:

const obj={
    myname:"Pranav",
    rollNo:18,
    class:"SE"
}

function passObj(object)
{
    // const name=object.myname
    // const rollNo=object.rollNo

    const {myname:name,rollNo:rollNo}=object

    return `Helo! My name is ${name}. and my roll no is ${rollNo}`
}

const str=passObj(obj)
console.log(str);


// Before Arrow:
hello = function() {
    return "Hello World!";
  }
  
  // With Arrow Function:
  hello = () => {
    return "Hello World!";
  }
  
  
  // Arrow Functions Return Value by Default:
  hello = () => "Hello World!";

  