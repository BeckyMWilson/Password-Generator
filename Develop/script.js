// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
var numberList = "0123456789";
var specialCharacters = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  console.log("this is where my password generation logic goes ");
  var result = "";
  //Password criteria goes here

  //1. Prompt for password length 8-128 characters
  //2. Ask for character types to include in the password
  // 2.1 confirm whether or not to include lowercase
  // 2.2 confirm whether or not to include uppercase
  // 2.3 confirm whether or not to include numeric
  // 2.4  confirm whether or not to include special Char

  //3. THEN my input should be validated and at least one character type should be selected

  //4.for loop based on the password length
  // 4.1 generate a random index
  // 4.2 based on randomIndex pick a random letter
  // 4.3 add the values to result variable

  return result;
}

//generate a random Index using Math.floor and math.random
function randomize(yourArray) {
  randint = Math.floor(Math.random() * yourArray.length);
  return randint;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
