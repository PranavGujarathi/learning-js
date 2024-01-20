// let , const ==> scope limited   //local scope
// var ==> scope not limited   //gloabal scope


//global and local scope

// if(true){
//     var dad ="Pranav"            // global variable

//     let son1="Changu"           // local variable
//     console.log(son1);         //only can diclare within


//     const son2="Mangu"          // local variable
//     console.log(son2);         //only can diclare within
// }
// console.log(dad);
// console.log(son1)      // cant show here due to scoping
// console.log(son2);    // cant show here due to scoping



// const array=[1,2,3,4,5]
// for(let index=0;index<=array.length;index++){
//     const element =array[index]
//     console.log(index)
// }



// //nested functions


// function global(){
//     const globalVariable="globalVariables"

//     function childFunction1(){
//         console.log(globalVariable);
//     }

//     childFunction1()
// }
// cant call childFunction1 here because it is nested 

// global() 


// function dad(){
//     const walet="2000 rupees"

//     function childFunction1(){
//         const childVariable="10 rupees";
    
//     }
//     console.log("pappa 10 rupees dedo ya fir me chura lunga");
// }
// // //cant call childVariable here because it is nested 
// dad() 


// if (true) {

//     const home = "this is my home variable"
    
//     if (home == "this is my home variable") {
        
//         const bedRoom = "this is my bed room variable"
        
//         console.log(home)

//     }

//     // console.log(bedRoom)        //error

// }


// const output = function () {

//     return "muze chai dedo"

// }

// console.log(output());



// function global() {
    
//     const globalVariable = "globalVariable";
    
//     function childFunction1() {
        
//         const childVariable = "childVariable";

//         console.log(globalVariable)

//     }  

//     console.log(childVariable);
  
// }



// ?????????????????????????