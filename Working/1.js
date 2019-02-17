// Use bubbling to handle event
// Event will bubble up to the ancestor, trigger the ancestor handler
// Key point: choose the ancestor and choose the element in which event happen
// Make Javascript run faster and more efficent than assign event handler for each element
// Take note on the difference between event.target and event.currentTarget
let list = document.querySelector(`#book-list ul`);
list.addEventListener("click", function(e) {
  if (e.target.className === "delete") {
    let li = e.target.parentElement;
    list.removeChild(li);
  }
});
