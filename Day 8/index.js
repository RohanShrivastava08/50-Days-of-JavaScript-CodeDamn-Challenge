export const sumOfThirds = (arr) => {
	// Write your code here
	// Check if the array has less than 3 elements
    if (arr.length < 3) {
        return 0;
    }

    // Filter the elements at every third index and sum them up
    const sum = arr
        .filter((_, index) => index % 3 === 0)
        .reduce((acc, num) => acc + num, 0);

    return sum;
}

