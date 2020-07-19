// Arrays for each of the confirmations.
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define the generatePassword function
function generatePassword() {

  //Initialize an empty array for the newPassword being generated.
  //Ask the user for the password length.
  var newPassword = [];
  var passwordLength = prompt("How many characters are needed for the password? (Min 8, Max 128)");

  //Validates that the user has chosen a passwordLength within the allowable range.
  while (passwordLength < 8 || passwordLength > 128) {
    //Let the user know their submission was outside of the acceptable range & prompt again.
    alert("Character length must be between 8 and 128.");
    passwordLength = prompt("How many characters are needed for the password? (Min 8, Max 128)");
  }
  
  //Initialize an empty array for the possible character arrays based on the user's response.
  var characterTypeArray = [];

  //Confirm which character types will be needed in the password. 
  //Push 1 character from the respective character type array to the newPassword array.
  //Add the respective character type array to characterTypeArray.
  var confirmLowerCase = confirm("Do you need at least one lower case character?");
    if (confirmLowerCase) {      
      //Select a random character from the lowercaseLetters array and push it to the newPassword array.
      var randomLower = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
      newPassword.push(randomLower);
      //Add lowercaseLetters array to the characterTypeArray
      characterTypeArray.push(lowercaseLetters);
    }

  var confirmUpperCase = confirm("Do you need at least one upper case character?");
    if (confirmUpperCase) {
      var randomUpper = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
      newPassword.push(randomUpper);
      characterTypeArray.push(uppercaseLetters);
    }

  var confirmNumericals = confirm("Do you need at least one numerical character?");
    if (confirmNumericals) {
      var randomNumerical = numericals[Math.floor(Math.random() * numericals.length)];
      newPassword.push(randomNumerical);
      characterTypeArray.push(numericals);
    }

  var confirmSpecial = confirm("Do you need at least one special character?");
    if (confirmSpecial) {
      var randomSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
      newPassword.push(randomSpecial);
      characterTypeArray.push(specialCharacters);
    }

    //newPassword array has at least one character from each of the selected character types.
    //characterTypeArray only includes the arrays that the user has selected from the confirms.

    //remainingCharacters capture the number of loops needed in the following for loop.
    //var remainingCharacters = passwordLength - newPassword.length

    //Fill in the remaining characters for the password by randomly choosing from the arrays 
    //within characterTypeArray and then randomly choosing within that particular array.
    //Loop once for the generation of each character up to the exact character length chosen by the user.
    for (var i = newPassword.length; i < passwordLength; i++) {

    //Select one random array within characterTypeArray and then one random character from that array.
    //Push random character to the end of the newPassword array.
    var randomCharacterTypeArray = characterTypeArray[Math.floor(Math.random() * characterTypeArray.length)];
    var randomCharacter = randomCharacterTypeArray[Math.floor(Math.random() * randomCharacterTypeArray.length)];
    newPassword.push(randomCharacter);

    //Repeat this loop until the length of the newPassword array matches the user's specifications stored in passwordLength.
    }

//Shuffle the characters within the newPassword array to avoid formulaic passwords.
newPassword = newPassword.sort(() => Math.random() - 0.5)

//Convert the newPassword array into a text string to assign to var password.
  var password = newPassword.join().replace(/,/g,"");
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);