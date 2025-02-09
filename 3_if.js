// let students = 24;

// console.log((students = students - 1));
// console.log((students = students - 1));
// console.log(students);

// // 1. Distinguish even and odd numbers

// // enter a number : 2
// // 2 is an even number

// // enter a number : 9
// // 9 is a odd number

// let number = prompt("Please enter your number");

// if (number % 2 == 0) {
//   alert(`${number} even`);
// } else {
//   alert(`${number} odd`);
// }

// // 2. Enter score => A, B, C, D, F
// // 90-100 A
// // 80-89 B
// // 70-79 C
// // 60-69 C
// // 0-59 F

// let number = prompt("Please enter student's score");

// if (number >= 90 && number <= 100) {
//   alert(`${number} A`);
// } else if (number >= 80 && number <= 89) {
//   alert(`${number} B`);
// } else if (number >= 70 && number <= 79) {
//   alert(`${number} C`);
// } else if (number >= 60 && number <= 69) {
//   alert(`${number} D`);
// } else if (number >= 0 && number <= 59) {
//   alert(`${number} F`);
// }

// // 3. Check if the season is Autumn, Winter, Spring or Summer
// // September, October or November, the season is Autumn
// // December, January or February, the season is Winter
// // March, April or May, the season is Spring
// // June, July or August, the season is Summer

// let month = prompt("Please enter season");

// if (month == "September" || month == "October" || month == "November") {
//   alert(`${month} is Autumn`);
// } else if (month == "December" || month == "January" || month == "February") {
//   alert(`${month} is Winter`);
// } else if (month == "March" || month == "April" || month == "May") {
//   alert(`${month} is Spring`);
// } else if (month == "June" || month == "July" || month == "August") {
//   alert(`${month} is Summer`);
// }

// // 4. Check if a day is weekend day or a working day
// // Monday = working day
// // Tuesday = working day
// // Wednesday = working day
// // Thursday = working day
// // Friday = working day
// // Saturday = weekend
// // Sunday = = weekend

// let day = prompt("What is the day today");

// if (
//   day == "Monday" ||
//   day == "Tuesday" ||
//   day == "Wednesday" ||
//   day == "Thursday" ||
//   day == "Friday"
// ) {
//   alert(`${day} is working day`);
// } else if (day == "Saturday" || day == "Sunday") {
//   alert(`${day} is weekend`);
// }

// // 5. Enter the month and get the day of the month
// // January has 31 days.
// // February has 28 days.
// // March has 31 days.
// // April has 30 days.
// // May has 31 days.
// // June has 30 days.
// // July has 31 days.
// // August has 31 days.
// // September has 30 days.
// // October has 31 days.
// // November has 30 days.
// // December has 31 days.

// let month = prompt("Please enter the number of day").toLowerCase();

// if (
//   month == "january" ||
//   month == "march" ||
//   month == "may" ||
//   month == "july" ||
//   month == "august" ||
//   month == "october" ||
//   month == "december"
// ) {
//   alert(`${month} has 31 days`);
// } else if (month == "february") {
//   alert(`${month} has 28 days`);
// } else if (
//   month == "april" ||
//   month == "june" ||
//   month == "september" ||
//   month == "november"
// ) {
//   alert(`${month} has 30 days`);
// }

// true         true         true
// condition && condition1 = true (and)

// false        true         true
// condition || condition1 = true (or)

// !== not equal

// !Boolean !true => false

// !false ==> true

// == equal check

// !== not equal check

// // 6. sum of even number
// let sum = 0;

// for (let i = 1; i < 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//     sum += i;
//   }
// }
// console.log(sum);
