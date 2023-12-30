
// Alpabetic Sort                        //Numeric Sort

                                         
// Array sort()                          //Numeric Sort
// Array reverse()                       //Random Sort
// Array toSorted()                      //Math.min()
// Array toReversed()                    //Math.max()
// Sorting Objects                       //Home made Min()
                                         //Home made Max() 


const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
// Alpabetic Sort 

// 1] Array sort() 
// The sort() method sorts an array alphabetically:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits);          //[ 'Apple', 'Banana', 'Mango', 'Orange' ]

// 2] Array reverse()  
// The reverse() method reverses the elements in an array:

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.reverse();

console.log(fruits1);        //[ 'Mango', 'Apple', 'Orange', 'Banana' ]


// extra   // both combine

// By combining sort() and reverse(), you can sort an array in descending order:

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort();
fruits2.reverse();

console.log(fruits2);          //[ 'Orange', 'Mango', 'Banana', 'Apple' ]


//  3]  Array toSorted()    and   4] Array toReversed()  

// The difference between toSorted() and sort() is that 
// the first method creates a new array,
//  keeping the original array unchanged, 
// while the last method alters the original array.

// call by value type   // without changing original aaray
const months = ["Jan", "Feb", "Mar", "Apr"];

const sorted = months.toSorted();
console.log(months);
console.log(sorted);


// The difference between toReversed() and reverse() is that the first method creates a new array, 
// keeping the original array unchanged, 
// while the last method alters the original array.

const months2 = ["Jan", "Feb", "Mar", "Apr"];
const reversed2 = months2.toReversed();

console.log(reversed2);


//--------------------Numaric Sort ---------------------


//  1] Numaric sort

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(`Before sort :${points}`);
console.log(`after sort :${points}`);

// Use the same trick to sort an array descending:

const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function(a, b){return b - a});

console.log(`Before sort :${points1}`);
console.log(`after decending sort :${points1}`);


// 2] Random Sort 

const points3 = [40, 100, 1, 5, 25, 10];
points3.sort(function(){return 0.5 - Math.random()});

console.log(points3);

// 3] Min and Max

// Find Min or Max with sort()
// After you have sorted an array, you can use the index 
// to obtain the highest and lowest values.

// Sort Ascending:

const points5 = [40, 100, 1, 5, 25, 10];
points5.sort(function(a, b){return a - b});
console.log( points5[0] )                //contains the lowest value          //1
console.log( points5[points5.length-1] ) //contains the highest value        //100 





// can find using function 


//will be continue

