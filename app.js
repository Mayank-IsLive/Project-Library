const myLibrary = [];

// book generator

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    console.log(`${this.title} is written by me`);
  };
}

const book1 = new Book("Harry Potter", "mayank", "297", false);
book1.info();

function addBookToLibrary() {
  book1.push = myLibrary;
}

console.log(myLibrary);
