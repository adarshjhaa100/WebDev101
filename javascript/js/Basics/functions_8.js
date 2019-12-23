console.log("Functions");

let vehicle1 = "car";
let vehicle2 = "bike";

function about(vehicle) {
  console.log(`You have selected a ${vehicle}`);
}

about(vehicle1);
about(vehicle2);

// Functions in object literals
let obj = {
  name: "Adarsh",
  age: 21,
  marks: [4, 56, 74, 3],
  aggregate: function() {
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }
    sum /= this.marks.length;
    return sum;
  }
};

console.log(`aggregate:${obj.aggregate()}`);

//scope
if(1){
    var i=10;
    let j=2;
}
console.log(i);
//j is undefined here as let has local scope
//console.log(j);
