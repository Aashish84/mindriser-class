// console.log("john" + "doe")
// // ==> CONCAT
// console.log("100" + 1);
// console.log(Number("100") + 1);
// console.log(parseInt("100") + 1);

// console.log(100 - "1");

// console.log("string" * "1");

// console.log(2 ** 3);


// % => modulos => returns the reminder 
// console.log(10 / 3);
// console.log(10 % 3);


// ++ INcrement
// pre - increment ==> ++num  ==>  instantly returns the updated value
// post - increment => num++ ==> updates the value, but doesnot return the updated value instantly
// -- Decrement
//     -- pre-decremnt
//     -- post-decrement

let a = 1;
// ++a;
// a++
// console.log(a);

// console.log(a, ++a, a++, a);
// console.log(a,  ++a, a);
// console.log(a,  a++, a);

// a = a + 1;
// a += 1
// console.log(a);

let str = "random"
// str = str;
// str += "  string";
// console.log({str});


let str2 = "random"

// console.log(str == true)

// console.log(1 == "1")
// console.log(1 === "1") // false
// console.log(1 != "1") // false
// console.log(1 !== "1") // true

// console.log(2 > 1);
// console.log(2 >= 2);

// console.log(1 === "1")
// console.log(NaN == NaN)
// console.log(Number(NaN) == Number(NaN))

// console.log(typeof (Number(NaN)));

// comparison operators
// logical operators
// logical AND => checks if all the values are true or not  // must satisfy all given condition 
// logical OR =>  checks if a single value is true or not. // 
// logical NOT=> reverse our condition => return  boolean


// console.log("result =>", true && (1 === "1") && "hello");
// console.log("or result =>", <condition> || <condition>);
// console.log("or result =>", false || true || false);
// console.log(!true);

// console.log("hello" && 0);
// console.log(0 && true);

// SIX FALSY values
// false
// undefined
// "" // empty string
// 0 || -0
// NaN
// null

// Conditional statements
// console.log(2 > 1);
// console.log("false");
// console.log("".length);

// let name;
// console.log({ name });
// let number = -0
// let fruits = null
// let fruits = []
let person_1 = {}
if (false) {
    // task 
    // feature
    console.log("greater -- true value");
}
// else if(<another condition>)
// else if (2 < 1) {
//     console.log("second condition satisfied");
// }
// else {
//     // another task
//     console.log("less-- false value");
// }
// switch
// ternary
// function

let will_rain = false;
let has_probability = true

if (will_rain) {
    console.log("take umbrella");
} else if (has_probability) {
    console.log("your wish");
} else {
    console.log("no need ");
}

// ternary operator ? :
console.log(will_rain ? "take it" : (has_probability ? "yourwish" : "no need"));

// //  SWITCH
// switch (will_rain) {
//     case true:
//         console.log("take it ");
//         break;
//     default:
//         console.log("no need ");
//         break;
// }

let num = 2

// if (num < 5) {
//     console.log("iff---- less that five");
// } else if (num > 5) {
//     console.log("greater ");
// }

// 1== 1 // true
// 1 === "1" // false
// ===

// num = 2
// switch (num) {
//     // if (num === 0 )
//     // if(num === true)
//     // if(num === 2)
//     case 0:
//         console.log("0");
//         break;
//     case 1:
//         console.log("is 1");
//         break;
//     //    2 === "2"
//     case "2":
//         console.log("is 2");
//         break;
//     default:
//         console.log("defaut case ");
//         break;
// }




// 1 , 2
// 23 , 2
// 26 , 2
// 6 , 2
// console.log((23 + 2) + (23 * 2));
// console.log((23 + 2) + (23 * 2));
// console.log((23 + 2) + (23 * 2));
// console.log((23 + 2) + (23 * 2));
// console.log((23 + 2) + (23 * 2));
// console.log((23 + 2) + (23 * 2));
// console.log((23 + 2) + (23 * 2));
// console.log((23 + 2) + (23 * 2));


// DONOT REPEAT YOURSELF (DRY )
// function <name>(){}


// console.log(result);
// let result = "1000"

// addAndMultiply(1, 2)
// addAndMultiply(23, 2)
// let result = addAndMultiply(<arguement>,<arguement>)





// function addAndMultiply(<parameter>,<parameter>) {
// function addAndMultiply(num1, num2 = 1) {
//     console.log({ num1 });
//     console.log({ num2 });
//     return ((num1 + num2) + (num1 * num2));
//     console.log("end function");
// }


// let <name> = (<parameter>,<parameter>) =>  

let addAndMultiply = (num1, num2 = 0) => {
    let num3 = 100
    console.log("inide multiply");
    return ((num1 + num2) + (num1 * num) + num3);
}


// let addAndMultiply = (num1, num2 = 0) => ((num1 + num2) + (num1 * num2))

console.log(11);
let result = addAndMultiply(23)
console.log(22);
console.log({ result });

// console.log();
// calling/executing a funciton
// console.log("after function");


// Fat arrow
// ARROW FUNCTION
// => 



// global scope, block scope, functional scope





























