//Check to see if you and your friend are 18 or above, in order to enter the party

const yourAge = prompt("What is your age?")
const friendAge = prompt("What is your friend's age?")

let bothAdults = false

function checkAge(age1, age2){
  if(age1 >= 18 && age2 >= 18){
    bothAdults = true
    return "You and your friend may both enter the party!"
  }
  else if(age1 >= 18 && !(age2 >= 18))
    return "Sorry, your friend may not enter the party, but you can"
  else if(age1 < 18 && age2 >= 18)
    return "Sorry, you may not enter the party, but your friend can"
  else
    return "Sorry, you and your friend may not enter the party"
}

console.log(checkAge(yourAge, friendAge))

switch(bothAdults){
  case true:
    console.log("Welcome!");
    break;
  case false:
    console.log("Goodbye");
    break;
  default:
    console.log("Please check in at the door");
}
