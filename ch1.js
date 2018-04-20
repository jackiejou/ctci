const uniqueChar = (str) => {
  let obj = {};
  for (let char of str) {
    if (obj[char]) return false;
    obj[char] = true; 
  }
  return true;
};
// O(N) time with extra space for object

const twoStringPerm = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let obj = {};
  for (let char of str1) {
    obj[char] ? obj[char]++ : obj[char] = 1;
  }
  for (let char of str2) {
    if (obj[char]) {
      obj[char]--;
      if (obj[char] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};
// O(N) time with extra space for object

const Urlify = (str) => {
  // let answer = '';
  // for (let char of str) {
  //   if (char === ' ') {
  //     answer += '%20';
  //   } else {
  //     answer += char;
  //   }
  // }
  // return answer;
  return str.replace(' ', '%20'); // same as above
};
// O(N) time with extra space for new string

const palindromPerm = (str) => {
  let obj = {};
  for (let char of str) {
    if (char !== ' ') {
      obj[char] = !obj[char];
    }
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
// O(N) time with extra space for object

console.log(palindromPerm('car a c rr'));