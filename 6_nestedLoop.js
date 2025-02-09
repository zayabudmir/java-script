// // 1. hello -ыг босоогоор хэвлэх
// let str = "hello";

// console.log(str.length);

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// // 2. hello -ыг үсгүүдийн ардаас нь босоогоор хэвлэх
// let str = "hello";

// console.log(str.length);

// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

// // 3. hello -ыг үсгүүдийн ардаас нь хэвтэйгээр хэвлэх
// // (hello) => olleh;

// let str = "hello";
// let reverseStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reverseStr = reverseStr + str[i];
// }
// console.log(str, reverseStr);

// //4. 5 -ын хүрдийг хэвлэх
// // start 1
// // end 10 <=
// // + 1

// let num = 5;

// for (let i = 1; i <= 10; i = i + 1) {
//   multi = num * i;
//   console.log(`${num} * ${i} = ${multi}`);
// }

// // 5. 1 -ээс 10 хүртлэх тооны хүрдийг хэвлэх

// for (let k = 1; k <= 10; k++) {
//   console.log("");
//   for (let i = 1; i <= 10; i = i + 1) {
//     multi = k * i;
//     console.log(`${k} * ${i} = ${multi}`);
//   }
// }

//6. upper left triangle

// for (let i = 1; i <= 5; i++) {
//   let str = "* ";
//   console.log(str.repeat(i));
// }

// for (let i = 1; i <= 5; i++) {
//   let stars = "";
//   for (let k = 0; k < i; k++) {
//     stars += "* ";
//   }
//   console.log(stars);
// }

// const row = 5;

// for (let i = 1; i <= row; i++) {
//   let stars = "";

//   for (let j = 1; j <= i; j++) {
//     stars = "  ";
//   }

//   for (let k = 1; k <= i; k++) {
//     stars += "* ";
//   }

//   console.log(stars);
// }

//7. upper right triangle

// for (let i = 1; i <= 5; i++) {
//   let stars = "";

//   for (let j = 1; j <= 5 - i; j++) {
//     stars += "  ";
//   }

//   for (let k = 1; k <= i; k++) {
//     stars += "* ";
//   }

//   console.log(stars);
// }

//8. lower right triangle

// for (let i = 5; i >= 1; i--) {
//   let stars = "";

//   for (let j = 1; j <= 5 - i; j++) {
//     stars += "  ";
//   }

//   for (let k = 1; k <= i; k++) {
//     stars += "* ";
//   }

//   console.log(stars);
// }

// 9. lower left triangle

// for (let i = 5; i >= 1; i--) {
//   let stars = "";

//   for (let j = 0; j <= i; j++) {
//     stars += "";
//   }

//   for (let k = 1; k <= i; k++) {
//     stars += " *";
//   }

//   console.log(stars);
// }

//10. pyramid trinagle pattern

// for (let i = 1; i <= 9; i = i + 2) {
//   let stars = "";

//   for (let j = 1; j <= 9 - i; j++) {
//     stars += " ";
//   }

//   for (let k = 1; k <= i; k++) {
//     stars += "* ";
//   }

//   console.log(stars);
// }

// 11. 4 x 4 box

// const row = 4;

// for (let i = 1; i <= row; i++) {
//   let stars = "";

//   for (let k = 0; k < row; k++) {
//     stars += "* ";
//   }

//   console.log(stars);
// }

// 12. 4 x 4 box dundaa zaita

// const row = 4;

// for (let i = 1; i <= row; i++) {
//   let stars = "";

//   for (let k = 1; k <= row; k++) {
//     if (i == 1 || i == row || k == 1 || k == row) {
//       stars += "* ";
//     } else {
//       stars += "  ";
//     }
//   }

//   console.log(stars);
// }

// const row = 5;
// const column = 5;
// // i = row
// // k = column
// for (let i = 1; i <= row; i++) {
//   let stars = "";

//   for (let k = 1; k <= column; k++) {
//     if (i == 1 || i == row || k == 1 || k == column) {
//       stars += "* ";
//     } else {
//       stars += "  ";
//     }
//   }
//   console.log(stars);
// }

// 13. 30 bagshta 30 suragchta suragch bolgonii 10 hicheel onoog n haruulah

// for (let k = 1; k <= 30; k++) {
//   for (let j = 1; j <= 30; j++) {
//     for (let w = 1; w <= 10; w++) {
//       console.log(k, "teacher", j, "student", w, "lesson", "score");
//     }
//   }
// }
