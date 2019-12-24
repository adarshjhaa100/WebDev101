console.log("This is exercise 17");

let items = ["name1", "name2", "name3", "name4"];

function func(ele, index) {
  localStorage.setItem(index, ele);
}
items.forEach(func);

//For array
let arr = ["gajar", "muli", "baingan"];
//localStorage.setItem('sabzi',arr);
//to retain the typeof
localStorage.setItem("sabzi", JSON.stringify(arr));

//for objects
let obj = {
  name: "Adarsh",
  age: 21,
  points: [4, 6, 3, 2]
};
localStorage.setItem("bio", JSON.stringify(obj));
//retreive item
console.log(JSON.parse(localStorage.getItem("sabzi")));
console.log(JSON.parse(localStorage.getItem("bio")));

//Session Storage
sessionStorage.setItem("bio", JSON.stringify(obj));

