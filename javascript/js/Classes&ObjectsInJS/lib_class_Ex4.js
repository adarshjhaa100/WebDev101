console.log("this is ex4");

//A class library
class Library {
  constructor(list) {
    this.bookList = Array.from(list);
    this.issuedBooks = {};
    //  localStorage.setItem('blist',JSON.stringify(this.bookList));
  }
  //A function to get list of books
  getBookList() {
    //return JSON.parse(localStorage.getItem('blist'));

    return `List of all books:\n${
      this.bookList
    } \nList of issued:\n${JSON.stringify(this.issuedBooks)}`;
  }

  issueBook(bookName, user) {
    if (this.issuedBooks[bookName] != undefined) {
      console.log(`Already issued`);
    } else {
      this.issuedBooks[bookName] = user;

      console.log(`${user} has been issued this book,`);
    }
  }

  returnBook(bookName) {
    //console.log(this.bookList);
    if (this.issuedBooks[bookName] != undefined)
      this.issuedBooks[bookName] = undefined;
    else console.log(`This book has already been returned`);
  }
}
let bookList = [];
for (let index = 1; index <= 26; index++) {
  bookList.push(String.fromCharCode(index + 64));
}

let lib1 = new Library(bookList);
//console.log(lib1);
//console.log(lib1.getBookList());
lib1.issueBook("F", "Kataria");
lib1.issueBook("G", "Kataria1");
lib1.issueBook("H", "Kataria2");
lib1.issueBook("J", "Kataria3");

//lib1.issueBook("F",'jamail');
console.log(lib1.getBookList());

lib1.returnBook("F");
console.log(lib1.getBookList());

//console.log(lib1.getBookList());
