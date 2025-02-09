// Array / List

// 1. Шинээр зарлах

// // Хоосон array зарлаж байна
// const myArray = [];
// console.log(myArray);

// // 3н элемэнттэй array зарлаж байна
// const myArray = ["first", "second", "third"];
// console.log(myArray);

// 2. Элемэнт рүү хандах

// // Хамгийн эхний элемэнт рүү хандах
// myArray[0]

// // 4дахь элемэнтийн утгыг Hello болгоно
// myArray[3] = 'Hello'

// 3. Length (Array дахь элемэнтийн тоог авах.)

// const students = ["Болд", "Дорж", "Сувд"];
// students.length; // 3
// console.log(students.length);

// Methods

// 1. Push => push нь array-н хамгийн ард шинээр элемэнт нэмээд array-н уртыг буцаана.

// const myArray = ["bear", "cat"];
// myArray.push("dog"); // ['bear', 'cat', 'dog']
// console.log(myArray);

// 2. Pop => pop нь хамгийн арын элемэнтийг устгаад, устгасан элемэнтээ буцаана.

// const myArray = ["bear", "cat", "dog"];
// myArray.pop(); // ['bear', 'cat']
// console.log(myArray);

// 3. Shift => shift нь эхний элэмэнтийг утсгаад, устгасан элемэнтээ буцаана.

// let myArray = ["bear", "cat", "dog"];
// myArray.shift(); // ['cat', 'dog']
// console.log(myArray);

// 4. Unshift => unshift нь хамгийн эхэнд элемэнт нэмээд, array-н уртыг буцаана

// let myArray = ["bear", "cat"];
// myArray.unshift("dog"); // ['dog', 'bear', 'cat']
// console.log(myArray);

// 5. Splice => splice - ыг array - аас элемэнт устгахад ашиглаж болно.
//    Slice нь эхний параметрээрээ хаанаас гэдгийг, 2дахь параметрээрээ хэдийг устгахыг авна.

// let animals = ["bear", "cat", "dog", "elephant"];
// // cat болон dog-г устгах
// animals.splice(1, 2); // ['bear', 'elephant']
// console.log(animals);

//5-1.  splice - ыг array - т элемэнт нэмэхэд ашиглаж болно.
//      Slice нь 3-р параметрээс хойш нэмэх элемэнтүүдээ авдаг (хэдийг ч авч болно)

// let animals = ["bear", "elephant"];
// animals.splice(1, 0, "dog", "cat"); // ['bear', 'dog', 'cat', 'elephant']
// console.log(animals);

//5-2. splice - ыг элемэнт нэмэх хасахад хослуулан ашиглаж болно

// let animals = ["bear", "prius", "mazda", "elephant"];
// animals.splice(1, 2, "dog", "cat"); // ['bear', 'dog', 'cat', 'elephant']
// console.log(animals);

// 6. Concat =>
//    concat Array - уудыг хооронд нь залгах буюу нэг array дээр өөр array - ын элемэнтүүдийг нэмэх.
//    merge функц нь байгаа array-г өөрчлөхгүй үргэлж шинэ array буцаана

// let arr1 = ["bear", "dog"];
// let arr2 = ["cat", "elephant"];

// let arr3 = arr1.concat(arr2);

// console.log(arr3); // ['bear', 'dog', 'cat', 'elephant']
// console.log(arr1); // ['bear', 'dog']
// console.log(arr2); // ['cat', 'elephant']

// 7. Sort => Цагаан толгойн дарааллаар эрэмбэлэх.

// let animals = ["elephant", "cat", "bear", "dog"];
// animals.sort(); // ['bear', 'cat', 'dog', 'elephant']
// console.log(animals);

// 8. Reverse => Array- ын элемэнтүүдийг урвуулах.

// let animals = ["elephant", "cat", "bear", "dog"];
// animals.reverse(); // ['dog', 'bear', 'cat', 'elephant']
// console.log(animals);

// 9. Join =>
// Array - ын элемэнтүүдийг залгах.
// join функц нь параметраар separator авдаг.
// Хэрэв хоосон дуудвал separator нь таслал (,) байна.

