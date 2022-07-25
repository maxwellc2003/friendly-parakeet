// Assignment code here

var alphaList = 'abcdefghijklmnopqrstuvwxyz';
var alphaUpperList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialList = '!~`@#$%^&*_-';
var numberList = '1234567890';

function generatePassword() {
  var pass = "";
  var passwordLength = prompt("How many characters would you like? (12-128");

  if (passwordLength < 12 || passwordLength > 128) {
    window.alert("Please input a value between 12 and 128")
    return pass;
  }

  var specialCharacters = confirm("Would you like special characters?");
  var numericValues = confirm("Would you like numeric values?");
  var lowerCase = confirm("Would you like lower case letters?");
  var upperCase = confirm("Would you like upper case letters?");

  if (!specialCharacters && !numericValues && !lowerCase && !upperCase) {
    window.alert("Please select at least one condition")
    return pass;
  }

  var characterBucket = "";

  // if specialCharacters = yes, then add specialList to characterBucket
  // if numericValues = yes, then add numberList to characterBucket
  // if lowerCase = yes, then add alphaList to characterBucket
  // if upperCase = yes, then add alphaUpperList to characterBucket

  if (specialCharacters) {
    characterBucket = characterBucket + specialList
  }

  if (numericValues) {
    characterBucket = characterBucket + numberList
  }

  if (lowerCase) {
    characterBucket = characterBucket + alphaList
  }

  if (upperCase) {
    characterBucket = characterBucket + alphaUpperList
  }

  for (let i = 1; i <= passwordLength; i++) {
    var char = Math.floor(Math.random()
      * characterBucket.length + 1);
    pass += characterBucket.charAt(char)
  }

  return pass;
}

// specialList[Math.floor(Math.random()*specialList.length)]

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
