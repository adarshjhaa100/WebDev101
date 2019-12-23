//this contains if,else switch cases

console.log("conditional statements");
//let age = 13;
let age = "13";
//this statement compares the values of two sides
/*if (age == 13) {
  console.log("value is 13");
}
if (age == "13") {
  console.log("value is 13 but comparison eith a string");
} else {
  console.log("value is not a string");
}
*/

//Hence use this
if (age === 13) {
  console.log("age is 13 & type is number");
} else {
  console.log("Not 13 as a number");
}

//Switch case
let var1 = 4;
switch (var1) {
  case 2:
    console.log("This is 2");
    break;
  case 4:
    console.log("This is 4");
    break;
  default:
    console.log("Its not above metioned");
}
