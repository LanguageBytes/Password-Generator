
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

