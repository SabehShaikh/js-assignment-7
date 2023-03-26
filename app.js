// Assignment # 26-30 JAVASCRIPT MATH METHODS

// Question 01

document.write("<h2> Question 01 </h2>")

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number

var num = prompt("Emter a positive integer:");

// b.round off value of the number
var round = Math.round(num);

// c.floor value of the number
var floor = Math.floor(num);

// d.ceil value of the number
var ceil = Math.ceil(num);


document.write("<h4>Number: " + num + "</h4>");
document.write("<h4>Round off value: " + round + "</h4>");
document.write("<h4>Floor value: " + floor + "</h4>");
document.write("<h4>Ceil value: " + ceil + "</h4>");

// QUESTION 02 

document.write("<h2> Question 02 </h2>")
//2. Write a program that takes a negative floating point number from user & display the following in your browser.
var num = prompt("Enter a negative floating point number:");

if (num >= 0) {
    document.write("<h3>Error: Please enter a negative number.</h3>");
} else {
    // // b.round off value of the number
    var roundNum = Math.round(num);

    // c.floor value of the number
    var floorNum = Math.floor(num);

    // d.ceil value of the number
    var ceilNum = Math.ceil(num);

    document.write("<h3>Number: " + num + "</h3>");
    document.write("<h3>Round off value: " + roundNum + "</h3>");
    document.write("<h3>Floor value: " + floorNum + "</h3>");
    document.write("<h3>Ceil value: " + ceilNum + "</h3>");
}

// QUESTION 03

// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

document.write("<h2> Question 03 </h2>")

var num = prompt("Enter a number:");
var absNum = Math.abs(num);

document.write("<h3>Absolute value of " + num + " is " + absNum + "</h3>");
