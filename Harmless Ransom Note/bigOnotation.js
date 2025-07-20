//BIG O NOTATION

//Constant Runtime || //Big O Notation: 0(1)
function log(array) {
  console.log(array[0]);
  console.log(array[1]);
}
log(["A", "B", "C", "D"]);
log(["A", "B", "C", "D", "E", "F"]);
log(["A", "B", "C", "D", "E", "F", "G", "H"]); //No matter how we increase the input there is no increase of operation cause we will always log the first and the second element

//Linear runtime ||  //Big O notation: 0(n)
function logAll(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
logAll([1, 2, 3, 4]);
logAll([1, 2, 3, 4, 5, 6]);
logAll([1, 2, 3, 4, 5, 6, 7, 8]); //With the increase of the inputs time complexity also increases beacuse we have to loop through all the input first.

//Exponential runtime || //Big O notation: 0(n^2)
function addAndLog(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      console.log(array[i] + array[j]);
    }
  }
}
addAndLog(["A", "B", "C"]);
// addAndLog(["A", "B", "C", "D"]);
// addAndLog(["A", "B", "C", "D", "E"]);
