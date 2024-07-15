/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */
const convertDigitsToAskedBase = (digits, baseA, baseB) => {
	// Your code here
	let base10Num = digits.reduce((acc, digit) => acc * baseA + digit, 0);

	// Convert the base 10 number to the target baseB
	const result = [];
	do {
	  result.unshift(base10Num % baseB);
	  base10Num = Math.floor(base10Num / baseB);
	} while (base10Num > 0);
  
	return result;
  };