const hamburger = document.querySelector(".hamburger");
const secondNav = document.querySelector(".second-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");

  secondNav.style.display =
    secondNav.style.display === "block" ? "none" : "block";
});

const search = document.getElementById("search");
const inputSearch = document.querySelector(".inputSearch");
const x = document.querySelector(".close");

search.addEventListener("click", () => {
  inputSearch.style.display = "block";
});

x.addEventListener("click", () => {
  inputSearch.style.display = inputSearch.style.display === "block" ? "none" : "block"
})
