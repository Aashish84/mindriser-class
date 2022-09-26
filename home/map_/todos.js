let todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
];

let res7 = todos.filter((elem) => elem.completed).map((elem) => elem.title);

console.log(res7);

let selected_value = todos.find((el) => el.id === 19);

// console.log(selected_value.title);
// TypeError: Cannot read property 'title' of undefined

try {
  console.log(selected_value.title);
} catch (err) {
  console.log(err.message);
}

// optional chaning
// The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined

console.log(selected_value?.title);

console.log("=========================");

let obj = {
  name: "asis",
  fun: (el) => el % 2 == 0,
};

console.log(obj.fun?.(2));
console.log(obj.funs?.(2));
