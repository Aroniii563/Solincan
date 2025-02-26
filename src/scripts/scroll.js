window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled"); // Agrega la clase cuando se hace scroll
  } else {
    header.classList.remove("scrolled"); // La quita cuando vuelve arriba
  }
});