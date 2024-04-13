class Dictionary {
  constructor() {
    this.elements = {};
  }

  // Method to associate a key with a value
  associate(key, value) {
    this.elements[key] = value;
  }

  // Method to retrieve the value associated with a key
  getValue(key) {
    return this.elements[key];
  }

  // Method to check if a key exists in the dictionary
  containsKey(key) {
    return this.elements.hasOwnProperty(key);
  }

  // Method to remove an association by key
  remove(key) {
    delete this.elements[key];
  }

  // Method to retrieve all keys in the dictionary
  keys() {
    return Object.keys(this.elements);
  }

  // Method to retrieve all values in the dictionary
  values() {
    return Object.values(this.elements);
  }

  // Method to retrieve all associations as an array of key-value pairs
  associations() {
    return Object.entries(this.elements);
  }
}

export default Dictionary;