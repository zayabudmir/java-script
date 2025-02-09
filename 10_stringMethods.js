// String methods

// // 1. Split (pattern)
// const str = "Arvan tavan targan tarvaga";
// const words = str.split(" ");
// console.log(words);
// // ["Arvan", "tavan", "targan", "tarvaga"]

// const chars = str.split("");
// console.log(chars[1]);
// // "r"

// // 2. replace(pattern, replacement); replaceAll(pattern, replacement)
// const p = "she sells seashells by the seashore";
// console.log(p.replace("sea", "wind"));
// // "she sells windshells by the seashore"

// console.log(p.replaceAll("sea", "wind"));
// // "she sells windshells by the windshore"

// // 3. trim
// let text1 = "   Hello world!    ";
// let text2 = text1.trim();
// console.log(text2);
// // "Hello world!"

// // 4. concat
// let text1 = "Hello";
// let text2 = "world";
// let text3 = text1.concat(" ", text2);
// console.log(text3);
// //"Hello world"

// // 5. toLowerCase
// let text1 = "Hello World!";
// let text2 = text1.toLowerCase();
// console.log(text2);
// // hello world!

// // 6. toUpperCase
// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log(text2);
// // HELLO WORLD!

// string method
// split string to array
// trim  remove whitespace
// replace
// lowercase and uppercase
// concat string + string
// includes
// slice

// // 1. 'Ad est cupidatat culpa dolor.'
// //     string to array bolgo 'Whitespace' (use split)
// const str = "Ad est cupidatat culpa dolor.";
// const words = str.split(" ");
// console.log(words);

// // 2. '  Et dolor culpa do deserunt exercitation proident enim. '
// //       trim hiigeed araas split hiij array bolgo.

// let text1 = "  Et dolor culpa do deserunt exercitation proident enim. ";
// let text2 = text1.trim();
// console.log(text2);

// const str = text2;
// const words = str.split(" ");
// console.log(words);

// const str = " Ad est cupidatat culpa dolor. ";
// console.log(str.trim().split(" "));

// // 3. 'Eu commodo consequat do cillum eu occaecat deserunt enim.'
// //    'a' useg orson text hevle

// const str = "Eu commodo consequat do cillum eu occaecat deserunt enim.";
// const words = str.split(" ");
// let atext = "";
// for (let i = 0; i < words.length; i++) {
//   if (words[i].includes("a")) {
//     atext += words[i] + " ";
//   }
// }

// console.log(atext);

// const str = "Eu commodo consequat do cillum eu occaecat deserunt enim.";

// function test(str, char) {
//   let array = str.split(" ");
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].includes(char)) {
//       console.log(array[i]);
//     }
//   }
// }

// test(str, "e");

// // 4. Count Occurrences of a Character
// function countChar(str, target) {
//   let count = 0;
//   let text = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (text[i] == target) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(
//   countChar("Eu commodo consequat do cillum eu occaecat deserunt enim.", "o")
// );

// //  5. Reverse Each Word
// function reverseEachWord(sentence) {
//   let array = sentence.split(" ");
//   for (let i = 0; i < array.length; i++) {
//     let reverse = "";
//     let str = array[i];
//     for (let k = str.length - 1; k >= 0; k--) {
//       reverse += str[k];
//     }
//     array[i] = reverse;
//   }
//   console.log(array);

//   //array to string
//   return array.join("");
// }

// console.log(reverseEachWord("hello world")); // olleh dlrow

// //  6. Split a String into Chunks
// function chunkString(str, limit) {
//   let size = "";
//   let array = [];
//   for (let i = 0; i < str.length; i++) {
//     size += str[i];
//     if (size.length >= limit) {
//       array.push(size);
//       size = "";
//     }
//   }
//   array.push(size);
//   return array;
// }
// console.log(chunkString("HelloWorld", 3)); // ["Hel", "loW", "orl", "d"]
// // char loop
// // 1-3 size
// // size === 3 array.push
