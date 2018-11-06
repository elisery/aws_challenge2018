const convertNum = (num) => {
  const digit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let numArr = [];
  let decimalVal = '';

  if (num % 1 !== 0) {
    numArr = num.toString().split('.');
    decimalVal = ` and ${numArr.pop()}/100`;
  } else {
    numArr.push(num.toString());
  }
  const numWords = [];

  numArr = chunkArray(numArr[0], 3);
  numArr.forEach(grp => {
    let word;
    if (grp.length === 3) {
      if (grp[0] > 0) {
        word = `${digit[grp[0]]} hundred `;
        word = `${word}${getTens(grp, digit, tens)}`;
      } else {
        word = `${digit[grp[0]]}`;
        word = `${word}${getTens(grp, digit, tens)}`;
      }
    } else {
      grp > 19 ? word = `${tens[grp[0]]}-${digit[grp[1]]}` : 
      word = digit[grp.slice(0,2)];
    }
    numWords.push(word);
  });
  if (numWords.length === 3) {
    numWords[0] = `${numWords[0]} million `;
    numWords[1] !== '' ? numWords[1] = `${numWords[1]} thousand ` : false;
  } else if (numWords.length === 2) {
    numWords[0] = `${numWords[0]} thousand `;
  }
  return `${numWords.join('')}${decimalVal}`;
}

const chunkArray = (num, size) => {
  const newArr = [];
  const numArr = num.split('').reverse();
  for (let i = 0; i < numArr.length; i += size) {
    newArr.push(numArr.slice(i, i + size).reverse().join(''));
  }
  return newArr.reverse();
}

const getTens = (num, digit, tens) => {
  let numWord;
  if (num[2] > 0) {
    numWord = `${tens[num[1]]}-${digit[num[2]]}`
  } else if(num[1] === '0' && num[2] === '0') {
    numWord = '';
  } else if(num.slice(1,3) < 19){
    numWord = digit[num.slice(1,3)];
  } else {
    numWord = `${tens[num[1]]}`;
  }
  return numWord;
}