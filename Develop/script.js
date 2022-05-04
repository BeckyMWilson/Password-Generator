// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
var numberList = "0123456789";
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~'";

// Write password to the #password input
// TODO: Function function writePassword() is taking too long //
function writePassword() {
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
  var lowerCaseLetters = window.confirm(
    "Click OK to confirm using lowerecase letters."
  );
  console.log("Ask for lowercase letters", lowerCaseLetters);
  // 2.2 confirm whether or not to include uppercase
  var upperCaseLetters = window.confirm(
    "Click OK to confirm using uppercase letters."
  );
  console.log("Ask for uppercase letters", upperCaseLetters);
  // 2.3 confirm whether or not to include numeric
  var numberList = window.confirm("Click OK to confirm using numbers.");
  console.log("Ask for numbers", numberList);
  // 2.4  confirm whether or not to include special Char
  var specialCharacters = window.confirm(
    "Click OK to confirm using special characters."
  );
  console.log("Ask for special characters", specialCharacters);

  //3. THEN my input should be validated and at least one character type should be selected
  // TODO: Doublecheck my work
  if (!lowerCaseLetters && !upperCaseLetters && !numberList && !specialCharacters)
  {
    alert("Please select at least one character type");
    lowerCaseLetters = window.confirm(
      "Click OK to confirm using lowerecase letters."
    );
    upperCaseLetters = window.confirm(
      "Click OK to confirm using uppercase letters."
    );
    numberList = window.confirm("Click OK to confirm using numbers.");
    specialCharacters = window.confirm(
      "Click OK to confirm using special characters."
    );
  }
  var allRandomCharacters = "";
  // console.log(allRandomCharacters);

  if (lowerCaseLetters) {
    allRandomCharacters = allRandomCharacters + lowerCaseLettersList;
  }
  if (upperCaseLetters) {
    allRandomCharacters = allRandomCharacters + upperCaseLettersList;
  }

  if (numberList) {
    allRandomCharacters = allRandomCharacters + numbersList;
  }
  if (specialCharacters) {
    allRandomCharacters = allRandomCharacters + specialCharactersList;
  }
  // console.log("updated list ", allRandomCharacters);

  //4.for loop based on the password length
    for (var i = 0; i < passwordLength; i++) {
      // console.log("loop count", i);
      // 4.1 generate a random index
      var randint = Math.floor(Math.random() * allRandomCharacters.length);
      // 4.2 based on randomIndex pick a random letter
      var randomLetter = allRandomCharacters.charAt(randint);
      // console.log("random index ", randint, " generated random char",randomLetter);
      // 4.3 add the values to result variable
      result = result + randomLetter;
    }

    return result;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
