const findSubstringIndex = (text, sub) => {
	// Your code here
	if (!text || !sub) return -1
	return text.indexOf(sub)
}

export default findSubstringIndex
