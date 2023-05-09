//number 1
const integers = ['10', '20', '2', '5'];
const largestInteger = Math.max(...integers.map(Number));
console.log(largestInteger);

// number 2
let numbers = [1, 2, 3, 4, 5];
const k = 2; // Number of rotations

for (let i = 0; i < k; i++) {
  const element = numbers.shift(); 
  numbers = numbers.concat(element); 
}
console.log(numbers);  

