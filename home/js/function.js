// console.log(add(1));

// function add(a, b = 2) {
//   //default parameter
//   console.log(a);
//   console.log(b);
//   return a + b;
// }

const add = (a, b = 1) => a + b;
console.log(add(1));

if (2 == 2.0) {
  console.log("true");
}

const fun = () => {
  return;
};
console.log(fun());

((dp = "default parameter") => {
  console.log(`self innvoking function + ${dp}`);
})();
