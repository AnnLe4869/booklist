// Modify class with classList and DOMTokenList method
let el = document.querySelector(`button`);
let elClass = el.classList;
console.log(elClass);
elClass.add("btn", "btn-danger");
console.log(elClass);
elClass.replace("btn-danger", "btn-info");
