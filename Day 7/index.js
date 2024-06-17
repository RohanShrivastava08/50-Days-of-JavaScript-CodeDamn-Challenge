export const sumOfEvens = (arr) => {
	// Write your code here
	 let sum = 0; // Initialize sum of even numbers
    for (let num of arr) { // Iterate through the array
        if (num % 2 === 0) { // Check if the number is even
            sum += num; // Add even number to the sum
        }
    }
    return sum; // Return the sum of even numbers
}
