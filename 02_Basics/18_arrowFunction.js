
//arrow function
//this keyword


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
  
  
  //functions:
  
  // function greetings(name) {
  //     return "Hey "+ name+ " Good Morning";
  // }
  // console.log(greetings("Pranav"))
  
  
  // arrow function
  
  // const newFunction=(name) =>{
  //     console.log(name)
  // }
  // newFunction("Pranav")
  
  // const addition = (a,b) => {
  //     return a + b;
  // }
  
  // const sum = addition(10, 20);
  // console.log(sum);
  
  
  //one argument:
  // const bookCounter = bookPrice =>  bookPrice + 7
  
  // const newBookPRice = bookCounter(350);
  
  // console.log(newBookPRice)
  
  
  // arrow function:
  // const arrFun = (favLang,favCar) => {
  //     const name = "Pranav";
  //     const dob = [27,8,2004]      
  //     console.log(name, dob);
  //     console.log(favLang)
  //     console.log(favCar[2])
  //     return name;
      
  // }
  // arrFun("javascript",['range rover','wagenor','Supra']);
  
  
  // ----------------------------------------------------------------------
  //-------------------------This keyword------------------------------
  
  // const person = {
  //     firstName: 'Pranav',
  //     lastName: 'Gujarathi',
  //     id: 106,
  //     fullName: function () {
  //         return this.firstName + " " + this.lastName;
  //     }
  // }
  
  // console.log(person.fullName())
  // console.log(person.id);
  
  
  
  // const bookStore = {
  //     noOfBooks: 10000,
  //     address: "sector 12",
  //     employees: 12,
  //     bookNames: ['Hellen keller', "Never I have Ever", "MoneyPower"],
  //     callBook: function () {
  //         console.log(this)
  //     }
      
  // }
  
  // bookStore.callBook();
  
  // console.log(this)
  
  
  //IIFE
  // Immediately Invoked Function Expression
  
  (() => { 
    console.log("Welcome to the js series");
  })();
  
  