let liTag = document.querySelector(`li`).cloneNode(true);
liTag.firstElementChild.textContent = `This is the book`;
document.querySelector(`ul`).appendChild(liTag);
