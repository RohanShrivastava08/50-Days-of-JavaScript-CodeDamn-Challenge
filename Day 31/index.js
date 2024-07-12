//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = (limit) => {
    // Create an array of booleans, initially set to true
    const sieve = Array(limit + 1).fill(true);
    sieve[0] = sieve[1] = false; // 0 and 1 are not prime numbers
  
    for (let i = 2; i <= Math.sqrt(limit); i++) {
      if (sieve[i]) {
        // Mark all multiples of i as false (not prime)
        for (let j = i * i; j <= limit; j += i) {
          sieve[j] = false;
        }
      }
    }
  
    // Collect all prime numbers from the sieve
    const primes = [];
    for (let i = 2; i <= limit; i++) {
      if (sieve[i]) {
        primes.push(i);
      }
    }
  
    return primes;
  };