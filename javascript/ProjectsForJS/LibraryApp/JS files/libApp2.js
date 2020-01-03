console.log("this is app2");

class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
    this.id = name + author;
  }
}

class Display {
  //VAlidate if book added ins already not present and length of string
  validate(book) {
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
  }

  //Method to add books
  add(book) {
    let bookList = JSON.parse(localStorage.getItem("booklist"));
    if (bookList == null) {
      bookList = [];
    }
    bookList.push(book);
    localStorage.setItem("booklist", JSON.stringify(bookList));
    console.log(bookList);
    Display.show();
  }

static  delete(id) {
    let bookList = JSON.parse(localStorage.getItem("booklist"));
    if (bookList !== null) {
      if (bookList.length == 1) {
        localStorage.setItem("booklist", null);
        
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
    
  }

  //Shows the list of books
 static show() {
    let bookList = JSON.parse(localStorage.getItem("booklist"));
    if (bookList == null) {
      bookList = [];
    }
    let bookListTable = document.getElementById("bookList1");
    let bookListRow = ``;

    
    Array.from(bookList).forEach(element => {
      bookListRow += `
    <tr>
    <td>${element.name}</td>
    <td>${element.author}</td>
    <td>${element.type}</td>
    <td>
    
    <button id="${element.id}" value="Delete" onclick="Display.delete(this.id); Display.show();">Delete</button>
    
    </td>
    </tr>`;
    });
    bookListTable.innerHTML = bookListRow;
  }

  //Clear
  clear(){
    let addBook = document.getElementById("addBooks");
    addBook.reset();
  }
}
let display=new Display();
Display.show();
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
    //display.message("success", "Book has been added");
  } else {
    //display.message("danger", "Invalid book name/author");
  }
}
