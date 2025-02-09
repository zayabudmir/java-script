// Boolean = (true/false) (0,1)

// *type of => type мэдхэд ашиглана
// let randomText = "hello";
// console.log(typeof randomText);

// *Хэрвээ randomText нь “string” байвал үнэн. Үгүй бол худал.
// if (typeof randomText === "string") {
//   isNumber = true;
//   console.log(true);
// } else {
//   console.log(false);
// }
// true baigaa tohioldold else bichih shaardlaga bhgue

// = vs == vs ===
// = utga onooh value assign
// == value check match or not
// === value check and check data value

// 1. Leap year
// year/400 true
// year/4
// year/100 false

// const year = 2024;
// // if(condition){if(condition2)}

// if (year % 400 == 0) {
//   console.log(true);
// } else {
//   if (year % 4 == 0) {
//     if (year % 100 == 0) {
//       console.log(false);
//     } else {
//       console.log(true);
//     }
//   } else {
//     console.log(false);
//   }
// }

// const year = 2024;
// if (year % 400 == 0) {
//   console.log("is a leap year");
// } else if (year % 4 == 0) {
//   console.log("is leap year");
// } else if (year % 100 !== 0) console.log("not a leap year");

// true         true         true
// condition && condition1 = true (and)

// false        true         true
// condition || condition1 = true (or)

// !== not equal

// !Boolean !true => false

// !false ==> true

// == equal check

// !== not equal check

// <=
// >=

// // 2. find maximum between two numbers
// // input a = 2 and b = 3
// // a == b equal log
// // a maximum a log
// // b maximum b log
// // output maximum = b => 3

// const a = 2;
// const b = 3;
// if (a == b) {
//   console.log(`equal`);
// } else if (a > b) {
//   console.log(`maximum ${a}`);
// } else if (a < b) {
//   console.log(`maximum ${b}`);
// }

// // 3. find maximum between three numbers
// // input a = 2 and b = 3 and c=6
// // c > b > a clog
// // output maximum c > b > a

// const a = 2;
// const b = 3;
// const c = 6;
// if (a >= b && a >= c) {
//   if (b >= c) {
//     console.log(`${a} > ${b} > ${c}`);
//   } else {
//     console.log(`${a} > ${c} > ${b}`);
//   }
// } else if (b >= a && b >= c) {
//   if (a >= c) {
//     console.log(`${b} > ${a} > ${c}`);
//   } else {
//     console.log(`${b} > ${c} > ${a}`);
//   }
// } else if (c >= a && c >= b) {
//   if (b >= a) {
//     console.log(`${c} > ${b} > ${a}`);
//   } else {
//     console.log(`${c} > ${a} > ${b}`);
//   }
// }

// let num1 = 8;
// let num2 = 23;
// let num3 = 17;

// if (num1 >= num2 && num1 >= num3) {
//   console.log(num1 + " is the largest number.");
// } else if (num2 >= num1 && num2 >= num3) {
//   console.log(num2 + " is the largest number.");
// } else {
//   console.log(num3 + " is the largest number.");
// }

// let num1 = 5;
// let num2 = 10;
// let num3 = 7;
// console.log(`The largest number is ${Math.max(num1, num2, num3)}.`);

// // 4. random number => find negative or positive
// // Input:  num = 1; random number
// // output: number negative log
// // output: number positive log

// // 0 = equal
// // number >= 0 positive
// // number <= 0 negative

// const number = 0;

// if (number == 0) {
//   console.log(`zero`);
// } else if (number > 0) {
//   console.log(`positive`);
// } else if (number < 0) {
//   console.log(`negative`);
// }

// // 5. Дурын тооны 5, 7 -д зэрэг хуваагддаг тоо юу гэдгийг олох
// // Input: num: 2; random number
// // 7, 5 multiple of nums
// // output: boolean true| false

// // number % 7 = 0 true
// // number % 5 = 0 true

// // true         true         true
// // condition && condition1 = true (and)

// // false        true         true
// // condition || condition1 = true (or)

// const number = 40;

// if (number % 7 == 0 && number % 5 == 0) {
//   console.log("true");
// } else if (number % 7 == 0 && number % 5 !== 0) {
//   console.log("false");
// } else if (number % 7 !== 0 && number % 5 == 0) console.log("false");

// // 6. Find out how old you are in months.

// const birthYear = 2003;
// const birthMonth = 2;

// const todayYear = 2025;
// const todayMonth = 1;

// const age = Math.floor(
//   (todayYear * 12 + todayMonth - (birthYear * 12 + birthMonth)) / 12
// );
// const month = Math.floor(
//   (todayYear * 12 + todayMonth - (birthYear * 12 + birthMonth)) % 12
// );
// console.log(age);
// console.log(month);
