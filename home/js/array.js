let arr = [1, 2, 3, 4];

console.log({ arr });

// inserting in array

arr[4] = "four";
console.log({ arr });

arr.push("from push");
console.log({ arr });

arr.unshift("from shift");
console.log({ arr });

// pop

console.log(arr.pop());
console.log(arr.shift());

// splice
arr.splice();

console.log("==============");

do {
  console.log("ola");
} while (false);

// filter method
arr = [1, "2", 3, "4"];
console.log({ arr });

// callback

// function filtrate(element) {
//   return typeof element == "number";
// }

let tmp = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == "number") {
    tmp.push(arr[i]);
  }
}
console.log({ tmp });

let filtrate = (element) => typeof element == "number";
console.log(filtrate("string"));

console.log(arr.filter(filtrate));

console.log("+++++++++");

console.log(arr.filter((elem) => typeof elem === "number"));

console.log("+++++++++");

let map = arr.map((elem) => {
  if (typeof elem === "number") {
    return elem + 100;
  }
});

console.log({ map });

let x = arr
  .filter((elem) => typeof elem === "number")
  .map((elem) => elem + 100);
console.log({ x });
