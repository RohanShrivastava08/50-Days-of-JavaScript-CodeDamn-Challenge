//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
    const digits = number.toString().split('');
    const numDigits = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), numDigits), 0);
    return sum === number;
  };