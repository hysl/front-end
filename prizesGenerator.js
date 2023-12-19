//Create a program to randomly generate number of prizes won by contestant
//Prizes range from 1 to 5

//Ask for the contestant's name
const name = prompt("Welcome to the Prizes Drawing! What is your name?")

//Notify contestant of the rules - use concatenation
alert("Welcome " + name + "! You will randomly win 1 to 5 prizes. Check the console to see how many prizes you have won. Good luck!")

//Randomly generate an integer between 1 and 5
const prizes = (Math.floor(Math.random() * 5)) + 1

//Output message to console - use interpolation
console.log(`${name}, you have won ${prizes} prizes! See you next time! Bye Bye!`);
