// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

/*function validate() {
  if (newPass.length < 8) {
    prompt("Password must be 8-128 characters and include valid character types")
  } else if (newPass.length > 128) {
    prompt("Password must be 8-128 characters and include valid character types")
  }
}
*/

//verifies length of password
function verifyLength(passLength) {
  if (passLength >= 8 && passLength <= 128) {
    return true;
  } else {
    return false;
  };
}

// Function generates new password
function generatePassword() {
  //Saves characters chosen by user
  var charString = "";

  //Saves new password
  var newPassword = "";

  //Prompts for user to choose password
  var passLength = prompt("Choose a password with 8-128 characters");

  //sets different character types to choose from
    var charUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charLowerCase = "abcdefghijklmnopqrstuvwxyz";
    var charNumbers = "1234567890";
    var charSymbols = "!@#$%^&*()`~{}|[]()";

  // sets confirmation for password options
  if (verifyLength(passLength)) {
    var addUpperCase = confirm("Will this password have capital letters?");
    var addLowerCase = confirm("Will this password have lowercase letters?");
    var addNumbers = confirm("Will this password have numbers?");
    var addSymbols = confirm("Will this password have symbol keys?");

    //Combines chosen letters
    //if (addUpperCase) charArray.push(validChar.upperCase);
    //if (addLowerCase) charArray.push(validChar.lowerCase);
    //if (addNumbers) charArray.push(validChar.numbers);
    //if (addSymbols) charArray.push(validChar.symbols);
  
  if (addUpperCase) {
     charString += charUpperCase
  } else if (addLowerCase){
     charString += charLowerCase
  } else if (addNumbers) {
     charString += charNumbers
  } else if (addSymbols){
     charString += charSymbols
  }
}
  
   // Generate random password based on selection of characters in array
  for (let i = 0; i < passLength; i++) {
    randPassword = Math.floor(Math.random() * charString.length)
    newPassword += charString.charAt(randPassword);
  }


  //This return logs new password to window
    return newPassword; 

  //logs new password with confirmation in pop up window
    //return confirm(newPassword);
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
