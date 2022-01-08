
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Generates the button which will then kickstart the process of events
generateBtn.addEventListener("click", writePassword);

//Setting the variables
function generatePassword(){
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
  var numbers = '1234567890';
  var special = '~!@#$%^&*()_+{}:?><;.,';
  var password = '';
  var userSpecification = '';

// Questions

//These will ask the user for the specifications of their password.

var lowercaseQuestion = confirm('Include lowercase letters?')
var uppercaseQuestion = confirm('Include uppercase letters?')
var numbersQuestion = confirm('Include numbers?')
var specialQuestion = confirm('Include special characters?')

//Conditions

//This will determine the outcome of the password based on the user's answers to the questions.  

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
  return alert('You need at least 1: uppercase, lowercase, numbers or special Characters');
}

// What is the length of the password?
var plength = prompt('Enter your password length (must be a number between 8 and 128).')

// Is the password long enough?
if (plength > 7 && plength < 129) {
  console.log(plength + " characters in length")
}

// if not, alert the user to try again.
else {
  alert('Must be between 8 - 128 characters.')
  return '';
}

//Randomly generates the password based on criteria selected by the user.
for (var i = 0; i < plength; i= i + 1) {
  
  password +=userSpecification[Math.floor(Math.random () * userSpecification.length)];
}
return password;
}

//Getting the password to appear on the screen
function writePassword() {
var password = generatePassword();

//Matches the id declared in the CSS and html so the generated password will be displayed in the middle of the page
var actualPassword = document.querySelector("#password");
actualPassword.value = password;
console.log ("generated password = " + password)
}



  


