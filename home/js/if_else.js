let val = 0;

// switch case check for strict type

switch (val) {
  case false: //if(val === false)
    console.log("true");
    break;

  default:
    console.log("false");
    break;
}

console.log("==========");

let will_rain = true;
let will_rain_probability = true;

if (will_rain) {
  console.log("take umbrella");
} else if (will_rain_probability) {
  console.log("your wish");
} else {
  console.log("no need");
}

console.log(
  will_rain ? "take it " : will_rain_probability ? "your wish" : "no need"
  //   it become nested if else
);
