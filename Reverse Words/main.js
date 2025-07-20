function reverseWords(string) {
  let wordsArr = string.split(" ");
  let reversedWordsArr = [];

  wordsArr.forEach((word) => {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }
    reversedWordsArr.push(reverseWord);
  });
  return reversedWordsArr.join("  ");
}

console.log(reverseWords("Coding javascript"));
