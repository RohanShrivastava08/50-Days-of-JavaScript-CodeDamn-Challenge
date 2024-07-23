/* Create customAdd() function */

/* Handle cases when the provided arguments are of different types */

/* Handle string concatenation if the provided arguments are strings */

/* Handle the edge case when the provided arguments are of type boolean */
function customAdd(a, b) {
	if (typeof a !== typeof b) {
		throw new Error('Arguments should be of the same type')
	}

	if (typeof a === 'string') {
		return a + b
	}

	if (typeof a === 'boolean') {
		return Number(a) + Number(b)
	}

	return a + b
}

export { customAdd }
