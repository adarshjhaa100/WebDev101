console.log('This is 15');


let text1=document.getElementById('t1');
let btn1=document.getElementById('btn1');
//console.log(btn1);
btn1.addEventListener('click',(e)=>{
    //console.log('Submit button clicked');
    //text1.value='cliked';
    console.clear();
    let ele=document.createElement('p');
    ele.id='p11';
    ele.className='classP';
    ele.innerText='You clicked the button';
    (document.getElementsByClassName('container')[0]).append(ele);
    console.log(
        e.target
    );
    
});

