console.log("This is tutorial 10");

let a = document;
a = document.all;
a = document.body;
a = document.getElementById("c1");
a = document.forms[0];

a = document.all;
let b = Array.from(a).forEach(function(element) {
  console.log(element);
});
//console.log(b);

let c = document.images;
console.log(c);
console.log(
    Array.from(c).forEach(function(element) {
      console.log(element);
    })
  );
  
let d = document.scripts;
console.log(d, typeof d);
console.log(
  Array.from(d).forEach(function(element) {
    console.log(element);
  })
);
