const uniqueChar = (str) => {
  let obj = {};
  for (let char of str) {
    if (obj[char]) return false;
    obj[char] = true; 
  }
  return true;
};
// O(N) time with extra space for object map

const twoStringPerm = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let obj = {};
  for (let char of str1) {
    obj[char] ? obj[char]++ : obj[char] = 1;
  }
  for (let char of str2) {
    if (obj[char]) {
      obj[char]--;
      if (obj[char] < 0) return false;
    } else {
      return false;
    }
  }
  return true;
};
// O(N) time with extra space for object map

const Urlify = (str) => {
  let result = '';
  for (let char of str) {
    result += char === ' ' ? '%20' : char;
  }
  return result;
  // return str.replace(' ', '%20'); // same as above
};
// O(N) time with extra space for new string

const palindromPerm = (str) => {
  let obj = {};
  for (let char of str) {
    if (char !== ' ') obj[char] = !obj[char];
  }
  let foundOdd = false;
  for (let key in obj) {
    if (obj[key]) {
      if (foundOdd) return false;
      foundOdd = true;
    }
  }
  return true;
};
// O(N) time with extra space for object map

const oneEditAway = (str1, str2) => {
  let diff = str1.length - str2.length;
  // ignore more than one edits
  if (Math.abs(diff) > 1) return false;
  let [short, long] = diff > 0 ? [str2, str1] : [str1, str2];
  let shortIndex = longIndex = 0;
  let diffFound = false;
  while (shortIndex < short.length && longIndex < long.length) {
    // check diff letter
    if (short[shortIndex] !== long[longIndex]) {
      if (diffFound) return false;
      diffFound = true;

      // check if it is replace case
      if (short.length === long.length) shortIndex++;
    } else {
      // goes to next index if current letter match
      shortIndex++;
    }
    longIndex++;
  }
  return true;
};
// O(larger string length N) time with no extra space

const stringCompress = (str) => {
  let result = '';
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    counter++;
    if (str[i] !== str[i + 1]) {
      result += str[i] + counter;
      counter = 0;
    }
  }
  return result.length > str.length ? str : result;
};
// O(N) time with extra space for new string

const matrix3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const matrix4 = [['a', 'b', 'c', 'd'], ['e', 'f', 'g', 'h'], ['i', 'j', 'k', 'l'], ['m', 'n', 'o', 'p']];

const rotateMatrix = (matrix) => {
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    newMatrix.push([]);
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      newMatrix[col][matrix.length - row - 1] = matrix[row][col]
    }
  }
  return newMatrix;
}
// O (N**2) time with extra space for new matrix

const rotateMatrixInPlace = (matrix) => {
  for (let layer = 0; layer < matrix.length / 2; layer++) {
    let first = layer;
    let last = matrix.length - 1 - layer;
    for (let i = first; i < last; i++) {
      let offset = i - first;
      [
        matrix[first][i],
        matrix[last - offset][first],
        matrix[last][last - offset],
        matrix[i][last]
      ] = [
        matrix[last - offset][first],
        matrix[last][last - offset],
        matrix[i][last],
        matrix[first][i]
      ]
      // let temp = matrix[first][i];
      // matrix[first][i] = matrix[last - offset][first];
      // matrix[last - offset][first] = matrix[last][last - offset];
      // matrix[last][last - offset] = matrix[i][last];
      // matrix[i][last] = temp;
    }
  }
  return matrix;
};
// O (N**2) time with no extra space

const matrix0 = [[0, 2, 3], [4, 5, 6], [7, 8, 0]];

const zeroMatrix = (matrix) => {
  let zeroRow = [];
  let zeroCol = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] === 0) {
        zeroRow.push(row);
        zeroCol.push(col);
      }
    }
  }
  zeroRow.forEach(row => {
    matrix[row] = matrix[row].map(val => 0);
  });
  zeroCol.forEach(col => {
    matrix.forEach(row => row[col] = 0);
  });
  return matrix;
};
// O (N**2) time with extra space to log zero rows and cols

const isRotatedString = (str1, str2) => {
  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      if ((str2.slice(i) + str2.slice(0, i)) === str1) {
        return true;
      }
    }
  }
  return false;
};
// O (N) time with no extra space