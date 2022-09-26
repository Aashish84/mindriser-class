// Make an array of numbers that are doubles of the first array
let arr = [1, 2, 3, 4];

let res = arr.map((elem) => elem * 2);

console.log({ arr });
console.log({ res });

console.log("================");

// Take an array of numbers and make them strings

let res2 = arr.map((elem) => String(elem));

console.log({ res2 }, typeof res2[0]);

console.log("================");

// Capitalize each of an array of names first letter

let names = ["ram", "shyam", "hari"];

let res3 = names.map(
  (elem) => elem[0][0].toUpperCase() + elem.substring(1, elem.length)
);

console.log({ res3 });

console.log("================");

// capitalize each word first letter and put it in back , put it before . , ? symbols eg hello. = elloH.

let isAlphaNumeric = (ch) => {
  ch.toLowerCase();
  return (ch >= "a" && ch <= "z") || (ch >= 0 && ch <= 9);
};

let myPara = "Hello world! i am@ groot.";

let myParaArr = myPara.split(" ");

let res4 = myParaArr.map((elem) => {
  if (elem.length <= 1) {
    return elem.toUpperCase();
  }
  let first_ch = elem[0][0].toUpperCase();
  if (isAlphaNumeric(elem[elem.length - 1])) {
    return elem.substring(1, elem.length) + first_ch;
  }
  return elem.substring(1, elem.length - 1) + first_ch + elem[elem.length - 1];
});

console.log(res4.join(" "));

console.log("================");

// Make an array of strings of the names

let person = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

let res5 = person.map((elem) => elem.name);
console.log(res5);

let res6 = person.map((elem) =>
  elem.age < 18 ? `${elem.name} is under age` : `${elem.name} can go to matrix`
);

console.log(res6);

let onlyAbove18 = person
  .filter((elem) => elem.age >= 18)
  .map((elem) => elem.name);
console.log(onlyAbove18);

console.log("================");
