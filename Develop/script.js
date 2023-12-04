//Assignment Code 
var generateBtn = document.querySelector("#generate");

// This function gets the password
function getPassword() {

  // Password variables.
  var randomKey = ""
  var numbers = "0123456789"
  var symbols = "!@#$%^&*()_+"
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var multiSelect = "";

  // First prompt that is presented that lets the user select how long they want the password to be.
  var keyLength = prompt("Your password should be between 8 to 128 characters long, enter a number.");

  if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
    alert("Your password doesnt meet the criteria presented. Password has to be between 8 ans 128, please enter another number.");
    return;
  } else {
    var lowerEl = confirm("Your password will have lowercase letters, click ok to continue");
    var upperEl = confirm("Your password will have uppercase letters, click ok to continue");
    var symbolsEl = confirm("Your password will have symbols, click ok to continue");
    var numbersEl = confirm("Your password will have numbers, click ok to continue");
  }

  if (lowerEl) { multiSelect += lowercase; }
  if (upperEl) { multiSelect += uppercase; }
  if (numbersEl) { multiSelect += numbers; }
  if (symbolsEl) { multiSelect += symbols; }

  for (i = 0; i < keyLength; i++) {
    randomKey += multiSelect[Math.floor(Math.random() * multiSelect.length)]
  }
  return (randomKey);
}

// Write password to the #password input
function writePassword(randomKey) {
  var passwordText = document.querySelector("#password");
  passwordText.value = randomKey;

  if (passwordText.length === 0) {
    return;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () { writePassword(getPassword()) });

