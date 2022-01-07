
// Assignment Code
var generateBtn = document.querySelector("#generate");

//Setting the variables
function generatePassword(){
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
  var numbers = '1234567890';
  var special = '~!@#$%^&*()_+{}:?><;.,';
  var password = '';
  var userSpecification = '';

// What is the length of the password?
var plength = prompt('Enter your password length (must be a number between 8 and 128).')

// Is the password long enough?
if (plength > 8 && plength < 128) {
  console.log(plength + " characters in length")
}

// if not, alert the user to try again.
else {
  alert('Must be between 8 - 128 characters.')
  return '';
}

// Questions

//These will ask the user for the specifications of their password.

var lowercaseQuestion = confirm('Include lowercase letters?')
var uppercaseQuestion = confirm('Include uppercase letters?')
var numbersQuestion = confirm('Include numbers?')
var specialQuestion = confirm('Include special characters?')


//Conditions

//These will determine the outcome of the password based on the user's answers to the questions.

if (lowercaseQuestion) {
  userSpecification += lowercase
  console.log ("lowercase chosen")
  
}
if (uppercaseQuestion) {
  userSpecification += uppercase
  console.log ("uppercase chosen")
}
if (numbersQuestion) {
  userSpecification += numbers
  console.log ("numbers chosen")
}
if (specialQuestion) {
  userSpecification += special
  console.log ("special chosen")
}


// If these conditions are NOT met, the user will be asked to retry.
if (
  !uppercaseQuestion && !lowercaseQuestion && !numbersQuestion && !specialQuestion
) {
  return alert('You need at least 1: Uppercase, Numbers or Special Characters');
  
}


