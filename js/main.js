const themeToggle = document.querySelector("#theme-toggle");
const luasol = document.querySelector("#sol");
const container = document.querySelector(".containerCalculadora");
const body = document.querySelector("body");

themeToggle.addEventListener("click", () => {
  luasol.classList.toggle("bi-sun-fill");
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
  container.classList.toggle("dark");
});

