console.log('JavaScript Generators Lab')

// Create your generator function and use it below
export function* countUp(limit) {
	let count = 1
	while (count <= limit) {
		yield count++
	}
}

export const counter = countUp(5)

for (const value of counter) {
	console.log(value)
}
