console.log("THis is for Note taking site");
showNote();
let btnAdd = document.getElementById("btnAdd");

//Function to add notes to LocalStorage
//console.log(givenTxt,btnAdd);
btnAdd.addEventListener("click", function(e) {
  let givenTxt = document.getElementById("txtAdd");
  let theTitle1=document.getElementById("title1");
  let notes = localStorage.getItem("notes");
  let notesObj;
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let ele={ 
      theTitle:theTitle1.value,
      theVal:givenTxt.value
  };
  if (givenTxt.value !== "") notesObj.push(ele);

  localStorage.setItem("notes", JSON.stringify(notesObj));
  givenTxt.value = "";
  theTitle1.value="";
  showNote();
});

//Function That shows the notes from localStorage
function showNote() {
  let notes = JSON.parse(localStorage.getItem("notes"));
  let htmlCode = ``;
  if(notes==null)
  {
    document.getElementById(
        "showNotes1").innerHTML = `<h6>No notes present</h6>`;
  }
  else {
    notes.forEach(function(element, index) {
      htmlCode += `<div class="card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.theTitle}</h5>
          <p class="card-text" >${element.theVal}</p>
          <button class="btn btn-primary" onclick="deleteNode(this.id)" id="${index}">Delete</button >
        </div>
      </div>`;
    });
    document.getElementById("showNotes1").innerHTML = htmlCode;
    htmlCode = ``;
  } 
  //console.log(htmlCode);
}

//Function to delete note
function deleteNode(index){
   // console.log(index);
    let note=JSON.parse(localStorage.getItem('notes'));
    note.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(note));
    showNote();
}

//Function tos earch text
let search=document.getElementById('searchTxt');
//console.log(search);
search.addEventListener('input',function(e){
    let ipText=search.value;
    //console.log(ipText);
    let cardCollection=document.getElementsByClassName('card my-2 mx-2');
    //console.log(Array.from(cardCollection));
    Array.from(cardCollection).forEach(function(element){ 
        //console.log();
        //console.log(element);
        //console.log((element.getElementsByTagName('p')[0].innerText));
        if(element.getElementsByTagName('p')[0].innerText.includes(ipText)
        ||element.getElementsByTagName('h5')[0].innerText.includes(ipText))
        {
            element.style.display='block';
        }
        else{
            e;element.style.display='none';
        }
    });
});

