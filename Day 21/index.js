function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here

	return Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;

}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)
