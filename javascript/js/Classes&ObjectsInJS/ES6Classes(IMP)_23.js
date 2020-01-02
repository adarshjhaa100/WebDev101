console.log("this is tut 23");

class Employee {
  constructor(name, exp, sal) {
    this.name = name;
    this.experience = exp;
    this.salary = sal;
    
  }
  getExp(){
      return `Experience of ${this.name} is ${this.experience}`;
  }
  static add(a,b){
    
      return a+b; 
  }
}

let emp1=new Employee("Adarsh",21,345000);
let emp2=new Employee("Adarsh",21,345000);

console.log(emp1.getExp());


//Calling static method
console.log(
Employee.add(2,3)
);


//Inheritance
class Programmer extends Employee{
    constructor(name,experience,salary,gitLink,languages){
        super(name,experience,salary);
        this.languages=Array.from(languages);
        this.gitLink=gitLink;
    }

    showDetails(){
        return `Programmer: ${this.name} knows ${this.languages} `;
    }
}

let pgm3=new Programmer("AdarshJha",12,795473,'www.google.com',['C','c++','js','py']);
//console.log(pgm3);
console.log(pgm3.showDetails());