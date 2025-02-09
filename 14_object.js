// Object

// // 1. create object

// const car = { type: "Fiat", model: "500", color: "white" };

// "model" in car; // true
// "somekey" in car; // false

// console.log(car["model"]);

// // // 2. List object keys

// const car = { type: "Fiat", model: "500", color: "white" };

// Object.keys(car); // ['type', 'model', 'color']

// console.log(Object.keys(car));

// // 3. List object values

// const car = { type: "Fiat", model: "500", color: "white" };

// Object.values(car); // ['Fiat', '500', 'white']

// console.log(Object.values(car));

// // 4. Delete object value

// const car = { type: "Fiat", model: "500", color: "white" };

// delete car.type;
// delete car["model"];

// console.log(car); // {color: 'white'}

// // 5. Change object value

// const car = { type: "Fiat", model: "500", color: "white" };

// car.type = "Mercedes Benz";
// car["type"] = "Mercedes Benz";
// car["type"]; // Mercedes Benz

// console.log(car);

// // 6. Access object value

// const car = { type: "Fiat", model: "500", color: "white" };

// car.type; // Fiat
// car["type"]; // Fiat
// car.type === car["type"]; // true

// // 7. Create nested object

// const nestedObject = {
//     grades: {
//        math: 100,
//        history: 90,
//        science: 80
//     },
//     name: "yourName",
//     age: 22
//  }

//  console.log(nestedObject.grades.math) // 100
//  console.log(nestedObject.grades.history) // 90
//  console.log(nestedObject.grades.science) // 80
//  console.log(nestedObject.name) // yourName
//  console.log(nestedObject.age) // 22

// ... array doteor baigaa buh elimentiig zadlaad shine elimented oruulkj baigaa

// // Exercise 1: Creating an Object

// const person = {
//   firstName: "bdmr",
//   lastName: "zaya",
//   age: "21",
//   city: "ulaanbaatar",
// };

// console.log(Object.values(person));

// // Exercise 2: Accessing Object Properties

// const person = {
//   firstName: "bdmr",
//   lastName: "zaya",
//   age: "21",
//   city: "ulaanbaatar",
// };

// console.log(person.firstName, person.city);

// // Exercise 3: Adding and Modifying Properties

// const person = {
//   firstName: "bdmr",
//   lastName: "zaya",
//   age: "21",
//   city: "ulaanbaatar",
// };

// console.log((person.email = "zayaEmail.@gmail.com"));

// // Exercise 4: Nested Objects - Access and Modify

// const student = {
//   name: "zaya",
//   age: "21",
//   grades: {
//     math: 80,
//     science: 90,
//     history: 95,
//   },
//   address: {
//     street: "baga toiruu",
//     city: "ulaanbaatar",
//     zip: "56743",
//   },
// };

// student.grades.math = 95;
// student.address.city = "Darkhan";

// console.log(student);

// // Exercise 5: Using Object.keys() and Object.values()

// const student = {
//   name: "zaya",
//   age: "21",
//   grades: {
//     math: 80,
//     science: 90,
//     history: 95,
//   },
//   address: {
//     street: "baga toiruu",
//     city: "ulaanbaatar",
//     zip: "56743",
//   },
// };

// console.log(Object.keys(student), Object.values(student));

// // Exercise 6: Adding and Deleting Properties

// const student = {
//   name: "zaya",
//   age: "21",
//   grades: {
//     math: 80,
//     science: 90,
//     history: 95,
//   },
//   address: {
//     street: "baga toiruu",
//     city: "ulaanbaatar",
//     zip: "56743",
//   },
// };

// delete student.email;
// delete student.zip;

// student.grades.math = 95;
// student.address.city = "Darkhan";

// console.log(student);

// functiond hadgalah
// let object = {
//   hello: function () {
//     return "hello world";
//   },
// };
