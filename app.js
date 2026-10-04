const addNewBook = document.querySelector("#addNewBook");
const library = document.querySelector(".library");

const myLibrary = []; // holds every book

// Book generator
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = crypto.randomUUID(); // no need to pass "id" parameter in te book generator this keyword make it automatically
}

// Adding book to library
function addBookToLibrary(title, author, pages, status) {
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
}

// Add book as many as you want
addBookToLibrary("Toon pur ka super hero", "Ajay Devgan", "293", false);
addBookToLibrary("Mayank Saraswal")
// console.log(myLibrary[0].id);

// Display books from my library array into the HTML page
function displayLibrary() {
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
}

displayLibrary();




// form 

