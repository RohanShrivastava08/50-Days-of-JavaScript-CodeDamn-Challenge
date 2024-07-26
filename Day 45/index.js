console.log('Create an iterable object to generate even numbers')


const myIterable = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next() {
        count++;
        if (count <= 5) {
          return { value: count * 2, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

export default myIterable;