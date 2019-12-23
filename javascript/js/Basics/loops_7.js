console.log("This contains for,while do while loop");
//Basics
let a = 1;
/* //For loop:
for(let A=a;A<100;A++){
    console.log(A);
    
}
*/

/* //While:
while(a<10)
{   a++;    
    console.log(a);
}
*/
/* //do-while: 
do {
    a++;
  console.log(a);

  
} while (a < 10);
*/

// Traversing array
let arr1 = [4, 56, 6, 8, 4, 3];
//1. Old method, thru loop
/*
for(let index=0;index<arr1.length;index++){
    console.log(index,arr1[index]);
    
}
*/
//New method
arr1.forEach(function(number, index, array) {
  console.log(index, number);
});

//**Important:for obj literal
let bio = {
  name: "Adarsh Jha",
  age: 21,
  marks: [4, 5, 5, 3],
  location: "kameshki"
};

for (let attr in bio) {
  console.log(`value of ${attr} is: ${bio[attr]}`);
}
