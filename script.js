const ratingPoints = document.querySelectorAll("[data-rating-point]");
const steps = [...document.querySelectorAll(".card")];
let score = 0;
const btns = document.querySelectorAll(".btn");

for (let btn of btns) {
  btn.addEventListener("click", function () {
    if (score === 0) {
      alert("Please add a rating");
    } else {
      steps[0].classList.toggle("active");
      steps[1].classList.toggle("active");
    }
  });
}

const clickHandler = (e) => {
  for (let item of ratingPoints) {
    if (e.target.dataset.ratingPoint === item.innerHTML) {
      e.target.classList.add("rated");
      score = e.target.dataset.ratingPoint;
      document.querySelector(".rating-score").innerHTML = score;
    } else {
      item.classList.remove("rated");
    }
  }
};

for (let point of ratingPoints) {
  point.addEventListener("click", clickHandler);
}
