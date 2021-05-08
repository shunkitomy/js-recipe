const figure = document.getElementById("figure")

figure.onclick = function() {
  if (figure.classList.contains("square")) {
    figure.classList.add("rounded")
  }
  if (figure.classList.contains("rounded")) {
    figure.classList.remove("rounded")
    figure.classList.add("triangle")
  }
  if (figure.classList.contains("triangle")) {
    figure.classList.remove("triangle")
    figure.classList.add("square")
  }
}
