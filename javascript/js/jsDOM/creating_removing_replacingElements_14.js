console.log("This is tutorial 14");


//creating element
let ele = document.createElement("p");
ele.id = "para1";
ele.className = "child";
ele.innerHTML = `<b>This is a text that I inserted</b>`;
//console.log(ele);


//insert element Element
let element=document.getElementById('c1');
element.appendChild(ele);
//element.append(ele);
//console.log(element);

//replace element
ele2=document.createElement('a');
ele2.href="https://pythonprogramming.net/machine-learning-tutorial-python-introduction/";
ele2.id='link1';
ele2.class='link';
ele2.innerText='This is link to pythonprogramming.net';
element=document.getElementsByClassName('container')[0];
element.replaceChild(ele2,document.getElementById('c2'));
//element.replaceWith(ele2);
console.log(element);

