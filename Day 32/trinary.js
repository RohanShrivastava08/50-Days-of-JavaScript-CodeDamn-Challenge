export class Trinary {
	/**
	 * Create a number.
	 * @param {string} trinaryNumber
	 */
    constructor(trinaryNumber) {
		// Implement the Constructor
        this.trinaryNumber = trinaryNumber;
    }

	/**
	 * Get the decimal equivalent of the trinary number
	 * @return {number} decimalNumber
	 */
    toDecimal() {
		// Implement your method here
        const validChars = '012';
        let decimalNumber = 0;

        for (let i = 0; i < this.trinaryNumber.length; i++) {
            const digit = this.trinaryNumber[this.trinaryNumber.length - i - 1];
            if (!validChars.includes(digit)) {
                return 0;
            }
            decimalNumber += parseInt(digit, 3) * Math.pow(3, i);
        }

        return decimalNumber;
    }
}

// Sample Test Cases
const firstNumber = new Trinary("102012");
console.log(firstNumber.toDecimal());

const secondNumber = new Trinary("1211112");
console.log(secondNumber.toDecimal());