// let myArray = ["bear", "cat", "dog"];
// myArray.join(); // 'bear,cat,dog'
// myArray.join(" * "); // 'bear * cat * dog'
// console.log(myArray);

// 10. IndexOf
//     Өгсөн элемэнтийн хамгийн эхэнд байгаа index - ийг буцаана.
//     Хэрэв элемэнт байхгүй бол -1 гэж буцаана.

// let animals = ["bear", "cat", "dog", "bear", "dog"];

// animals.indexOf("bear"); // 0
// animals.indexOf("dog"); // 2
// animals.indexOf("notexist"); // -1

// console.log(animals);

// 11. lastIndexOf =>
//     Өгсөн элемэнтийн хамгийн сүүлд байгаа index - ийг буцаана.
//     Хэрэв элемэнт байхгүй бол -1 гэж буцаана

// let animals = ["bear", "cat", "dog", "bear", "dog"];

// animals.lastIndexOf("bear"); // 3
// animals.lastIndexOf("dog"); // 4
// animals.lastIndexOf("notexist"); // -1

// console.log(animals);

// 12. Includes => Array дотор өгсөн элемэнт байгаа эсэхийг шалгах.

// let animals = ["bear", "cat", "dog"];

// animals.includes("bear"); // true
// animals.includes("elephant"); // false

// console.log(animals);

// Loop (Array / List дээр хийгдэх давталтууд.)

// 1. ForEach - энгийн давталт
//    Бүх элемэнт дээр дамжуулж өгсөн функцыг ажилуулна

// const animals = ["elephant", "cat", "bear", "dog"];

// animals.forEach((value, index, array) => {
//   console.log(value, index, array);
// });

// const animals = ["elephant", "cat", "bear", "dog"];

// for (let index = 0; index < animals.length; index++) {
//   console.log(animals[index], index, animals);
// }

// 2. Map - шинэ array үүсгэх
//    Бүх элемэнт дээр дамжуулж өгсөн функцыг ажилуулаад буцааж байгаа утгаар нь шинэ array үүсгэнэ.

// const animals = ["elephant", "cat", "bear", "dog"];

// const upperCaseAnimals = animals.map((value, index, array) => {
//   return value.toUpperCase();
// });

// console.log(upperCaseAnimals); // ['ELEPHANT', 'CAT', 'BEAR', 'DOG']

// const animals = ["elephant", "cat", "bear", "dog"];
// const upperCaseAnimals = [];

// for (let index = 0; index < animals.length; index++) {
//   const value = animals[index];
//   upperCaseAnimals.push(value.toUpperCase());
// }

// console.log(upperCaseAnimals); // ['ELEPHANT', 'CAT', 'BEAR', 'DOG']

// 3. Find - хайх
//    Бүх элемэнт дээр дамжуулж өгсөн функцыг ажилуулаад хамгийн түрүүнд true буцаасан зөвхөн нэг элемэнтийг буцаана.

// const animals = ["elephant", "cat", "bear", "dog", "cow"];

// const animal = animals.find((value, index, array) => {
//   return value.startsWith("c");
// });

// console.log(animal); // cat

// const animals = ["elephant", "cat", "bear", "dog", "cow"];
// let animal;

// for (let index = 0; index < animals.length; index++) {
//   const value = animals[index];
//   if (value.startsWith("c")) {
//     animal = value;
//     break;
//   }
// }

// console.log(animal); // cat

// 4. Filter - ялгаж / шүүж авах
//    Бүх элемэнт дээр дамжуулж өгсөн функцыг ажилуулаад true буцаасан бүх элэмэнтээр array үүсгэн буцаана.

// const animals = ["elephant", "cat", "bear", "dog", "cow"];

// const results = animals.filter((value, index, array) => {
//   return value.startsWith("c");
// });

// console.log(results); // ['cat', 'cow']

// const animals = ['elephant', 'cat', 'bear', 'dog', 'cow']
// const results = []

// for (let index = 0; index < animals.length; index ++) {
//     const value = animals[index]
//     if (value.startsWith('c')) {
//         results.push(value)
//     }
// }

// console.log(results) // ['cat', 'cow']

