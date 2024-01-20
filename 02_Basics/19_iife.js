//IIFE
// Immediately Invoked Function Expression

(() => { 
    console.log("Welcome to the js series");
})();


(function tubelight() {
    console.log("lighten up");
})();



( function age(ageNo) {
        console.log(`my age is ${ageNo}`);
    }
)(19);


(function library(totalBooks) {
    console.log(`my total books are ${totalBooks}`);
}(2212));


const totalStudentsInTheClass = ((totalStudents) => {
    console.log(`total students are ${totalStudents}`);
})(69)


let a = 5;
let b = 6;

const multiplication = ((a, b) => {
    const x = a * b * 2;
    console.log(x);
    // return x;    // can be comment this retuen x 

})(a, b);



(() => {
    console.log("I am an ananonymous function...");
})()


// terniary operator
// condition?true:false

const khanaKhaya = false;

khanaKhaya ? console.log ("soo jao ") : console.log ("khana kha lo")


2 == 3 ? console.log("yes") : console.log("no")


if (0n) {
    console.log("true")
}
else {
    console.log("false")
}



const myObjj = {
    myName:"I am Dragon Warrior"
}

if (Object.keys(myObjj) == 0) {
    console.log("my objec is empty")
} else {
    console.log("myObj is not empty. It contains the following data:",myObjj)
}
