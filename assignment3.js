// Number 1
function isPrime (num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(11));

//number 2
function sortList (list) { 
   return list.sort(function(a, b) {return a - b});
 }
 console.log(sortList([2, 5, 1, 6, 9]));

//number 3
function findAverage (num1, num2, num3) {  
  return (num1 + num2 + num3)/3
}
let result = findAverage(6, 2, 4);
console.log(result);

// number 3
function findAverage (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
console.log(findAverage([10, 20, 30, 40, 50, 60]));

// number 4
function reverseString(string) {
   return string.split('').reverse().join('');
}
console.log(reverseString('Digital skill school'));

//number 5
function factorial(num3) {  
  if (num3 === 0) {
    return 1
  } else return factorial(num3-1) * num3
}
console.log(factorial(8));

// number 7
function findMaximum (number) {
 let max = number[0];
 for (let i = 0; i < number.length; i++) {
   if (number[i] > max) {
      max = number[i];
   }
 }
 return max;
}
console.log(findMaximum([12, 50, 23, 8, 17]));

//number 8
function findMinimum (number) {
   let min = number[0];
   for (let i = 0; i < number.length; i++) {
     if (number[i] < min) {
        min = number[i];
     }
   }
   return min;
  }
  console.log(findMinimum([2, 50, 23, 8, 17]));

// number 9
function convertTemperature(celcius) {
   const fahrenheit = (celcius * 9/5 + 32);
   return fahrenheit;
}
let temperatureCelsius = 15;
console.log(convertTemperature(temperatureCelsius));