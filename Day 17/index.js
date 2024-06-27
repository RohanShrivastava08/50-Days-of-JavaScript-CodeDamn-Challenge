// Implement the myMap, myFilter, and myReduce functions
// myMap function
// myFilter function
// myReduce function
// Export the functions
// myMap function
export function myMap(array, callback) {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
      mappedArray.push(callback(array[i], i, array));
    }
    return mappedArray;
  }
  
  // myFilter function
  export function myFilter(array, callback) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray;
  }
  
  // myReduce function
  export function myReduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
    
    for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
    
    return accumulator;
  }