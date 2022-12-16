let interaction = document.querySelector("a:nth-of-type(12)");
interaction.addEventListener("click", jumpHandler);
interaction.addEventListener("animationend", jumpHandler);
function jumpHandler() {
  interaction.classList.toggle("jump");
}

let frontend = document.querySelector("a:nth-of-type(1)");
frontend.addEventListener("click", vibrateHandler);
frontend.addEventListener("animationend", vibrateHandler);
function vibrateHandler() {
  frontend.classList.toggle("vibrate");
}
