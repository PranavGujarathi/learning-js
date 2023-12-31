// In JavaScript, objects are king. If you understand objects, you understand JavaScript.


// 1] Accessing javascript object properties 

let myDreamHouse = {
    location : "village(Rampur)",
    design : "Traditional Farmhouse",
    Budget : "80 Lakh",
    isInTheConstructionProcess : false,
    specialitiesOfTheHouse : function (){
        console.log(`As this is my dream house , I am gonna customize it to the advance leavel .
        This house will be located at ${this.location} and its design wiil be ${this.design}`)
    }

}

console.log(myDreamHouse.location);
console.log(myDreamHouse["location"]);


// 2]  Javascript object for...in loop


let myDreamHouse1 = {
    location : "village(Rampur)",
    design : "Farmhouse",
    Budget : "20 Lakh",
  "is In The Construction Process" : false,
    specialitiesOfTheHouse : function (){
        console.log(`As this is my dream house , I am gonna customize it to the advance leavel .
        This house will be located at ${this.location} and its design wiil be ${this.design}`)
    }

}

for(let x in myDreamHouse1){
    console.log(myDreamHouse1[x]);
}


// with key value pair
for(let a in myDreamHouse1){
    console.log(myDreamHouse1);
}




// 3]  Adding new properties
 
let myDreamHouse2 = {
    location : "village(Rampur)",
    design : "Farmhouse",
    Budget : "80 Lakh",
   " is In The Construction Process" : false,
    specialitiesOfTheHouse  : function (){
        console.log(`As this is my dream house , I am gonna customize it to the advance leavel .
        This house will be located at ${this.location} and its design wiil be ${this.design}`)
    }

}
                //obj.key = "Value"
myDreamHouse2.interior ="Chandan Wood";
console.log(myDreamHouse2);

myDreamHouse2["numberOfRooms"] ="69";
console.log(myDreamHouse2);


// 4]  Deleting Properties


let myDreamHouse3 = {
    location : "village(Rampur)",
    design : "Farmhouse",
    Budget : "20 Lakh",
   " is In The Construction Process" : false,
    specialitiesOfTheHouse  : function (){
        console.log(`As this is my dream house , I am gonna customize it to the advance leavel .
        This house will be located at ${this.location} and its design wiil be ${this.design}`)
    }

}
 
//delete  obj.key
delete myDreamHouse3.Budget;
console.log(myDreamHouse3);

delete myDreamHouse3["design"];
console.log(myDreamHouse3);



// 5]  Nested  Objects  
// you can define n number object inside object

const myObj={
    name:"Pranav",
    surName:"Gujarathi",
    department:"IT",
    rollNo:18,

    laptop:{
        laptop1:"HP Pavelian",
        laptop2:"Lenovo Ideapad Gaming ",
        laptop3:"Asus Tuf Gaming F15",
        laptop4:"MacBook Air",

        favraiteLaptop:{
            laptop3:"Asus Tuf Gaming F15"
        }
    }

}
console.log(myObj);

// for accesing use dot(.)

console.log(myObj.name);
console.log(myObj.laptop);
console.log(myObj.laptop.laptop4);     //"MacBook Air"
console.log(myObj.laptop.favraiteLaptop);



// 6] Object inside an array
// In backend you will find out this mostly

let array =[
    {
        name : "Pranav",                       // just like an normal array 
        surName : "Gujarathi",
        rollNo : "18",
       },
   {
    name : "Abhishek",                 
    surName : "Gupta",
    rollNo : "19",
   },
 
   {
    name : "Prasad",
    surName : "Khandagale",
    rollNo : "31",
   },
   {
    name : "deep",
    surName : "Astamkar",
    rollNo : "1",
   }

]


console.log(array[0]);
console.log(array[1].surName);
console.log(array[2]["name"])


// 7] Object.assign() ==> Combines the objects


let obj1 = {
    name: "Pranav",
    surName: "Gujarathi",
    rollNo: "18"
}
let obj2 = {
    name1: "Abhishek",
    surName1: "Gupta",
    rollNo1: "19"
}

let obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

// Another method 
// spred operator...........

let obj4 = { ...obj1, ...obj2};
console.log(obj3);



// 8] Object.keys() ==> return value is in the form of array

let myDreamHouse150 = {
    "location" : "village(Rampur)",
    "design" : "Farmhouse",
    "Budget" : "20 Lakh",
    isInTheConstructionProcess : false,
    specialitiesOfTheHouse : function (){
        console.log(`As this is my dream house , I am gonna customize it to the advance leavel .
        This house will be located at ${this.location} and its design wiil be ${this.design}`)
    }

}

//            Object.keys(object name)
console.log(Object.keys(myDreamHouse));

//          Object.values(object Name)
console.log(Object.values(myDreamHouse150));

//checking array or not

let check = Object.keys(myDreamHouse);
console.log(typeof check);               // object
console.log(Array.isArray(check));      //true 


// 9] Object.values()  ==> same 


// console.log(Object.values(myDreamHouse));


// const arr = Object.values(myDreamHouse);
// console.log(Array.isArray(arr));   // true



// 10] Object.entries()  ==> same

// console.log(Object.entries(myDreamHouse));




// 11] obj.hasOwnProperty()  ==>same


console.log(myDreamHouse.hasOwnProperty("Budget"));  //true
console.log(myDreamHouse.hasOwnProperty("loc"));  //false



