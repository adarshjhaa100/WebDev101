console.log("Tutorial select element");
console.log(Array.from(document.all));

/*let ele1=document.body;
console.log(ele1.childNodes);
console.log(ele1.parentNode);
*/
//Single element selector
//method 1

let ele2 = document.getElementById("c1");
ele2.innerText = "Hello This is inner text"; //This removes the inner text already present
ele2.innerHTML = `<h2> this is an elemnt belonging to the class :${ele2.className}</h2>`; //This removes the inner text already present before
//console.log(ele2);

//method 2: using query selector
let ele3=document.querySelector('#c2'); //In case we have to select using ID
ele3=document.querySelector('.container');//in case select using classname
ele3.style.color='red'; //change style
ele3=document.querySelector('h1');//in case use direct tagname
// console.log(ele3);

//Multi Element selector
let eleClass=document.getElementsByClassName('container');
//console.log(eleClass);

//to further select within the selected class
//console.log(eleClass[0].getElementsByClassName('child'));

//console.log(document.getElementsByTagName('h1'));

//Using querySelector cant use ids as they are unique thus only 1
let eleClass2=document.querySelectorAll('.container');

console.log(eleClass2);

