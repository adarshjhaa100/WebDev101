//String :Properties
console.log("Properties of A string");

//Concat
let string1='Adarsh';
let string2='Jha';
console.log(string1);
console.log(string2);
console.log(string1+string2);
string1=string1.concat(string2);
console.log(string1);
/*
//Case coversion
console.log(string1.toLowerCase());
console.log(string1.toUpperCase());
*/

//Index
console.log('Element at 4:',string1[4]);
console.log("'Jha' subsstring is there?:",string1.includes('Jha'));

//slice or cut
let varString='A quick brown fox';
console.log('substring:',varString.substring(0,5));
console.log(varString.substr(0,6));
console.log('Slicing:',varString.slice(0,5));

//Slice vs substr
console.log('slice:',varString.slice(-4));
console.log('subString:',varString.substring(-4));

console.log('split',varString.split(' '));

//Template literals
let name1='Adarsh Jha';
let nameNick='ajTheSlayer';


let bioH=`<h1>The BioData:</h1>
<p>Fullname:${name1} and nickname ${nameNick}</p>`;

console.log(bioH);
document.body.innerHTML=bioH;