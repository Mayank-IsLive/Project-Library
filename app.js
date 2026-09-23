const addNewBook = document.querySelector("#addNewBook");
const library = document.querySelector(".library");

const myLibrary = [];

// Book generator
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// Adding book to library
function addBookToLibrary(title, author, pages, status) {
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
}

// Add book as many as you want
addBookToLibrary("Toon pur ka super hero", "Ajay Devgan", "293", false);

// Display books from my library array into the HTML page
myLibrary.forEach((book) => {
  library.innerHTML += `
  <div class="book">
  <h2>${book.title}</h2>
  <p>Author: ${book.author}</p>
  <p>Pages: ${book.pages}</p>
  <p>Status: ${book.status}</p>
  </div>
  `;
});
