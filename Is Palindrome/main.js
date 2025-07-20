function isPalindrome(string) {
  string = string.toLowerCase(); //lower case to avoid sensitivity of javascript
  var charactersArr = string.split(""); // make them an array
  var validCharacters = "abcdefghijklmnopqrstuvwxyz".split(""); //

  var lettersArr = [];
  charactersArr.forEach((char) => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char); // For removing invalid character from the validCharacters variable and remain with the valid ones.
  });

  return lettersArr.join("") === lettersArr.reverse().join("");
}

console.log(isPalindrome("Madam, I'm Adam"));
