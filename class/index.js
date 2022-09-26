let name = "John"
// let name2 = "Doe"
let age = 12
// let marriage_status;

// ERROR Handling

try {
    // console.log(marriage_status);
} catch (err) {
    // console.log("error is ", err.message)
}

// let arr = [name, age]


// let names = [name, name2]

let person = {
    name: "john",
    age: 12
}

// let person = {
//     name,
//     age
// }

// console.log(person);


let temp = [];
let numbers = [1, 2, 3, 4, 5]
// numbers[0];
// numbers.splice(1, 0, 12)
// // numbers.slice(1, 0, 12)

// console.log({ numbers });

// if (4 % 2 == 0)


// let results = numbers.filter(el => el % 2 == 0)


// console.log(results);


let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
]

let statuses = [true, true, false, false, true]

// &&
// ||
// !

if (!statuses.includes(false)) {

    console.log("do somethin");

}

// TODO:
//   array of completed todos ->title

// numbers.map(el => console.log("modified-", el * 2))



// let selected_todo = todos.find(el => el.id == 17)
// // optinal chaining
// console.log("title is", selected_todo.title);


// let fruits = "apple,banana,orange"

// console.log(fruits.split(","));
// let email = " testin@testing.com"
// console.log(email == "testin@testing.com");

// let text = "John\"s"
// console.log(text);


function test() {
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }
}

// const test = () =>{
//     for (let i = 0; i < 100; i++) {
//         console.log(i);
//     }
// } 


console.log("one");
console.log("two");
// test()

setTimeout(() => {
    console.log("inside timeout");
}, 1000);

console.log("final cosole log");




























