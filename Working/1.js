let list = document.querySelector(`#book-list ul`);
list.addEventListener(`click`, function(e) {
  if (e.target.className === `delete`) {
    list.removeChild(e.target.parentNode);
  }
});

let addForm = document.forms[`add-book`];
addForm.addEventListener(`submit`, function(e) {
  e.preventDefault();
  let formValue = this.querySelector(`input[type='text']`).value;
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

// Custom search
// We search for book in list
// Pay attention to how to use 'input' event
let searchBar = document.querySelector(`#search-books`).querySelector(`input`);
// Can use either 'input' event or 'keyup' event
// Need to lowercase to make searching easier
searchBar.addEventListener("keyup", function(event) {
  [...list.children].forEach(ele => {
    if (
      ele.firstElementChild.textContent
        .toLowerCase()
        .indexOf(this.value.toLowerCase()) === -1
    ) {
      ele.style.display = "none";
    } else {
      ele.style.display = "block";
    }
  });
});
