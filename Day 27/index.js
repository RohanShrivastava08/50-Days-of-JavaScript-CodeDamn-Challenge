export const findCharacter = (str) => {
	// Write your code here
	const charCount = {};
  
	for (const char of str) {
	  charCount[char] = (charCount[char] || 0) + 1;
	}
	
	// Step 2: Find the first non-repeating character
	for (const char of str) {
	  if (charCount[char] === 1) {
		return char;
	  }
	}
	
	// If no non-repeating character is found, return null
	return null;
  };