// 5. Sort - эрэмбэлэх
//    Хэрэв функц дамжуулж өгөөгүй бол цагаан толгойн дарааллар эрэмбэлнэ.
//    Энэ функц нь тухайн array - ыг өөрчилдөг

// const myList1 = [4, 8, 9, 1, 3, 10];
// const myList2 = ["c", "b", "a", "ac", "ab", "bc", "ba"];

// myList1.sort();
// myList2.sort();

// console.log(myList1); // [1, 10, 3, 4, 8, 9]
// console.log(myList2); // ['a', 'ab', 'ac', 'b', 'ba', 'bc', 'c']

// Хэрэв функц дамжуулж өгвөл тухайн функцын буцаах утгаас хамааран эрэмбэлдэг.

// Дамжуулж өгсөн функц нь 2 параметр авах ба тэд нар нь array дотор байгаа дурын 2 элемэнт байна.

// Тухайн 2 элемэнтийн аль нь урдаа / хойноо гарах вэ гэдгийг функцын буцаах утгаас хамааран доорх
// дүрмийн дагуу шийднэ (дамжуулж өгсөн параметруудыг param1, param2 гэж үзье):
// Хэрэв функц нь сөрөг тоо буцаавал param1 нь param2-н урд байрлана гэсэн үг.
// Хэрэв функц нь эерэг тоо буцаавал param1 нь param2-н ард байрлана гэсэн үг.
// Хэрэв функц нь 0 (тэг) буцаавал тэнцүү буюу байрлалыг өөрчлөхгүй гэсэн үг.
// Жишээ нь array-ыг тоон утгаар нь эрэмблий гэвэл

// const myList = [4, 8, 9, 1, 3, 10];

// myList.sort((param1, param2) => {
//   return param1 - param2;
// });

// console.log(myList); // [1, 3, 4, 8, 9, 10]

// 6. Reduce - хувиргах, бууруулах
//    reduce функц нь array - ыг зөвхөн нэг утга руу бууруулдаг (хувиргадаг).
//    Хувиргахдаа дамжуулж өгсөн функцыг бүх элемэнт дээр ажилуулаад буцаасан утгыг
//    accumulator гэдэг зүйлд хадгалдаг.
//    reduce функыг авах аргументууд:
//           reducer функц.
//           анхны утга.
//    Дамжуулж өгсөн функцыг параметрууд нь:
//        accumulator - нь өмнөх давталт дээрээс буцсан утга.
//        value - тухайн давталт дээрх утга.
//        index - тухайн давталт дээрх дугаар.
//        array - бүхэл array.
//    Жишээ нь өгсөн array дотор байгаа үгнүүдийн эхний үсгээр шинэ үг бүтээх:

// const animals = ["elephant", "cat", "bear", "dog", "cow"];

// const newWord = animals.reduce((accumulator, value) => {
//   return accumulator + value[0];
// }, "");

// console.log(newWord); // ecbdc

// const animals = ["elephant", "cat", "bear", "dog"];
// let newWord = "";

// for (let index = 0; index < animals.length; index++) {
//   const value = animals[index];
//   newWord += value[0];
// }

// console.log(newWord); // ecbdc

// Array Exercises

// // 5. Using Array Methods (map, filter)

// // 5-1
// const fruits = ["apple", "banana", "cherry", "date"];

// const upperCaseFruits = fruits.map((value, index, array) => {
//   return value.toUpperCase();
// });

// console.log(upperCaseFruits);

// //5-2 5 -aas deesh temdegt aguulsan jimsnii ner gargah
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
// value1[0][2][2] = 89;
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

// value1 = value1.map((value1, index, array) => {
//   value1[1] += 1;
//   return value1;
// });
// console.log(value1);

// 8.
// let value1 = [
//   ["John", 20, [93, 92, 79]],
//   ["Jess", 21, [90, 82, 89]],
// ];

// let score = value1.filter((value, index, array) => {
//   return value[2][0] >= 90;
// });

// console.log(score);

// 9.

// let value1 = [
//   ["John", 20, [93, 92, 79]],

//   ["Jess", 21, [90, 82, 89]],
// ];

// value1.push(["Doe", 22, [85, 87, 90]]);

// value1[2].splice(2, 1);

// console.log(value1);
