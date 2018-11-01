//
// Object destructuring
//

// const person = {
//   name: "Noelani",
//   age: 27,
//   location: {
//     city: "Mumbai",
//     temp: 88
//   }
// };
//
// const { name: firstName = "Anonymous", age } = person;
// // const name = person.name;
// // const age = person.age;
//
// console.log(`${firstName} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    // name: "Penguin"
  }
};

const { name: publisherName = "Self-published" } = book.publisher;

console.log(publisherName);

//
//Array destructuring
//

const address = ["1299 S Juniper Street", "Mumbai", "Maharashtra", "40001"];
const [, city, state = "Karnataka"] = address;
console.log(`You are in ${city} ${state} `);

const item = ["Coffee (iced)", "$3.00", "$4.50", "$5.75"];

const [type, , medPrice] = item;

console.log(`A medium ${type} costs ${medPrice}`);
