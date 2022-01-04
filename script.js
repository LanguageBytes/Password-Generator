// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(characterAmount, includeUppercase, includeSymbols, includeNumbers) {
  console.log("Button has been clicked")
  prompt ("Would you like your password to have uppercase letters? Please write Yes or No.")
  if ("yes")
  var includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var includeLowercase = "abcdefghijklmnopqrstuvwxyz"
  var includeNumbers = "0123456789"
  //prompt the user
  //password legnth 8 < 128
  //lowercase, uppercase, special characters
  //validate input
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
