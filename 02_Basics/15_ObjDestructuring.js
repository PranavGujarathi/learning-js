

// destructuring means extracting the values of the object 
// you can also change the key name inside the object



const todaysLecture=  {
    subject : "DSA",
    duration : "2 hour",
    taughtBy : "Yadnyesh"

}

let lec = todaysLecture.subject;
console.log(lec);


// console.log(`So todays lecture is ${todaysLecture.subject} and the time duration of the lecture 
// is ${todaysLecture.duration} ,${todaysLecture.taughtBy} will teach `);


//------------------------------------------------------------------------------------------------------------//

// detructuring values 

let { subject , duration , taughtBy  } = todaysLecture

// console.log(subject , duration , taughtBy)

console.log(`So todays lecture is ${subject} and the time duration of the lecture 
is ${duration} ,${taughtBy} will teach `);


//------------------------------------------------------------------------------------------------------//

const todaysLecture1=  {
    subject : "DSA",
    duration : "1 hour",
    taughtBy : "mahi Mam"

}

// syntax 
// variable  { old Key Name : new Key Name,.............n } = objectName
 

const { subject : a , duration : b , taughtBy : c } = todaysLecture


console.log(`So todays lecture is ${a} and the time duration of the lecture 
is ${b} , and ${c} will teach `);






