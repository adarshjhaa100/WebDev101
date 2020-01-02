console.log("this is tut20");

//A sample object created

let stu1 = {
  name: "Ramesh",
  age: 13,
  marks: [2, 3, 4, 5],
  getTotal: function() {
    let sum = 0;
    this.marks.forEach(function(value) {
      sum = sum + value;
    });
    return sum;
  }
};

//console.log(stu1.getTotal());

//Using constructors to create objects
function createStudent(name, age, marks) {
  this.name = name;
  this.age = age;
  this.marks = Array.from(marks);
  this.getTotal = function() {
    let sum = 0;
    this.marks.forEach(function(value) {
      sum = sum + value;
    });
    return sum;
  };
}

stu2 = new createStudent("jatin", 22, [1, 2, 3, 4]);
console.log(stu2.getTotal());
