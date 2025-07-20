function twoSum(numArray, sum) {
  let pairs = [];
  let hashaTable = [];

  for (let i = 0; i < numArray.length; i++) {
    let currNum = numArray[i];
    let counterpart = sum - currNum;
    if (hashaTable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart]);
    }
    hashaTable.push(currNum);
  }
  return pairs;
}

console.log(twoSum([1, 6, 5, 4, 3, 3], 7));
