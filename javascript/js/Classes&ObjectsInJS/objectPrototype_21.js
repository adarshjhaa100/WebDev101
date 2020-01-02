console.log("this is tut 21");

//prototype is used to create any object in JS
let obj1 = {
  name: "Adarsh"
};

console.log(obj1);

//using functions of object prototype
function CreateStudent(name, age) {
  this.name = name;
  this.age = age;
}

//this is used to add getters
CreateStudent.prototype.getName = function() {
  return this.name;
};

//add setetrs using object prototype
CreateStudent.prototype.setName = function setName(newName) {
  this.name = newName;
};

let obj2 = new CreateStudent("fwbefejwk", 34);

//console.log(obj2.getName());
obj2.setName("aj");
console.log(obj2);

