// This has a very bad time complexity because is recursive two times in the function.
// By passing a large number like 40 or 50 it takes a lot of time to respond or can crash the browser.
//This is not a good idea to do.

function fibonacci(position) {
  if (position > 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}
