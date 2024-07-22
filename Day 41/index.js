export function reverseString(str) {
	// Your code here
	return str.split('').reverse().join('');
}

export function capitalizeFirstLetters(str) {
	// Your code here
	return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export function findLongestWord(str) {
	// Your code here
	return str.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

export function wordCount(str) {
	// Your code here
	return str.split(' ').length;
}
