function caesarCipher(str, num) {
  num = num % 26; // For handling numbers which can provide index grreater than 26
  var lowerCaseString = str.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); // Alphabets to find the indices of characters.
  var newString = "";

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === " ") {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter); //Determine which index every character is on.
    var newIndex = currentIndex + num; //Increment by num.
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }
  return newString;
}
console.log(caesarCipher("Zoo keeper", 2));
