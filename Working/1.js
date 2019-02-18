let list = document.querySelector(`#book-list ul`);
list.addEventListener(`click`, function(e) {
  if (e.target.className === `delete`) {
    list.removeChild(e.target.parentNode);
  }
});

let addForm = document.forms[`add-book`];
addForm.addEventListener(`submit`, function(e) {
  e.preventDefault();
  let formValue = this.querySelector(`input`).value;
  addELement(formValue);
  this.reset();
});

function addELement(content) {
  let newElement = document.querySelector(`li`).cloneNode(true);
  newElement.firstElementChild.textContent = content;
  list.appendChild(newElement);
}

// Hide book
// Here we use change event
let hideBox = document.querySelector(`input[type='checkbox']`);
hideBox.addEventListener("change", function(e) {
  if (this.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});
