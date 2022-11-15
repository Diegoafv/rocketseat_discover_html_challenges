const button = document.getElementById("button");
const originalColor = button.style.backgroundColor;

function changeButtonBackgroundColor() {
  button.style.backgroundColor = "#A020F0";
  console.log("ITs HERE");
}

function revertButtonBackgroundColor() {
  button.style.backgroundColor = originalColor;
  console.log("ITs HERE AGAIN");
}
