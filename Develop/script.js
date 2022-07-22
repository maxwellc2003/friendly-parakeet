// Assignment code here
function generatePassword() {
  var characters = prompt("How many characters would you like?")
  var specialChar = confirm("Would you like special characters?")
}

// bucket

// 12 characters
var specialList = ["!","~","`","@","#","$","%","^","&","*","_","-"]
// 10 numbers
var numberList = ["1","2","3","4","5","6","7","8","9","0"]
// 26 letters
var letterList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// specialList[Math.floor(Math.random()*12)]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
