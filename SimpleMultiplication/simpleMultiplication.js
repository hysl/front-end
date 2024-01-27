// get elements from HTML
const calculateButton = document.getElementById('calculateButton');
const clearButton = document.getElementById('clearButton');
const resultElement = document.getElementById('result');

// add event listener
// button click will trigger function
calculateButton.addEventListener('click', function() {
  const number1 = document.getElementById('number1').value;
  const number2 = document.getElementById('number2').value;

  // check if values entered are numbers or is empty
  // else, multiply the two numbers
  if (isNaN(number1) || isNaN(number2)) {
    resultElement.textContent = 'Please enter valid numbers!';
  } 
  else {
    let result = number1 * number2;
    resultElement.textContent = 'Answer: ' + result;
  }
});

// clear button will set both values to 0
clearButton.addEventListener("click", function(){
  document.getElementById('number1').value = 0;
  document.getElementById('number2').value = 0;
  resultElement.textContent = ""
})
