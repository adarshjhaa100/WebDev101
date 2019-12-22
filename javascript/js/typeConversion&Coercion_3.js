//Type Conversion and Coercion
console.log('Type Conversion and Coercion');

//Conversion

//To string

//Method 1

//let varInt=34;
let varInt=String(34);
console.log(varInt,typeof varInt);

let varBool=true;
console.log(String(varBool),typeof String(varBool));

//** Important
let arr=[1,2,3,4,5];
console.log('length of arr:',arr.length);
console.log('After converting to string, length is:',String(arr).length);

let mark={
    a:2,
    b:3
};
console.log(mark);
console.log('toString:',String(mark));

//Method2
let varInt2=34;
console.log(varInt2,typeof varInt2);
console.log(varInt2.toString(),typeof varInt2.toString());

console.log('To number');

//To Number
let strNum='34.25';
console.log(strNum,typeof strNum);
console.log('to num:',Number(strNum),typeof Number(strNum));

/* 
Case of NaN:-

strNum='w1';
console.log(strNum,typeof strNum);
console.log('to num:',Number(strNum),typeof Number(strNum));
*/
console.log(parseInt(strNum));
console.log(parseFloat(strNum));

