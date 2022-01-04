// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Button has been clicked")

  let includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let includeLowercase = "abcdefghijklmnopqrstuvwxyz"
  let includeNumbers = "0123456789"
  let includeSpecial = "~!@#$%^&*()_+{}:?><;."
  let password = ""




  //prompt the user to answer with yes or no answers
  //password legnth 8 < 128
  //lowercase, uppercase, specials
  //create if and else scenarios to make sure it meets criteria
  //generate password

  //display password
  return "Generated Password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


