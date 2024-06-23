export const reverseAString = (str) => {
	// Write your code here
	if (str === "") {
        return "";
    }
    // Reverse the string using built-in methods
    return str.split('').reverse().join('');
}
