// // 1. The sum of odd numbers from 1 to 100

// let sum = 0;

// for (let i = 1; i <= 100; i = i + 1) {
//   if (i % 2 !== 0) {
//     sum = sum + i;
//   }
//   console.log(sum);
// }

// // 2. "hello world!" string -iin tegsh index deerh usgiig uppercase bolgoh

// //      ( h e l l o   w o r l d !) => HeLlO WoRlD!;
// // index  0 1 2 3 4 5 6 7 8 9 10 11

// let str = "hello world!";
// let reverseStr = "";

// for (let i = 0; i < str.length; i = i + 1) {
//   if (i % 2 == 0) {
//     reverseStr = reverseStr + str[i].toUpperCase();
//   } else {
//     reverseStr = reverseStr + str[i];
//   }
// }
// console.log(reverseStr);

// const str = "hello"; // 5
// // str.length number - 1 => number
// // console.log(str[0], str[str.length - 1]);
// let result = "";

// for (let i = 0; i <= str.length - 1; i++) {
//   if (i % 2 === 0) {
//     result += str[i].toUpperCase();
//   } else {
//     result += str[i];
//   }
// }

// console.log(result);

// // 3. Find the palindromic number

// // 1
// // 1 * 10 + 2 => 12
// // 12 *  10 + 1 => 121
// // 121 = 121

// // 121/10 => 12, 1
// // 12/10 => 2
// // 1

// let str = "hello world";
// for (let i = 0; i < str.length; i++) {
//   console.log(`${str[i]} == ${str[str.length - i - 1]}`);
// }

// let num = 109;
// let result;

// const length = String(num).length;

// //alternative solution console.log(String(num).split('').reverse().join(''));

// for (let i = 1; i <= length; i++) {
//   let ul = Math.floor(num % 10);
//   num = Math.floor(num / 10);

//   if (i == 1) {
//     result = ul;
//   } else {
//     result = result * 10 + ul;
//   }
// }

// console.log(result);

// Array

// 1. Array үүсгэх
// let studentName = ["Bold", "Micheal", "Malone"];
// let salad = ['carrot', 'garlic', 'corn']
// let tsuvan = new Array('meat', 'carrot', 'garlic')

// 2. Array элемэнт рүү хандах
// let studentAges = [10, 20, 30, 40];

// studentAges[0];                           output : 10
// studentAges[studentAges.length - 1];      output : 40

// 3. Array -н ямар нэгэн элементийн утгыг өөрчлөх
// let studentAges = [10, 20, 30, 40];

// studentAges[studentAges.length - 1] = 2;
// console.log(studentAges);

// let studentName = ["Bold", "Micheal", "Malone"];
// studentName[0] = "Bataa";
// studentName[2] = "Oyu";

// for (let i = 0; i < studentName.length; i++) {
//   console.log(studentName[i]);
// }

// 4. Array -ын бүх эвлемэнтээр гүйх давталт
// let tsuivan = new Array("meat", "corn", "carrot");
// let i = 0;

// while (i < tsuivan.length) {
//   console.log(`Element at index ${i} is: ${tsuivan[i]}`);
//   i++;
// }

// 5. Сурагчдын дундаж насыг олох
// let studentAges = [10, 20, 15, 19, 18, 19, 19];
// let i = 0;
// let sum = 0;
// while (i < studentAges.length) {
//   sum += studentAges[i];
//   i++;
// }
// let avarege = sum / studentAges.length;
// console.log(avarege);

// 6. Банкинд жилийн эцсийн хэрэглэгчдийн хадгаламжид байгаа мөнгөнүүд 15% өсөхийг тооцъё
// let userBalance = [1000, 2000, 2500, 4000000, 13054, 323425];
// let i = 0;

// while (i < userBalance.length) {
//   userBalance[i] *= 1.15;
//   i++;
// }
// console.log(userBalance);

// 7. Array дотор array бичиж болно
// let x=[[1,2,3],[4,5,6],[7,8,9]]

