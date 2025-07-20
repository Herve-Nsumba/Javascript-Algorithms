function sieveOfErathosthenes(n) {
  let prime = [];
  for (let i = 0; i <= n; i++) {
    prime[i] = true;
  }

  prime[0] = false;
  prime[1] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 2; j * i <= n; j++) {
      prime[i * j] = false;
    }
  }
  let results = [];
  for (let i = 0; i < prime.length; i++) {
    if (prime[i]) results.push(i);
  }
  return results;
}
console.log(sieveOfErathosthenes(20));
