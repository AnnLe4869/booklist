// Remove parent element when click the button
// Event object always be passed to the fucntion listener as argument
let deleteButton = document.querySelectorAll(`.delete`);
[...deleteButton].forEach(ele => {
  ele.addEventListener(`click`, deleteElement);
});
function deleteElement(ele) {
  ele.target.parentNode.remove();
}
