//Let's use the example of factorial to understand the recursive function

// Factorial(!)
// 4! = 4*3*2*1 = 24

// 3! = 3*2*1 = 6

function factorial(num) {
  if (num === 1) {
    return num; // This is the base case.
  } else {
    return num * factorial(num - 1); // The factorial will continue to run until the base case is satisfied.
  }
}
console.log(factorial(5));
