//** Check the difference between onclick and adEventListener */
document.querySelector(`#book-list h2`).onclick = changeContent;
let changeElement = document.getElementById("content");
changeElement.addEventListener(`click`, changeContent);
changeElement.onclick = changeContent;
//** Check the difference between content and content.target */
//** One is the event object for click event, the second one is the target element,
//   In other word, the element where the event fired
function changeContent(content) {
  content.target.textContent = `This is text change content`;
  console.log(content);
  console.log(content.target);
}
