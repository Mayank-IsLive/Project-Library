const addNewBook = document.querySelector("#addNewBook");
const library = document.querySelector(".library");
const overlay = document.querySelector('.overlay');
const overlayClose = document.querySelector('#closebtn');
const myLibrary = []; // holds every book
/** @type {HTMLFormElement} */
const form = document.querySelector('#myform');





// form open 
addNewBook.addEventListener("click", () => {
  overlay.classList.add("active");
});

overlayClose.addEventListener("click", () => {
  overlay.classList.remove("active");
});




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
// console.log(myLibrary[0].id);






// form 
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = form.elements.bookName.value;
  const author = form.elements.bookAuthor.value;
  const pages = form.elements.pages.value;
  const status = form.elements.readStatus.value;

  addBookToLibrary(title, author, pages, status);
  console.log(myLibrary);
  displayLibrary();
  form.reset();
  overlay.classList.remove("active");

})

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

