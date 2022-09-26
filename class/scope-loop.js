// block scope{}  only for let and const 
// functional scope function(){} for all let,const and var


// global scope variable 
var num1 = 1;

// block scoped variables
let num2 = 2;
const num3 = "three";


// if (true) {
//     let num4 = 4;
//     console.log("inside block", num4);
//     if (true) {
//         console.log("again", num1);
//     }
// }

num4 = "four"
// let num4 = "four"

function sum() {
    num4 = 4;
    // let num4 = 4;
    console.log("inside block", num4);
    if (true) {
        console.log("again", num1);
    }
}
sum()
console.log({ num4 });





// console.log(1);
// console.log(2);
// console.log(10);


// FOR LOOP
// Start point
// end point
// we know the number of iterations


// WHILE LOOP



// for (let i = 1; <condition>;<increment>) {
let i = 1;
if (i <= 10) {
    // do something
}

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     console.log("");
// }

// console.log({ i });



// 50 + (50)/2

// condition = less than 500

// while(<condition>){
// do something
// }

var num1 = 50;
let api_response = false


// &&
// ||
// !
let count = 0;
// while (!api_response) {
//     // while (num1 < 500) {
//     // console.log({ num1 });
//     // num1 = num1 + (num1) / 2

//     console.log(api_response);
//     count++
//     if (count == 5) {
//         api_response = true
//     }

//     // call api
//     // api_response = true
// }

api_response = false
do {
    console.log({ api_response });
} while (api_response)
// } while (<condition>)



//  => 10 * 1 = 1
//  => 10 * 10 = 100
// template literal 















// for
// while
// do-while























