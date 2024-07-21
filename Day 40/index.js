// Step 1: Create 'allPositive' function using array.prototype.every()
const allPositive = (arr) => arr.every(num => num > 0);

// Step 2: Export 'allPositive' function
export { allPositive };

// Step 3: Create 'startsWithCapital' function using array.prototype.every()
const startsWithCapital = (arr) => arr.every(str => /^[A-Z]/.test(str));

// Step 4: Export 'startsWithCapital' function
export { startsWithCapital };
