// Assignment Code

var password_el = document.querySelector('#Password');
var length_el = document.querySelector('#Length');
var uppercase_el = document.querySelector('#Uppercase');
var lowercase_el = document.querySelector('#Lowercase');
var numbers_el = document.querySelector('#Numbers');
var symbols_el = document.querySelector('#Symbols');

var generate_btn = document.querySelector('#generate');

var uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
var numbers_chars = "0123456789";
var symbols_chars = "!@#$%^&*()";

// Write password to the #password input
function GeneratePassword () {
  let password = "";
  let length = length_el.value;
  let chars = "";

  chars += uppercase_el.checked ? uppercase_chars : "";
  chars += lowercase_el.checked ? lowercase_chars : "";
  chars += numbers_el.checked ? numbers_chars : "";
  chars += symbols_el.checked ? symbols_chars : "";

  for (let i = 0; i <= length; i++) {
      let rand = Math.floor(Math.random() * chars.length);
      password += chars.substring(rand, rand + 1);
}

password_el.value = password;

}

// Add event listener to generate button
generate_btn.addEventListener("click", GeneratePassword);
