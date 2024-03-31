// Define the forEach function
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback.call(this, arr[i], i, arr); // using call to maintain context
    }
  }

  // Example usage
    const fruits = ['Apple', 'Banana', 'Orange'];

    // Define a callback function to be executed on each element
    function printFruit(fruit, index) {
      const listItem = document.createElement('li');
      listItem.textContent = `Fruit ${index + 1}: ${fruit}`;
      document.getElementById('fruits-list').appendChild(listItem);
    }
    // Use forEach to iterate over the fruits array
    forEach(fruits, printFruit);

    // Extending the Array prototype with a custom method
    Array.prototype.customMethod = function(callback) {
        for (let i = 0; i < this.length; i++) {
          callback(this[i], i, this);
        }
      };

      // Example usage
    const numbers = [1, 2, 3, 4, 5];

    // Define a callback function to be executed on each element
    function logItem(item, index) {
      const listItem = document.createElement('li');
      listItem.textContent = `Index ${index}: ${item}`;
      document.getElementById('numbers-list').appendChild(listItem);
    }

    
    // Use the custom method on the numbers array
    numbers.customMethod(logItem);