const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

yesButton.addEventListener("click", () => {
  alert("I love you! ❤️");
});

noButton.addEventListener("click", () => {
  noButton.style.position = "absolute";
  noButton.style.top = Math.random() * window.innerHeight + "px";
  noButton.style.left = Math.random() * window.innerWidth + "px";
});
