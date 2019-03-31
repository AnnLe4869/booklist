// Remove book
let list = document.querySelector(`#book-list ul`);
list.addEventListener(`click`, function(e) {
  if (e.target.className === `delete`) {
    list.removeChild(e.target.parentNode);
  }
});

// Add new book
let addForm = document.forms[`add-book`];
addForm.addEventListener(`submit`, function(e) {
  e.preventDefault();
  let formValue = this.querySelector(`input[type='text']`).value;
  addELement(formValue);
  this.reset();

  // Add new element
  function addELement(content) {
    let newElement = document.querySelector(`li`).cloneNode(true);
    newElement.firstElementChild.textContent = content;
    list.appendChild(newElement);
  }
});

// Hide book
let hideBox = document.querySelector(`input[type='checkbox']`);
hideBox.addEventListener("change", function(e) {
  if (this.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

// Custom search
let searchBar = document.querySelector(`#search-books`).querySelector(`input`);
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

// Tabs
// Toggle content when click event is triggered
// Using dataset to get more use from element
let tabs = document.querySelector(`.tabs`);
let panels = document.querySelectorAll(`.panel`);
tabs.addEventListener(`click`, function(e) {
  if (e.target.tagName == "LI") {
    let targetPanel = document.querySelector(e.target.dataset.target);
    console.log(targetPanel);
    [...panels].forEach(panel => {
      console.log(panel);
      if (panel == targetPanel) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }
});
