/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
const findTheDistanceValue = function (arr1, arr2, d) {
	let val = 0
	for (let i = 0; i < arr1.length; i++) {
		let check = false
		for (let j = 0; j < arr2.length; j++) {
			let sub = arr1[i] - arr2[j]
			if (sub < 0) {
				sub = sub * -1
			}
			if (sub > d) {
				check = true
			} else {
				check = false
				break
			}
		}
		if (check == true) {
			val++
		}
	}
	return val
}
export { findTheDistanceValue }

// Sample Tests (use run button to see logs)
console.log(findTheDistanceValue([4, 5, 8], [1, 2, 3], 3)) // Expected Output: 1
console.log(findTheDistanceValue([1, 4, 5, 6], [10, 12, 15], 5)) // Expected Output: 2
console.log(findTheDistanceValue([2, 3, 4], [3, 4, 5], 1)) // Expected Output: 0
