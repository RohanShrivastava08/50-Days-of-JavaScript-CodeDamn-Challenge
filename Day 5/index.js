export const capitaliseWord = (word) => {
	// Write your code here
	if (word.length === 0) {
        return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
};

console.log(capitaliseWord("hello")); // Output: 'Hello'
console.log(capitaliseWord("mom")); // Output: 'Mom'
console.log(capitaliseWord("dAD")); // Output: 'DAD'
