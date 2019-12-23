//Search liks and print those containing a specific word
let a=document.links;
let b=`.`;
console.log(a);
Array.from(a).forEach(function(element){
if(element.href.includes(b))
console.log(element.href);
});

