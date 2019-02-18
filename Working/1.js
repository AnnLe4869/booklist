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
  console.log(formValue);
  addELement(formValue);
});

function addELement(content) {
  let newElement = document.querySelector(`li`).cloneNode();
  newElement.firstElementChild.textContent = content;
  list.appendChild(newElement);
}
