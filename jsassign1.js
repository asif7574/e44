
//JavaScript Assignment -1   16/6/2024


// question 1
// Create a program that asks the user for two numbers and prints their sum.

var readlineSync = require("readline-sync");
var x = readlineSync.question("enter first number:");
var y = readlineSync.question("enter second number:");
var x = parseInt(x)
var y = parseInt(y)
console.log('sum is :', x+y);

// question 2
//Implement a program that calculates the area of a rectangle using given length and width.
var readlineSync = require("readline-sync");
var x = readlineSync.question("enter length of rectangle:");
var y = readlineSync.question("enter breadth of rectangle:");
var x = parseInt(x)
var y = parseInt(y)
console.log('area of recatangle is : ',x*y);

// question 3
// Create a program that asks the user for their age and determines if they are eligible to vote (considering a voting age of 18).

var readlineSync = require("readline-sync");
var x = readlineSync.question("enter your age:");
var x = parseInt(x)

if(x<18){
    console.log('you are not eligible');
}
else{
    console.log('you are eligible');
}


// question 4
// Write a script that takes a user's grade as input and outputs whether they passed or failed (assuming the passing grade is 60 or above)

var readlineSync = require("readline-sync");
var x = readlineSync.question("enter your mark:");
var x = parseInt(x)

if(x>=60){
    console.log('passed');
}
else{
    console.log('failed');}


// question 5
// Implement a program that checks if a user's entered number is positive, negative, or zero.

var readlineSync = require("readline-sync");
var x = readlineSync.question("enter a number:");
var x = parseInt(x)

if(x>0){
    console.log('you have entered a positive number');
}
else if (x=0){
    console.log('you have entered zero');
}
else{
    console.log('you have entered a negative number');}

// question 6
// Write a script that takes a user's age and checks if they are a child (0-12), teenager (13-19), adult (20-59), or senior (60 and above).

var readlineSync = require("readline-sync");
var x = readlineSync.question("enter your age:");
var x = parseInt(x)

if(x>0 && x<=12){
    console.log('you are a child');
}
else if (x>=13 && x<=19){
    console.log('you are a teenager');
}
else if (x>=20 && x<=59){
    console.log('you are a adult');
}
else if (x>=60){
    console.log('you are a senior');
}
else{
    console.log('eror');}

    

// question 7
// find the square of each number in an array=[1,3,9,12,15,18,21] using loop

let arr=[1,3,9,12,15,18,21]

for(i=0;i<arr.length;i++){
console.log(arr[i]**2);
}

// question 8
// Write a program to find the sum of all the odd numbers for a given limit (if you choose limit as 10 then need to find the sum of all odd numbers in between 1 and 10 )

let i
let sum = 0

for(i=0;i<10;i++){
if(i%2!=0){
    sum = sum + i
}
}
console.log(sum);
