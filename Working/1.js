// This part is used to delete content
let list = document.querySelector(`#book-list ul`);
list.addEventListener(`click`, function(e) {
  if (e.target.className === `delete`) {
    list.removeChild(e.target.parentNode);
  }
});

// This part is used to add new content
let addForm = document.forms[`add-book`];
addForm.addEventListener(`submit`, function(e) {
  // Default of submit is to reload the page, so without it the page will go back
  // to stage before we input in ====> Necessary
  e.preventDefault();
  let formValue = this.querySelector(`input`).value;
  addELement(formValue);
  //Use this to clean the text field
  this.reset();
});

// Need boolean value for cloneNode()
function addELement(content) {
  let newElement = document.querySelector(`li`).cloneNode(true);
  newElement.firstElementChild.textContent = content;
  list.appendChild(newElement);
}
