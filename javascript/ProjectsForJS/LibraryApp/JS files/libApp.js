console.log("this is project library");

//Constructor for book
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
  this.id = name + author;
}
function helloW() {
  console.log("hello");
}
function Delete() {}
let del1 = new Delete();
//Methods to display constructor
function Display() {}

//Add methods to prototype
//Method to initialize display
Display.prototype.initList = () => {
  let bookList = JSON.parse(localStorage.getItem("booklist"));
  if (bookList == null) {
    bookList = [];
  }
  let bookListTable = document.getElementById("bookList1");
  let bookListRow = ``;
  
  let d = new Delete();
  Array.from(bookList).forEach(element => {
    bookListRow += `
    <tr>
    <td>${element.name}</td>
    <td>${element.author}</td>
    <td>${element.type}</td>
    <td>
    
    <button id="${element.id}" value="Delete" onclick="del1.DelBook(this.id)">Delete</button>
    
    </td>
    </tr>`;
  });
  bookListTable.innerHTML = bookListRow;
};

//Method to add book
Display.prototype.add = book => {
  let bookList = JSON.parse(localStorage.getItem("booklist"));
  if (bookList == null) {
    bookList = [];
  }
  bookList.push(book);
  localStorage.setItem("booklist", JSON.stringify(bookList));
  console.log(bookList);

  let bookListTable = document.getElementById("bookList1");
  let bookListRow = ``;

  Array.from(bookList).forEach(element => {
    bookListRow += `
    <tr>
    <td>${element.name}</td>
    <td>${element.author}</td>
    <td>${element.type}</td>
    <td>
    <button id="${element.id}" value="Delete" onclick="del1.DelBook(this.id)">Delete</button>
    </td>
    </tr>`;
  });
  bookListTable.innerHTML = bookListRow;
};

//Method to clear form
Display.prototype.clear = () => {
  let addBook = document.getElementById("addBooks");
  addBook.reset();
};

//MEthod to validate field names
Display.prototype.validate = book => {
  let bookList = JSON.parse(localStorage.getItem("booklist"));
  let flag = false;
  if (bookList !== null)
    Array.from(bookList).forEach(element => {
      if (book.id === element.id) flag = true;
    });
  if (book.name.length <= 2 || book.author.length <= 2 || flag) {
    return false;
  }
  return true;
};

Delete.prototype.DelBook = id => 
{
  let bookList = JSON.parse(localStorage.getItem("booklist"));
  if (bookList !== null) {
    if (bookList.length == 1) {
      localStorage.setItem("booklist", null);
      let display = new Display();
      display.initList();
      return;
    }
  }
  let bookIndex = -1;
  if (bookList !== null && bookList.length !== 1) {
    Array.from(bookList).forEach((element, index) => {
      if (id === element.id) {
        bookIndex = index;
      }
    });
    if (bookIndex !== -1) {
      bookList.splice(bookIndex, 1);
      //console.log(bookList);

      localStorage.setItem("booklist", JSON.stringify(bookList));
    }
}
  let display = new Display();
  display.initList();

  //console.log('Deleted Succesfully');
};

//Method to display message
Display.prototype.message = (isValidBook, messageText) => {
  let messageEle = document.getElementById("message1");
  messageEle.innerHTML = `
  <div class="alert alert-${isValidBook} alert-dismissible fade show" role="alert">
        <strong>${isValidBook},</strong> ${messageText}
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
  `;
  setTimeout(() => {
    messageEle.innerHTML = ``;
  }, 2000);
};

let display = new Display();
display.initList();
//Add submit book event listener
let addBook = document.getElementById("addBooks");
// /console.log(addBook);

addBook.addEventListener("submit", addBookAction);

//Constructor added to delete

//Event listener to add book
function addBookAction(e) {
  e.preventDefault();

  let name = document.getElementById("bookName1").value;
  let author = document.getElementById("author1").value;

  //3 genres
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("Programming");
  let cooking = document.getElementById("Cooking");
  let arrGenre = [fiction, programming, cooking];

  let genre1;
  arrGenre.forEach(element => {
    if (element.checked) genre1 = element.value;
  });

  // console.log(genre1, name, author);

  //Adding books to localstorage
  let book = new Book(name, author, genre1);

  let display = new Display();

  //Validate and add book
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.message("success", "Book has been added");
  } else {
    display.message("danger", "Invalid book name/author");
  }
}
