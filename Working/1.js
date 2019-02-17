function appendElement(spanContent) {
  document.querySelector(`ul`).appendChild(document.createElement(`li`));
  document
    .querySelector(`ul`)
    .lastElementChild.appendChild(createElement(`span`, spanContent, `name`));
  document
    .querySelector(`ul`)
    .lastElementChild.appendChild(createElement(`span`, `Delete`, `delete`));
}

// Need a return value to pass as first parameter for appendChild() method
function createElement(tag, content, className) {
  let tagName = document.createElement(tag);
  let elementContent = document.createTextNode(content);
  tagName.appendChild(elementContent);
  tagName.className = className;
  return tagName;
}
appendElement("Hello the world");
