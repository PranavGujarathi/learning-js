// Variables ===> let,const,var

const emailID="pranav@gmail.com"
// cant be change if use const
// cant redeclare and reassign

//emailID=niku@gmail.com  cant do this 


var accID=1234
//can be redeclare 
accID=4567
//for print single line 
console.log(accID);


//info
// interpreter , dynamic ,single threaded language


let name="pranav"
name="vibhu"
console.log(name);

let name1="pranav gujarathi"
let rollNO=18
let dept="IT"
//for multiple line 
console.table([name1,rollNO,dept])


for (let i=0; i<=5; i++)
{
    console.log(i);
}

//if we do with var

for (var i=0; i<=5; i++)
{
    console.log(i);
}
console.log(i);

//strictly follow use of Let due to scope 

// age=18
// console.log(age);
// not good 

const age=18
console.log(age);
//good 




// extra


// let and const have block scope.
// let and const can not be redeclared.
// let and const must be declared before use.
// let and const does not bind to this.
// let and const are not hoisted.



// Variables defined with const cannot be Redeclared

// Variables defined with const cannot be Reassigned

// Variables defined with const have Block Scope


// // Correct
// const PI = 3.14159265359;

// Incorrect
// const PI;
// PI = 3.14159265359;

