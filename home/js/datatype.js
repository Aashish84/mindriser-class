// Data_Type
// primitive
/*
        Number, 
        BigInt,
        Symbol,
        String,
        Boolean,
        NaN,
        undefined,
        null
    */
// non primitive {reference data type}
// object
// array

let num = 1;
console.log(typeof num);

let fname = "asish";
console.log(typeof fname);

let obj = {
  name: "asis",
  age: 20,
};
let obj2 = obj;
obj2.name = "ram";
console.log({ obj }, { obj2 });

let obj3 = { ...obj };
obj3.name = "shyam";
console.log({ obj3 });

// ... -> spread operator

let arr = [1, 2, 3];
console.log({ arr });
