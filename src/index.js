function newTheme() {
  let body = document.querySelector("body");
  //body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

let darkTheme = document.querySelector(".darkTheme");
darkTheme.addEventListener("click", newTheme);
