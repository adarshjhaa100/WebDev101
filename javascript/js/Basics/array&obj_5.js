console.log('Arrays&Objects');

//Arrays 
let arr1=[1,2,3,4];
console.log(arr1);

let arr2=['aj',1,2,3,true];
console.log(arr2);

let arr3=new Array('sdf',3,4,5,true);
console.log(arr3);

//Operations on array
console.log(arr3.indexOf(4));
arr3.push(4,'hj');
console.log(arr3);
arr3.splice(1,4);
console.log('Spliced:',arr3);

//Reference var property
//eg: if a=[1,2,3,4]; and let b=a;
let a=[1,2,3,4];
let b=a;
console.log(a);
b[3]=2; //change made to b i.e reference of a
console.log(a); //here a will also change as it is referenced to b

//Object literal
let portfolio={
    name:'Adarsh Jha',
    age: '21',
    'date of birth':Date()
};
console.log(portfolio);
//Retreival
console.log(portfolio["date of birth"]);
console.log(portfolio.age);
console.log(portfolio.name);


