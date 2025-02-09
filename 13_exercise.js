// // Exercise 1: Sum of all numbers in an array
// // console.log(sumArray(numbers)); // Output: 52

// const numbers = [1, 2, 3, 4, 5, -1, -2, 6, 7, 8, 9, 10];

// let num = 0;
// for (let i = 0; i < numbers.length; i++) {
//   num = num + numbers[i];
// }
// console.log(num);

// // Exercise 2: Find the largest number in an array
// // console.log(findLargest(numbers)); // Output: 10

// function findLargest(number) {
//   let max = number[0];
//   for (let i = 1; i < number.length; i++) {
//     if (number[i] > max) {
//       max = number[i];
//     }
//   }
//   console.log(max);
// }

// // Exercise 3: Filter out even numbers from an array
// // console.log(filterEvenNumbers(numbers)); // Output: [1, 3, 5, -1, -3, 7, 9]

// const numbers = [1, 2, 3, 4, 5];
// let oddNum = [];
// let evenNum = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     oddNum.push(numbers[i]);
//   } else {
//     evenNum.push(numbers[i]);
//   }
// }
// console.log(oddNum);

// // Exercise 4: Double the values in an array
// // console.log(doubleValues(numbers)); // Output: [2, 4, 6, 8, 10, -2, -4, 12, 14, 16, 18, 20]

// const doubleValues = function (numbers) {
//   let double = [];
//   for (let i = 0; i < numbers.length; i = i + 1) {
//     double.push(numbers[i] * 2);
//   }
//   console.log(double);
// };

// doubleValues([1, 2, 3, 4, 5, -1, -2, 6, 7, 8, 9, 10]);

// // Exercise 5: Check if all elements in an array are positive
// // console.log(allPositive(numbers)); // Output: false

// const numbers = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 9, 10];

// function allPositive(numbers) {
//   for (let i = 0; i < numbers.length; i = i + 1) {
//     if (numbers[i] < 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(allPositive(numbers));

// // Exercise 6: Find the first negative number in an array
// // console.log(findFirstNegative(numbers)); // Output: -1

// const numbers = [1, 2, -3, 4, 5, -1, 2, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 0) {
//     console.log(numbers[i]);
//     break;
//   }
// }

// const numbers = [1, 2, -3, 4, 5, -1, 2, 6, 7, 8, 9, 10];

// function findFirstNegative(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//       return numbers[i];
//     }
//   }
// }
// console.log(findFirstNegative(numbers));

// // Exercise 7: Sort an array in ascending order
// // console.log(sortArray(numbers)); // Output: [-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const arr = [4, -2, 0, 3, 2];

// function sortArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(sortArray(arr));

// // Exercise 9: Reverse an array
// // console.log(reverseArray(numbers)); // Output: [10, 9, 8, 7, 6, -2, -1, 5, 4, 3, 2, 1]

// const numbers = [1, 2, -3, 4, 5, -1, 2, 6, 7, 8, 9, 10];
// let reverse = [];
// for (let i = numbers.length - 1; i >= 0; i--) {
//   reverse = reverse + " " + numbers[i];
// }
// console.log(reverse);

// const numbers = [1, 2, -3, 4, 5, -1, 2, 6, 7, 8, 9, 10];

// function reverse(numbers) {
//   let reverse = [];
//   for (let i = numbers.length - 1; i >= 0; i--) {
//     reverse.push(numbers[i]);
//   }
//   return reverse;
// }

// console.log(reverse(numbers));

// // Exercise 10: Flatten a nested array
// // console.log(flattenArray([1, [2, [3, [4, 5]]]])); // Output: [1, 2, 3, 4, 5]

// const numbers = [1, 2, -3, 4, 5, -1, 2, 6, 7, 8, 9, 10];

// function flattenArray(arr) {
//   return arr.flat(3);
// }

// console.log(flattenArray([1, [2, [3, [4, 5]]]]));

// const array = [1, [2, [3, [4, 5]]]];
// const newArray = [];
// newArray.push(array[0]);
// newArray.push(array[1][0]);
// newArray.push(array[1][1][0]);
// newArray.push(array[1][1][1][0]);
// newArray.push(array[1][1][1][1]);
// console.log(newArray);
