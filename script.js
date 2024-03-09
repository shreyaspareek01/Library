let myLibrary = [];
const body = document.querySelector("body");
const addBook = document.querySelector(".addBook");
const closeButton = document.querySelector(".close");
const modal = document.querySelector(".modal");
let submit = document.querySelector(".submitButton");
let titleOfBook = document.querySelector(".titleOfBook");
let authorOfBook = document.querySelector(".authorOfBook");
let pagesInBook = document.querySelector(".pagesInBook");
let readOrNot = document.querySelector(".checkbox");
let readStatus = document.querySelectorAll(".readStatus");
let a = 1;

addBook.addEventListener("click", () => {
  modal.style["display"] = "block";
});
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

submit.addEventListener("click", () => {
  addBookToLibrary();
  modal.style.display = "none";
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let newBook = new Book(
    titleOfBook.value,
    authorOfBook.value,
    pagesInBook.value,
    readOrNot.checked
  );

  myLibrary.push(newBook);

  let bookContainer = document.querySelector(".booksContainer");
  let displayBook = document.createElement("div");
  let bookTitle = document.createElement("p");
  let bookAuthor = document.createElement("p");
  let bookPages = document.createElement("p");
  let bookRead = document.createElement("button");
  let removeButton = document.createElement("button");

  bookTitle.textContent = titleOfBook.value;
  bookAuthor.textContent = authorOfBook.value;
  bookPages.textContent = pagesInBook.value;
  if (readOrNot.checked == true) {
    bookRead.textContent = "Read";
    bookRead.style["background-color"] = "green";
  } else {
    bookRead.textContent = "Not Read";
    bookRead.style["background-color"] = "red";
  }
  removeButton.textContent = "Remove";

  displayBook.classList.add(`book`);
  bookRead.classList.add("readStatus");
  removeButton.classList.add("removeButton");
  bookContainer.append(displayBook);
  displayBook.append(bookTitle);
  displayBook.append(bookAuthor);
  displayBook.append(bookPages);
  displayBook.append(bookRead);
  displayBook.append(removeButton);

  removeButton.addEventListener("click", () => {
    displayBook.remove();
    const index = myLibrary.indexOf(newBook);
    if (index !== -1) {
      myLibrary.splice(index, 1);
    }
  });
}

document
  .querySelector(".booksContainer")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("readStatus")) {
      let readStatusButton = event.target;
      if (readStatusButton.textContent === "Read") {
        readStatusButton.textContent = "Not Read";
        readStatusButton.style.backgroundColor = "red";
      } else {
        readStatusButton.textContent = "Read";
        readStatusButton.style.backgroundColor = "green";
      }
    }
  });
