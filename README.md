# Homework3

User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

Notes
//Initialized and defined an arrays for each character type.
//Defined the generatButton function,
    //Initialized an empty array for the new password being generated.
    //Asked the user for their preferred password length and stored it to variable passwordLength.
          //Validate that the user has chosen a passwordLength within the allowable range.
          //Let the user know if their submission was outside of the acceptable range & prompt again.
    //Confirm which character types will be needed in the password. 
          //Push 1 character from the respective character type array to the newPassword array.
          //Add the respective character type array to characterTypeArray.
    //newPassword array now has at least one character from each of the selected character types.
    //characterTypeArray only includes the arrays that the user has selected from the confirms.

    //With a for loop, fill in the remaining characters for the password by randomly choosing from the arrays 
    //within characterTypeArray and then randomly choosing within that particular array.
    //Loop once for the generation of each character up to the exact character length chosen by the user.
        //Select one random array within characterTypeArray and then one random character from that array.
        //Push random character to the end of the newPassword array.
        //Repeat this loop until the length of the newPassword array matches the user's specifications stored in passwordLength.

//Shuffle the characters within the newPassword array to avoid formulaic passwords.
//Convert the newPassword array into a text string to assign to var password.
// Write password to the #password input
// Add event listener to generate button
