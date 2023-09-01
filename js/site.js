//Get our user input
function getValue() {
  //get user a string from the page
  let userString = document.getElementById("userString").value;

  //make sure alert is invisible
  document.getElementById("alert").classList.add("invisible");

  //check for palindrome
  let returnObjt = checkForPalindrome(userString);

  //Display out message to the screen
  displaymessage(returnObjt);
}

//check if a string is a palindrome
function checkForPalindrome(userString) {
  //tac cat
  userString = userString.toLowerCase();

  //remove spaces and special characters
  let regex = /[^\w]/g;
  userString = userString.replace(regex, "");

  let revString = [];
  let returnObj = {};

  for (index = userString.length - 1; index >= 0; index--) {
    revString += userString[index];
  }
  if (userString == revString) {
    returnObj.msg = "Well done! You entered a palindrome";
  } else {
    returnObj.msg = "Sorry! You did not enter a palindrome";
  }
  returnObj.reversed = revString;
  return returnObj;
}

//display a message a message to the screen
function displaymessage(returnObjt) {
  document.getElementById("alertHeader").innerHTML = returnObjt.msg;
  document.getElementById(
    "msg"
  ).innerHTML = `Your phrase reversed is: ${returnObjt.reversed}`;
  document.getElementById("alert").classList.remove("invisible");
}
