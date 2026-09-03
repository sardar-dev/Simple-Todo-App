let input = document.querySelector(".inp"); //selecting input
let ul = document.querySelector("ul"); //selecting ul

function todo(event) {
  event.preventDefault(); //stop from reloading

  let value = input.value; //getting value from input
}

let list = [
  "recite quran",
  "go to library ",
  "read book",
  "make to-do app",
  "duolingo",
  "css practice",
];

for (let i = 0; i < list.length; i++) {
  //for loop
  ul.innerHTML += `<li><input type="checkbox" /> ${list[i]}</li>`;
}
