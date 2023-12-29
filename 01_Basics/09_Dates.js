//  JavaScript Date Objects
// JavaScript stores dates as number of milliseconds since January 01, 1970

/*
Creating Date Objects

Date objects are created with the new Date() constructor.

There are 9 ways to create a new date object:
    
    1] new Date()
    2] new Date(date string)
    3] new Date(year,month)
    4] new Date(year,month,day)
    5] new Date(year,month,day,hours)
    6] new Date(year,month,day,hours,minutes)
    7] new Date(year,month,day,hours,minutes,seconds)
    8] new Date(year,month,day,hours,minutes,seconds,ms)
    9] new Date(milliseconds)

*/


// 1] new Date()
let todayDates1 = new Date();
console.log(typeof todayDates1);    // object 
console.log(todayDates1.toString());  //Fri Dec 29 2023 23:08:15 GMT+0530 (India Standard Time)


// 2] new Date(date string)
let date1 = new Date("2023-1-19");
let date2 = new Date("02-19-2023"); 
console.log(date1.toLocaleString());
console.log(date2.toLocaleString());


// 3] new Date(year,month)              //0==>january 1=>feb  //months start from index number
const date3 = new Date(2023, 0);
console.log(date3.toDateString());

//........................

//8] new Date(year,month,day,hours,minutes,seconds,ms);
const date4 = new Date(2023, 0, 3, 12 ,5 , 12, 5 );
console.log(date4.toString()) 



//......................................Date Methods.......................................................
// We can use various methods to convert this date into more readable value.
// Date Methods
// When a date object is created, a number of methods allow you to operate on it.

//to...................

/*

let todayDates=new Date();

console.log(todayDates);                       //2023-12-29T17:48:52.493Z

console.log(todayDates.toString());            //Fri Dec 29 2023 23:20:30 GMT+0530 (India Standard Time)

console.log(todayDates.toLocaleString());      //29/12/2023, 11:21:11 pm

console.log(todayDates.toLocaleDateString());     //29/12/2023

console.log(todayDates.toLocaleTimeString());      //11:22:49 pm

console.log(todayDates.toDateString());            //Fri Dec 29 2023

console.log(todayDates.toTimeString());           //23:24:01 GMT+0530 (India Standard Time)

console.log(todayDates.toISOString());            //2023-12-29T17:54:35.139Z

console.log(todayDates.toJSON());                  //2023-12-29T17:55:01.465Z

console.log(todayDates.toUTCString());             //Fri, 29 Dec 2023 17:55:45 GMT


*/


/*

Method          	Description

getFullYear()	    Get year as a four digit number (yyyy)
getMonth()	        Get month as a number (0-11)
getDate()	        Get day as a number (1-31)
getDay()	        Get weekday as a number (0-6)
getHours()	        Get hour (0-23)
getMinutes()        Get minute (0-59)
getSeconds()	    Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	        Get time (milliseconds since January 1, 1970)


*/

let date=new Date()                            // 0=>Jan  11=>Dec    // index number

console.log(date.getFullYear())              //2023

console.log(date.getMonth())                 //11
    
console.log(date.getDate())                  //29 

console.log(date.getDay())                   //5      //day of the week

console.log(date.getHours())                //23

console.log(date.getMinutes())             //30

console.log(date.getSeconds())             //19

console.log(date.getMilliseconds())       //834

console.log(date.getTime())                //1703872819834
 


// let newDate = Date.now();    // Date.now() returns the number of milliseconds since January 1, 1970.
// console.log(newDate);  


//set Methods

// const d = new Date();
//  d.setTime(4738826383);
// console.log(d);