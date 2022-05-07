document.addEventListener("DOMContentLoaded", function() {
// Assignment code here

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = ("abcdefghijklmnopqrstuvwxyz").toUpperCase();
const numberList = "0123456789";
const specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~'";

// Write password to the #password input
// TODO: Function function writePassword() is taking too long //
function writePassword() {
  console.log("lowerCaseLetters: ", lowerCaseLetters); 
console.log("upperCaseLetters: ", upperCaseLetters); 
console.log("numberList: ", numberList); 
console.log("specialCharacters: ", specialCharacters);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  
  console.log("this is where my password generation logic goes ");
  var result = "";
  //Password criteria goes here

  // TODO: How to prompt for # of characters? Var element??
  //1. Prompt for password length 8-128 characters
  var passwordLength = parseInt(window.prompt("How many characters would you like to use (must be between 8-128 characters)?"));
    console.log("Window asking how many characters", passwordLength);
      // TODO: if 8-128 continue; if <> then prompt again
      if (passwordLength < 8 || passwordLength > 128) {
      alert("Enter valid number of characters !!");
      passwordLength = parseInt(window.prompt("Please re-enter, How many characters would you like to use (must be between 8-128 characters?"));
    }
  //2. Ask for character types to include in the password
  // 2.1 confirm whether or not to include lowercase
  var lowerCaseLettersPrompt = window.confirm("Click OK to confirm using lowerecase letters.");
  console.log("Ask for lowercase letters", lowerCaseLetters);
  // 2.2 confirm whether or not to include uppercase
  var upperCaseLettersPrompt = window.confirm("Click OK to confirm using uppercase letters.");
  console.log("Ask for uppercase letters", upperCaseLetters);
  // 2.3 confirm whether or not to include numeric
  var numberListPrompt = window.confirm("Click OK to confirm using numbers.");
  console.log("Ask for numbers", numberList);
  // 2.4  confirm whether or not to include special Char
  var specialCharactersPrompt = window.confirm("Click OK to confirm using special characters.");
  console.log("Ask for special characters", specialCharacters);

  //3. THEN my input should be validated and at least one character type should be selected
  // Makes sure user has at least one of the requirements selected to run 
  if (!lowerCaseLettersPrompt && !upperCaseLettersPrompt && !numberListPrompt && !specialCharactersPrompt) {
    alert("Please select at least one character type");
    lowerCaseLettersPrompt = window.confirm(
          "Click OK to confirm using lowercase letters."
        );
        upperCaseLettersPrompt = window.confirm(
          "Click OK to confirm using uppercase letters."
        );
        numberListPrompt = window.confirm("Click OK to confirm using numbers.");
        specialCharactersPrompt = window.confirm(
          "Click OK to confirm using special characters."
        );
  }
  var allRandomCharacters = ("");

  if (lowerCaseLettersPrompt) {
    allRandomCharacters = allRandomCharacters + lowerCaseLetters;
  }
  if (upperCaseLettersPrompt) {
    allRandomCharacters = allRandomCharacters + upperCaseLetters;
  }
  if (numberListPrompt) {
    allRandomCharacters = allRandomCharacters + numberList;
  }
  if (specialCharactersPrompt) {
    allRandomCharacters = allRandomCharacters + specialCharacters;
  }
  console.log("updated list ", allRandomCharacters);

  //4.for loop based on the password length
    for (var i = 0; i < passwordLength; i++) {
      console.log("loop count", i);
      // 4.1 generate a random index
      var randint = Math.floor(Math.random() * allRandomCharacters.length);
      // 4.2 based on randomIndex pick a random letter
      var randomLetter = allRandomCharacters.charAt(randint);
      console.log("Random letter",randomLetter, "at random index", randint);
      // 4.3 add the values to result variable
      result = result + randomLetter;
    }

    return result;
}

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
})