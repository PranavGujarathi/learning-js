// console.log(null>=0);
// console.log(null==0);

// console.log(2 > 1);
// console.log(1 < 3);
// console.log(2 >= 7);
// console.log(4 <= 8);
// console.log(9 != 8);
// console.log(2 == 9);
// console.log(4 === 4);


// console.log("02" > 1);
// console.log(1 < "03");
// console.log(2 >= "07");
// console.log("4" <= 8);
// console.log(05 != "8");
// console.log("2 "== 09);
// console.log("04" === 4);      


// let num = "Pranav";
// let num1 = "Vibhu";
// console.log( num == num1);    


// let sum = "12";
// let sum1 = "10";
// console.log(sum === sum);      // "===" strictly check, value as well as data type


//null comparison with zero                    //avoid these type of comparison
  
// console.log( null > 0);  //false
// console.log( null < 0);  //false
// console.log(null >= 0);  //true                     
// console.log(null <= 0);  //true   
// console.log(null == 0);  //false


//undefined comparison with zero                //avoid these type of comparison

 
// console.log( undefined > 0);  
// console.log( undefined < 0);  
// console.log( undefined >= 0);  
// console.log( undefined <= 0);  
// console.log( undefined == 0);  




//(++a)   //pre-increment       //inc then use value

//(a++)   //post-increment      //use value then inc

//(--a)   //pre-decrement       //dec then use value

//(a--)   //post-increment      //use value then dec



// let a = 10;
// let b = 20;

// let sum = (a++) + (--b);    // 10 + 19  // 29
// console.log(sum);

// let sum = (++a) * (b--);    // 11 * 20   // 220
// console.log(sum);

// let sum = (a++) - (b--);    // 10 - 20   //-20
// console.log(sum);

// let sum = (++a) + (--b);    // 11 + 19    //30
// console.log(sum);



let a = 10;
let b = 20;

let sum1 = (a++) + (--b);    // 10 + 19  //29
console.log(sum1);

let sum2 =(++a) * (b--);    // 12 * 19   //228
console.log(sum2);

let sum3 = (a++) - (b--);   // 12 - 18   //-6
console.log(sum3);

let sum4 = (++a) + (--b);   // 14 + 16  //30
console.log(sum4);