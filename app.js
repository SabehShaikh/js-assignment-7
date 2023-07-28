// // Assignment # 26-30 JAVASCRIPT MATH METHODS

// // Question 01

// document.write("<h2> Question 01 </h2>")

// // 1. Write a program that takes a positive integer from user &
// // display the following in your browser.
// // a. number

var num = prompt("Emter a positive integer:");

// // b.round off value of the number
var round = Math.round(num);

// // c.floor value of the number
var floor = Math.floor(num);

// // d.ceil value of the number
var ceil = Math.ceil(num);


document.write("<h4>Number: " + num + "</h4>");
document.write("<h4>Round off value: " + round + "</h4>");
document.write("<h4>Floor value: " + floor + "</h4>");
document.write("<h4>Ceil value: " + ceil + "</h4>");

// // QUESTION 02 

// document.write("<h2> Question 02 </h2>")
//2. Write a program that takes a negative floating point number from user & display the following in your browser.
var num = prompt("Enter a negative floating point number:");

if (num >= 0) {
    document.write("<h3>Error: Please enter a negative number.</h3>");
} else {
    //     // // b.round off value of the number
    var roundNum = Math.round(num);
}

//     // c.floor value of the number
var floorNum = Math.floor(num);

//     // d.ceil value of the number
var ceilNum = Math.ceil(num);

document.write("<h3>Number: " + num + "</h3>");
document.write("<h3>Round off value: " + roundNum + "</h3>");
document.write("<h3>Floor value: " + floorNum + "</h3>");
document.write("<h3>Ceil value: " + ceilNum + "</h3>");


// // QUESTION 03

// // 3. Write a program that displays the absolute value of a number.
// // E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// document.write("<h2> Question 03 </h2>")

var num = prompt("Enter a number:");
var absNum = Math.abs(num);

document.write("<h3>Absolute value of " + num + " is " + absNum + "</h3>");

// // QUESTION 04

// // 4. Write a program that simulates a dice using random()method of JS Math class. Display the value of dice in your browser.:

document.write("<h2> Question 04 </h2>")
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value:", diceValue);

// // QUESTION 05

// // 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

// document.write("<h2> Question 05 </h2>")

// Generate random value between 1 and 2
var randomValue = Math.floor(Math.random() * 2) + 1;

// Display the generated value and corresponding message
if (randomValue === 1) {
    document.write("Heads Or Tails? " + randomValue + " (Heads)");
} else {
    document.write("Heads Or Tails? " + randomValue + " (Tails)");
}

/* QUESTION 06
6. Write a program that shows a random number between 1
and 100 in your browser.
*/

document.write("<h2> Question 06 </h2>")

var randomNumber = Math.ceil(Math.random() * 100);
document.write("Random Number between 100 to 1 is: " + randomNumber);

/* 7. Write a program that asks the user about his weight. Parse
the user input and display his weight in your browser.
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms */


document.write("<h2> Question 07 </h2>")

var userWeight = prompt("Enter your weight (e.g, 50, 50kgs, 50.2kgs, 50.2kilograms)");

var weight;
if (userWeight.includes("kilograms") || userWeight.includes("kgs")) {
    weight = parseFloat(userWeight);
} else {
    weight = parseFloat(userWeight);
}

if (!isNaN(weight)) {
    document.write("Your weight is: " + weight + " kgs");
} else {
    document.write("Invalid weight input");
}


/*
8. Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user.
*/
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to input a number between 1 and 10
var userInput = prompt("Guess the secret number (between 1 and 10):");

// Parse the user input as an integer
var userGuess = parseInt(userInput);

// Check if the user's guess matches the secret number
if (userGuess === secretNumber) {
    alert("Congratulations! You guessed the secret number: " + secretNumber);
} else {
    alert("Sorry, your guess is incorrect. The secret number was: " + secretNumber);
}