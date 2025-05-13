function intToRoman(num) {
  // Define the fundamental values for the roman map
  const baseMap = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  };

  const keys = [1000, 100, 10, 1];
  let result = '';

  //loop through the keys
  for (let k of keys) {
    // I use Math.floor because I want to ignore the decimals
    let digit = Math.floor(num / k);

    // The below is same with num = num%K, which means replace number with the remainder after dividing k
    num %= k;

    if (digit === 0) continue;

    // if k is 10, then it's 'X'. that means 10 * 5 = 'L' and so on. Depending on what number it is, i'll be able to know if to do addition or substraction
    let one = baseMap[k];
    let five = baseMap[k * 5] || '';
    let ten = baseMap[k * 10] || '';

    if (digit <= 3) {
      result += one.repeat(digit);
    } else if (digit === 4) {
      result += one + five;
    } else if (digit >= 5 && digit <= 8) {
      result += five + one.repeat(digit - 5);
    } else if (digit === 9) {
      result += one + ten;
    }
  }

  return result;
}

// Examples
console.log("100 ➜", intToRoman(100));   // Answer is C
console.log("1994 ➜", intToRoman(1994)); // Answer is MCMXCIV
console.log("1987 ➜", intToRoman(1987)); // Answer is MCMLXXXVII
console.log("91 ➜", intToRoman(91));     // Answer is XCI
console.log("58 ➜", intToRoman(58));     // Answer is LVIII
console.log("150 ➜", intToRoman(150));     // Answer is CL
console.log("1770 ➜", intToRoman(1770));     // Answer is MDCCLXX
console.log("1998 ➜", intToRoman(1998));     // Answer is MCMXCVIII
console.log("5000 ➜", intToRoman(5000));     // Answer is UNDEFINED because I didn't the base map for 5,000. Also romans don't support pass 3999

