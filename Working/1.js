//** Change color for delete button */

let deleteButton = document.querySelectorAll(`.delete`);
deleteButton = [...deleteButton];
deleteButton.forEach(ele => {
  ele.addEventListener(`click`, changeColor);
});
//** How to add class or attribute for an element */
function changeColor(e) {
  e.target.classList.add(`btn`);
  e.target.classList.add(`btn-outline-primary`);
}
