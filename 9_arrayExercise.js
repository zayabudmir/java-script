// Array exercises: const array = [2,4,7]

// // 1. Print all Elements
// // etc : console.log(array[i])

// let array = [2, 4, 7];

// for (let i = 0; i <= array.length; i++) {
//   console.log(array[i]);
// }

// // 2. Sum of All Elements
// // output: sum => 13

// let array = [2, 4, 7];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }
// console.log(sum);

// // 3. Find the Largest Number
// // output: 7

// let array = [-2, 4, 9];
// let max = array[0];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > max) {
//     max = array[i];
//   }
// }
// console.log(max);

// // 4. Reverse an Array
// // output: [7,4,2]

// let array = [2, 4, 7];
// let reverse = [];

// for (let i = array.length - 1; i >= 0; i--) {
//   reverse.push(array[i]);
// }
// console.log(array, reverse);

// // 5. Count Odd and Even Numbers
// // ourput: Odd => 1, Even => 2

// let array = [2, 4, 7];

// let odd = 0;
// let even = 0;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     even = even + 1;
//   } else {
//     odd = odd + 1;
//   }
// }
// console.log(even);
// console.log(odd);

// // 6. Remove Duplicates
// // etc: const array = [1,2,1] => output => [1,2]

// let array = [2, 4, 2];
// let Duplicates = [];

// for (let i = 0; i < array.length; i++) {
//   let exist = false;

//   for (let j = 0; j < Duplicates.length; j++) {
//     if (Duplicates[j] === array[i]) {
//       exist = true;
//       break;
//     }
//   }

//   if (!exist) {
//     Duplicates.push(array[i]);
//   }
// }

// console.log(Duplicates);

// // 7. Find Index of Element
// // const array = [1, 2, 1] target => 2
// // output: 1

// let array = [1, 2, 3];
// const target = 1;
// const index = 0;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] === target) {
//     index = i;
//     break;
//   }
// }

// console.log(array.indexOf(target));

// console.log(index);
// console.log(array[index], target);
