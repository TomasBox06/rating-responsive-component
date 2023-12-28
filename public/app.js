let numberContainer = document.querySelector(".rating-state__number-container");
let rateNumber = document.querySelector(".thanks-state__result--number");
let submitButton = document.querySelector(".rating-state__submit");
let ratingState = document.querySelector(".rating-state");
let thanksState = document.querySelector(".thanks-state");

numberContainer.addEventListener("click", (e) => {
  let ratingSelected = e.target.innerText;
  rateNumber.innerText = ratingSelected;
  if (
    e.target.innerText == 1 ||
    e.target.innerText == 2 ||
    e.target.innerText == 3 ||
    e.target.innerText == 4 ||
    e.target.innerText == 5
  ) {
    submitButton.addEventListener("click", () => {
      ratingState.style.display = "none";
      thanksState.style.display = "flex";
    });
  }
});
