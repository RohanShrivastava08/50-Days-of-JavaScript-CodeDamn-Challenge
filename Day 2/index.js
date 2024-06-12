/**
 * @param {Function} fn
 * @return {Function}
 */
const curry = function (fn) {
    // Return a function that accepts arguments
    return function curried(...args) {
        // If the number of arguments provided is sufficient, call the original function
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        // Otherwise, return a function that continues to collect arguments
        return function(...nextArgs) {
            return curried.apply(this, args.concat(nextArgs));
        }
    }
}

export default curry;