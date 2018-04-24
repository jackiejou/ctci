const calculate = (str) => {
  let sum = 0;
  let product = 1;
  let number = '';
  let div;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (/\d/.test(char)) {
      number += char;
      if (i !== str.length - 1) continue;
    }

    div ? product /= +number : product *= +number;
    number = char === '-' ? '-' : '';
    div = char === '/';
    
    if (char !== '*' && char !== '/') {
      sum += product;
      product = 1;
    }
  }
  return sum;
}
console.log(calculate('3*10/6+3*8/4-3*4/2+9/3-1'));
console.log(calculate('3/2'));
console.log(3*10/6+3*8/4-3*4/2+9/3-1);