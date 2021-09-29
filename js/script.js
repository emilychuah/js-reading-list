const form = document.querySelector("form");
const button = document.querySelector(".add-book");
const tableBody = document.querySelector(".table-body");
const error = document.querySelector(".error");

// Factory function
const addBook = function (title, author, pages) {
  const book = {
    title: title,
    author: author,
    pages: pages
  };
  return book;
};

const myBooks = [];

button.addEventListener("click", function (e) {
  // Grab form info
  e.preventDefault(); //The preventDefault() method is used to prevent the browser from executing the default action of the selected element. In this case, it prevents the page from reloading after clicking the button.

  const inputs = form.elements; //The elements collection returns all elements inside the <form> element, not all <form> elements in the document.
  const titleValue = inputs["title"].value; //Get the value of the element with "title" in the form.
  const authorValue = inputs["author"].value; //Get the value of the element with "author" in the form.
  const pagesValue = inputs["pages"].value; //Get the value of the element with "pages" in the form.
  if (
    titleValue.length === 0 || //The logical OR (||) operator (logical disjunction) for a set of operands is true if and only if one or more of its operands is true.
    authorValue.length === 0 || //This logical OR (||) operator checks if there is nothing is populated in the input fields for either title, author or pages, an error will appear.
    pagesValue.length === 0
  ) {
    error.innerText = "Please fill all fields.";
    return; //This "return" keyword is to stop the function from running downwards and ensure that the error message will appear if the conditions above are satisfied.
  }

  // Create new book object
  const book = addBook(titleValue, authorValue, pagesValue);
  // add to 'myBooks' array
  myBooks.push(book);

  // Render to DOM
  addToTable();

  // Clear form
  clearForm();
});

const addToTable = function () {
  const tr = document.createElement("tr"); //The <tr> tag defines a row in an HTML table.
  for (let book of myBooks) {
    //Use for...of loop here instead of for...in loop in order to loop through multiple objects in an array. Use for...in loop to loop through object properties instead.
    //console.log(book.title); //This line of code is just to check if "book.title" is working. Thus, I've commented it out.
    const rowContents = `<td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td>`; //The <td> tag defines a standard data cell in an HTML table.
    tr.innerHTML = rowContents;
    tableBody.append(tr);
  }
};

const clearForm = function () {
  form.reset(); //The reset() method resets the values of all elements in a form (same as clicking the Reset button).
  error.innerText = "";
};
