
let input = document.querySelector(".input");
let ul = document.querySelector(".ul");
let total = document.querySelector(".total");
let empty = document.querySelector(".empty");
let list = JSON.parse(localStorage.getItem("list")) || [];

show()

function mainn(event) {
  event.preventDefault();

  if (input.value.trim() === "") {
    empty.innerHTML = "Type something before add";
    show();
    return;
  }
  list.push(input.value.trim());
  localStorage.setItem("list", JSON.stringify(list));
  empty.innerHTML = "";
  input.value = "";
  show();
}
function show() {
  ul.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    ul.innerHTML += ` <li> <input type="checkbox"> ${list[i]}  <button onclick = "remove(${i})"> ❌ </button> </li>  `;
  }

  count = list.length;
  total.innerHTML = "total " + count;
}
function remove(index) {
  list.splice(index, 1);

  localStorage.setItem("list", JSON.stringify(list));
  show();
}
function deleteAll() {
  list = [];
  localStorage.setItem("list", JSON.stringify(list));
  show();
}