// for (let i = 0; i < x.length; i++) {
//   for (let j = 0; j < x[0].length; j++) {
//     console.log(x[i][j]);
//   }
// }

// // 8.
// let studentNames = ["Bold", "Micheal", "Malone"];
// console.log(studentNames, "array");

// for (let i = 0; i < studentNames.length; i++) {
//   console.log(studentNames[i]);
// }

// 9.
// let studentNames = ["Bold", "Micheal", "Malone"];
// studentNames[3] = "Bataa";
// studentNames.push("orgil");
// let str = "hadgadsg";
// console.log(studentNames, "array");

// //  1. Оноог 2 -оор үржих

// let scores = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < scores.length; i++) {
//   scores[i] = scores[i] * 2;
//   //   ("1. i = 0; scores[i] = 10; scores[0] = 10 * 2 ; sum = 0 + 20 =>20");
//   //   ("2. i = 1; scores[i] = 20; scores[1] = 20 * 2 ; sum = 20 + 40 =>60");
//   //   ("3. i = 2; scores[i] = 30; scores[0] = 30 * 2 ; sum = 60 + 60 =>120");
//   //   ("4. i = 3; scores[i] = 40; scores[1] = 40 * 2 ; sum = 120 + 80 =>200");
//   //   ("5. i = 4; scores[i] = 50; scores[1] = 50 * 2 ; sum = 200 + 100 =>300");
//   sum = sum + scores[i];
// }
// scores.push(sum);
// console.log(scores);

// 2. Хэвлэх
// let fruits = ["Apple", "Banana", "Cherry", "Date"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// 2. 1, 3 дугаар index - ийг хэвлэх

// console.log(fruits[1], fruits[3]);

// 4. index 2 -ыг blueberry болгоно, Elderberry -ыг нэмнэ

// let fruits = ["Apple", "Banana", "Cherry", "Date"];
// fruits[2] = "blueberry";
// fruits.push("elderberry");
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// // 5. Using Array Methods (map, filter)
// // 5-1
// const fruits = ["apple", "banana", "cherry", "date"];

// const upperCaseFruits = fruits.map((value, index, array) => {
//   return value.toUpperCase();
// });

// console.log(upperCaseFruits);

//5-2 5 -aas deesh temdegt aguulsan jimsnii ner gargah
// const fruits = ["apple", "banana", "cherry", "date"];

// const results = fruits.filter((value, index, array) => {
//   return value.length >= 5;
// });

// console.log(results);

// 6.
// let value1 = ["John", 20, [88, 92, 79]];
// let value2 = ["Jess", 21, [89, 90, 99]];
// value1[0] = "Jane";
// value1[2][0] = 95;

// console.log(value1);

// // 6.
// let value1 = [
//   ["John", 20, [88, 92, 79]],
//   ["Jess", 21, [80, 82, 99]],
// ];

// value1[0][0] = "Zaya";
// value1[0][0][2] = 89;
// console.log(value1);

// // 7.
// let value1 = [
//   ["John", 20, [88, 92, 79]],
//   ["Jess", 21, [80, 82, 99]],
// ];
// value1.forEach((value) => {
//   console.log(value[0]);
// });

// // 7-2 suragchiin nasiig neg nasaar nemegduulne shineer array -g shinechlene

// let value1 = [
//   ["John", 20, [88, 92, 79]],
//   ["Jess", 21, [80, 82, 99]],
// ];
// value1.forEach((value) => {
//   console.log(value[0]);
// });

// let value1 = [
//     ["John", 20, [88, 92, 79]],
//     ["Jess", 21, [80, 82, 99]],
//   ];

// const value1 = value1.map((value) => {
//   return value.();
// });

// console.log(value);

// let value1 = [
//   ["John", 20, [88, 92, 79]],
//   ["Jess", 21, [90, 82, 99]],
// ];

// const results = value1.filter((value) => {
//   return value.math(90);
// });

// console.log(results);
