const generateParens = (n) => {
  if (n === 0) return [];
  let results = [];
  const addParen = (left, right, str) => {
    if (left < 0) return;
    if (left === 0 && right === 0) results.push(str);
    if (left < right) addParen(left, right - 1, str + ')');
    addParen(left - 1, right, str + '(');
  };
  addParen(n, n, '');
  return results;
};
console.log(generateParens(4));

const coinSums = (n, denoms) => {
  // create array of zeroes from zero to n
  let results = Array(n + 1).fill(0);
  // only one way to get zero
  results[0] = 1;
  denoms.forEach(coin => {
    for (let curr = coin; curr <= n; curr++) {
      // adding balance curr counts to make the current curr counts after taking out current coin value
      results[curr] += results[curr - coin];
    }
  });
  return results[n];
}

// console.log(coinSums(30, [1, 5, 10, 25]));