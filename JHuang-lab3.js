// Jinming Huang
// ITMD 441 Undergraduate

// Exercise 1
function minMaxAverage(numbers) {
  const totalNumbers = numbers.length;
  const minValue = Math.min(...numbers);
  const maxValue = Math.max(...numbers);
  const average = (numbers.reduce((sum, num) => sum + num, 0) / totalNumbers);
  console.log(`Total Numbers: ${totalNumbers}, Min Value: ${minValue}, Max Value: ${maxValue}, Average: ${average.toFixed(2)}`);
}

// Test cases for Exercise 1
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]); // Test case 1
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]); // Test case 2
minMaxAverage([10, 20, 30, 40, 50]); // Test case 3

// Exercise 2
function countVowels(word) {
  const vowels = word.match(/[aeiou]/gi);
  const vowelCount = vowels ? vowels.length : 0;
  console.log(`${word}: ${vowelCount} vowels`);
}

// Test cases for Exercise 2
countVowels("Winter"); // case 1
countVowels("Hello"); // case 2
countVowels("JavaScript"); // case 3

// Exercise 3
function sortNumbers(numbers) {
  const sortedArray = [...numbers].sort((a, b) => a - b);
  console.log(`Original Array: [${numbers}], Sorted Array: [${sortedArray}]`);
}

// Test cases for Exercise 3
sortNumbers([9, 4, 6, 2]); //  1
sortNumbers([30, 10, 20, 50, 40]); // 2
sortNumbers([1, 2, 3, 4, 5]); // 3

// Exercise 4
function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  console.log(`${celsius.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Test cases for Exercise 4
celsiusToFahrenheit(30); //1
celsiusToFahrenheit(0); //  2
celsiusToFahrenheit(100); //  3
