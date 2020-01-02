console.log("this is tut 22");

const vehicle1 = {
  color: function(col) {
    this.clr =col;
  },
  wheelsNo: 4
};


//method1
let car1=Object.create(vehicle1);
car1.name="Datsun";
car1.color("red");

//console.log(car1);

//method2
const car2=Object.create(vehicle1,{ 
    name:{value:"mazda", writable:true},
    });

car2.color("blue");
console.log(car2);


//Inheriting prototype
function Employee(name,salary,experience) {
    this.name=name;
    this.salary=salary;
    this.experience=experience;
}

Employee.prototype.slogan=function(){ 
    console.log("always stay honest");
}

function Programmer(name,salary,experience,languages_known){
    Employee.call(this,name,salary,experience);
    this.languages=Array.from(languages_known);
}

//Inheritiong prototype from employee
Programmer.prototype=Object.create(Employee.prototype);
//adding the constructor
Programmer.prototype.constructor=Programmer;

let pgm1=new Programmer("AJ",145000,12,["c","c++","python"])
console.log(pgm1);
