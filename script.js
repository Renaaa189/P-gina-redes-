
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "lightblue";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

const botones = document.querySelectorAll(".card button");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    if (boton.textContent === "Ver más") {
      boton.textContent = "Ver menos";
    } else {
      boton.textContent = "Ver más";
    }
  });
});
