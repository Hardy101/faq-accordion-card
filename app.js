"use strict";
const question_div = document.querySelectorAll(".acc-div");
const answer = document.querySelectorAll(".acc-ans");

question_div.forEach((div) => {
  div.addEventListener("click", () => {
    // div.classList.remove("active");
    if (!div.classList.contains("active")) {
      const question = document.querySelectorAll(".active");
      question.forEach((activeQuestion) => {
        activeQuestion.classList.remove("active");
      });
      div.classList.add("active");
    } else if (div.classList.contains("active")) {
      div.classList.remove("active");
    }
  });
});
