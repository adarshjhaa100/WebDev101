console.log("This is ex2");

let eleDiv = document.getElementById("cnt1");
let btnSav=document.getElementById("btn1");
let btnRes=document.getElementById("btn2");
if(localStorage.getItem('myCode')!==null){
  eleDiv.innerText=localStorage.getItem('myCode');
}
else{
  eleDiv.innerText=`Enter your code`;
}

//Makes content Editable
eleDiv.addEventListener("click", function(e) {
  eleDiv.contentEditable = "true";
});

//Saves content
eleDiv.addEventListener("blur", function(e) {
  eleDiv.contentEditable = "true";
  console.log(eleDiv.innerText);
  
});

btnSav.addEventListener('click',function(e){
let text1=eleDiv.innerText;
localStorage.setItem('myCode',text1);  
});

btnRes.addEventListener('click',function(e){
  let text1=eleDiv.innerText;
  text1=`Enter your code`;
  eleDiv.innerText=text1;
  localStorage.setItem('myCode',text1);  
  });
  

