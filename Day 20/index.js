//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
    if (n <= 0) {
      throw new Error('Only positive integers are allowed');
    }
  
    let stepsCount = 0;
  
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
      stepsCount++;
    }
  
    return stepsCount;
  };