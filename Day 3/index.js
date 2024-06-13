/**
 * @param {number} n
 * @return {Function} counter
 */
export function createCounter(n) {
	// return a function
	let count = n;
    return function() {
        return count++;
    };
}

// Sample Test Cases

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

const secondCounter = createCounter(42);
console.log(secondCounter()); // 42
console.log(secondCounter()); // 43
