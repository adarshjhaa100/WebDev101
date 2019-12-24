console.log("This is tut 16");
console.log(document.body.children);

let ele = document.getElementById("cnt1");
function func1(e) {
  console.log(`You have cliked container:${ele.id} `);
}

//ele.addEventListener("click",func1);
ele.addEventListener("mousemove", function(e) {
  ele.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX})`;
});

//console.log(ele);
