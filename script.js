
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "lightblue";
  } else {
    header.style.backgroundColor = "transparent";
  }
});