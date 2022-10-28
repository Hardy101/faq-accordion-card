"use strict";
const body = document.querySelector('body')
const card = document.querySelector('.card')
const question_div = document.querySelectorAll(".acc-div");
const answer = document.querySelectorAll(".acc-ans");
const toggle_div = document.querySelector(".toggle");
const toggle_btn = document.querySelector(".t-btn");
const btn_change = document.querySelector(".fa-sun");

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

toggle_btn.addEventListener("click", () => {
  if (btn_change.classList.contains("fa-sun")) {
    btn_change.classList.remove("fa-sun");
    btn_change.classList.add("fa-moon");
  } else {
    btn_change.classList.remove("fa-moon");
    btn_change.classList.add("fa-sun");
  }
  toggle_btn.classList.toggle("move");
  body.classList.toggle('change')
  card.classList.toggle('change')
});
