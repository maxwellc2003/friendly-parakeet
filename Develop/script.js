// Assignment code here
var characterBucket = "";
var alphaList = 'abcdefghijklmnopqrstuvwxyz';
var alphaUpperList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialList = '!~`@#$%^&*_-';
var numberList = '1234567890';

function generatePassword() {
  var pass = "";
  var passwordLength = prompt("How many characters would you like? (12-128");
  var specialCharacters = confirm("Would you like special characters?");
  var numericValues = confirm("Would you like numeric values?");
  var lowerCase = confirm("Would you like lower case letters?");
  var upperCase = confirm("Would you like upper case letters?");

  // if specialCharacters = yes, then add specialList to characterBucket
  // if numericValues = yes, then add numberList to characterBucket
  // if lowerCase = yes, then add alphaList to characterBucket
  // if upperCase = yes, then add alphaUpperList to characterBucket

/* if (passwordLength < 12) {
  window.alert("Please input a value between 12 and 128")
}*/

//single condition if statements
if (lowerCase == true && upperCase == false && specialCharacters == false && numericValues == false) [
  characterBucket = (alphaList)
]

else if (numericValues == true && upperCase == false && specialCharacters == false && lowerCase == false) [
  characterBucket = (numberList)
]

else if (specialCharacters == true && upperCase == false && numericValues == false && lowerCase == false) [
  characterBucket = (specialList)
]

else if (upperCase == true && specialCharacters == false && numericValues == false && lowerCase == false) [
  characterBucket = (alphaUpperList)
]

//double condition if statements
else if (specialCharacters == true && lowerCase == true && numericValues == false && upperCase == false) [
  characterBucket = (alphaList + specialList)
]

else if (lowerCase == true && upperCase == true && numericValues == false && specialCharacters == false) [
  characterBucket = (alphaList + alphaUpperList)
]

else if (lowerCase == true && numericValues == true && specialCharacters == false && upperCase == false) [
  characterBucket = (alphaList + numberList)
]

else if (specialCharacters == true && numericValues == true && lowerCase == false && upperCase == false) [
  characterBucket = (numberList + specialList)
]

else if (numericValues == true && upperCase == true && lowerCase == false && specialCharacters == false) [
  characterBucket = (numberList + alphaUpperList)
]

else if (specialCharacters == true && upperCase == true && numericValues == false && lowerCase == false) [
  characterBucket = (specialList + alphaUpperList)
]

//triple condition if statements
else if (lowerCase == true && specialCharacters == true && upperCase == true && numericValues == false) [
  characterBucket = (alphaList + specialList + alphaUpperList)
]

else if (lowerCase == true && specialCharacters == true && numericValues == true && upperCase == false) [
  characterBucket = (alphaList + specialList + numberList)
]

else if (lowerCase == true && numericValues == true && upperCase == true && specialCharacters == false) [
  characterBucket = (alphaList + numberList + alphaUpperCase)
]

else if (numericValues == true && upperCase == true && specialCharacters == true && lowerCase == false) [
  characterBucket = (numberList + alphaUpperCase + specialList)
]

//if all are true
else if (specialCharacters == true && lowerCase == true && numericValues == true && upperCase == true) [
  characterBucket = (numberList + alphaList + specialList + alphaUpperList)
]

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
