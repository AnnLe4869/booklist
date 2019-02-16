// A question here: why we still can modify the read-only value?
let na = document.querySelector(`li`);
na.firstElementChild.outerHTML = `<span class='name'>We are the world</span>`;
na.lastElementChild.textContent = `This is the world class`;
console.log(na.innerHTML);
console.log(na.parentNode);
na.parentNode.innerHTML += `
                <li>
                    <span class="name">Name of the Wind</span>
                    <span class="delete">delete</span>
                </li>

`;
