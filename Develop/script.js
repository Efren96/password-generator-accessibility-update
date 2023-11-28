// Assignment Code
var generateBtn = document.querySelector("#generate");
var password_el = document.querySelector("#password");
var length_el = document.querySelector("#length");
var uppercase_el = document.querySelector("#uppercase");
var lowercase_el = document.querySelector("#lowercase");
var numbers_el = document.querySelector("#numbers");
var symbols_el = document.querySelector("#symbols");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
