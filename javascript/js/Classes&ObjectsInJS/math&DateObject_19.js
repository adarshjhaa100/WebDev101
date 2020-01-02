console.log("this is tut 19");
let ele = document.createElement("div");
ele.id = "mathText1";
ele.class = "mathClass";
let txt1 = `w`;

function ramdom(a, b) {
  return Math.round(Math.random() * (b - a) + a);
}

//MAth object
let mathObj1 = Math.abs(-2);
//Random b/w 100 and 200
mathObj1 = ramdom(100, 200);
mathObj1=Math.cos(Math.PI);
txt1 = JSON.stringify(mathObj1);



//Date object
//get Date
let currDate=new Date();
let otherDate=new Date('02/12/2002');
txt1=JSON.stringify(otherDate);
txt1=JSON.stringify(otherDate.getDate());
txt1=JSON.stringify(otherDate.getTimezoneOffset());
txt1=JSON.stringify(otherDate.getHours());


//Modify Date
otherDate.setDate(14);
txt1=JSON.stringify(otherDate);

ele.innerHTML = `Result:` + txt1 + ``;
let elem = document.getElementsByClassName("container")[1];
//elem.insertBefore(ele, document.getElementById("c22"));
document.getElementById('c23').replaceWith(ele);
console.log(mathObj1);
