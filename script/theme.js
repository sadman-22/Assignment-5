let themeButton = document.getElementById("change-theme");
themeButton.addEventListener("click", function () {
  const body = document.body;
  let randomColor = `#${Math.floor(Math.random() * 12345678).toString(
    16
  )}`;
  body.style.backgroundColor = randomColor;
});