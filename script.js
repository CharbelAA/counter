let count = 0;
let btnIncrease = document.querySelector(".increase");
let btnReset = document.querySelector(".reset");
let btnDecrease = document.querySelector(".decrease");
let countDisplay = document.querySelector(".count");

btnIncrease.addEventListener("click", () => {
  count++;
  countDisplay.innerHTML = count;
  setCountColor();
});

btnDecrease.addEventListener("click", () => {
  count--;
  countDisplay.innerHTML = count;
  setCountColor();
});

btnReset.addEventListener("click", () => {
  count = 0;
  countDisplay.innerHTML = count;
  setCountColor();
});

function setCountColor() {
  if (count === 0) {
    countDisplay.style.color = "orange";
  } else if (count > 0) {
    countDisplay.style.color = "green";
  } else {
    countDisplay.style.color = "red";
  }
}
