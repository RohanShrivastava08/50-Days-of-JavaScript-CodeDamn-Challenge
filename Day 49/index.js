/*
 * Create your Singleton class in this file.
 */

class Singleton {
    // Private static variable to hold the single instance
    static #instance;
  
    // Private constructor to prevent direct instantiation
    constructor() {
      if (Singleton.#instance) {
        throw new Error('Use Singleton.getInstance() to get the instance.');
      }
      Singleton.#instance = this;
    }
  
    // Static method to get the single instance
    static getInstance() {
      if (!Singleton.#instance) {
        Singleton.#instance = new Singleton();
      }
      return Singleton.#instance;
    }
  
    // Method to return a message
    message() {
      return 'Hello Singleton!';
    }
  }
  
  // Export the Singleton class as the default export
  export default Singleton;