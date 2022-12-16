// 1 Interactie voor frontend: Vibrate - click

let frontend = document.querySelector("a:nth-of-type(1)");
frontend.addEventListener("click", vibrateHandler);
frontend.addEventListener("animationend", vibrateHandler);
function vibrateHandler() {
  frontend.classList.toggle("vibrate");
}

// 2 Interactie voor design:  Jelly - click

let design = document.querySelector("a:nth-of-type(2)");
design.addEventListener("click", jellyHandler);
design.addEventListener("animationend", jellyHandler);
function jellyHandler() {
  design.classList.toggle("jelly");
}

// 3 Interactie voor And :  Flip - click

let and = document.querySelector("a:nth-of-type(3)");
and.addEventListener("click", flipHandler);
and.addEventListener("animationend", flipHandler);
function flipHandler() {
  and.classList.toggle("flip-1");
}

// 4 Interactie voor Development: pulse - click

let development = document.querySelector("a:nth-of-type(4)");
development.addEventListener("click", pulseHandler);
development.addEventListener("animationend", pulseHandler);
function pulseHandler() {
  development.classList.toggle("pulse");
}

// 5 Interactie voor Sprint 5:

// 6 Interactie voor Fix:

// 7  Interactie voor The:

// 8 Interactie voor Flow:

// 9 Interactie voor User:

// 10 Interactie voor Interface:

// 11 Interactie voor Events:

// 12 Interactie voor Interaction: Bounce - click

let interaction = document.querySelector("a:nth-of-type(12)");
interaction.addEventListener("click", bounceHandler);
interaction.addEventListener("animationend", bounceHandler);
function bounceHandler() {
  interaction.classList.toggle("bounce");
}