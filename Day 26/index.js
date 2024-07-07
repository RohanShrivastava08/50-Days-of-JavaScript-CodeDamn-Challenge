export const capitaliseAllWords = (input) => {
	// Write your code here
	return input
	.split(' ')
	.map(word => word.charAt(0).toUpperCase() + word.slice(1))
	.join(' ');
}
