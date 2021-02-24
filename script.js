/* 

    GOALS

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

    //pusedocode

    WE CHOSE THE LENGTH done
    MIN -> 8 && MAX -> 128 done
    MUST HAVE lowercase, uppercase, numeric, and/or special characters
    MUST HAVE ENTRY || check if something is entered

    //edge cases

    if nothing is enter
    if it is greater or less than the max/min characters


*/


// Assignment code here


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  generatePassword()

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



let generatePassword = () => {

  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeric = '1234567890';
  const special = '/\!@#$%^&*()';

  let empString = '';

  let passwordGen = '';


  const userlower = confirm("Do you want lower?")
  const userupper = confirm("Do you want upper?")
  const userNumeric = confirm("Do you want numbers?")
  const userSpecial = confirm('Do you want special?')
  const userNum = prompt("Choose a Number")

  if (userlower) {
    empString = empString + lowercase;
  }

  if (userupper) {
    empString = empString + uppercase;
  }

  if (userNumeric) {
    empString = empString + numeric;
  }

  if (userSpecial) {
    empString = empString + special;
  }

  if(userNum) {
    n = userNum;
  }


  if( n > 8 && n < 128 ) {
    for(let i = 0; i < n; i++) {
      let ran = Math.floor(Math.random() * empString.length);  
      passwordGen += empString[ran];
    }
    
  } 

  console.log(passwordGen)
  let passwordText = document.querySelector("#password");
  passwordText.value = passwordGen;

}






