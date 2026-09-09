let input = document.querySelector(".input");
let ul = document.querySelector(".ul");
let total = document.querySelector(".total");
let empty = document.querySelector(".empty");
let list = [];

function mainn(event) {
  event.preventDefault();

  if (input.value.trim() === "") {
    empty.innerHTML = "Type something before add";
    show();
    return;
  }
  list.push(input.value.trim());
  empty.innerHTML = "";
  input.value = "";
  show();
}
function show() {
  ul.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    ul.innerHTML += ` <li> ${list[i]} <button onclick = "remove(${i})"> ❌ </button> </li>  `;
  }

  count = list.length;
  total.innerHTML = "total " + count;
}
function remove(index) {
  list.splice(index, 1);
  show();
}
function deleteAll() {
  list = [];

  show();
}
