export const sumOfThirds = (arr) => {
	// Write your code here
	// Check if the array has less than 3 elements
  	let sum = 0
	for (let i = 0; i < arr.length; i += 3) {
		sum += arr[i]
	}
	return sum
}


