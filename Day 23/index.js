export const areAnagrams = (strOne, strTwo) => {
	// Write your code here
	const formatString = (str) => str.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
  return formatString(strOne) === formatString(strTwo);
}
