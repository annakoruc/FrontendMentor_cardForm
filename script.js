"use strict";

const userData = document.querySelector(".user-data");
const thanks = document.querySelector(".thanks");
const cardUser = document.querySelector(".card-user");
const cardNum = document.querySelector(".card-num");
const cardMonth = document.querySelector(".card-month");
const cardYear = document.querySelector(".card-year");
const cardCvc = document.querySelector(".card-cvc");
const errorNum = document.querySelector(".error-num");
const errorDate = document.querySelector(".error-date");
const errorCvc = document.querySelector(".error-cvc");

const errorStyle = "solid 2px hsl(0, 100%, 66%)";

document.querySelector(".confirm").addEventListener("click", () => {
  const num = Number(cardNum.value);
  const month = Number(cardMonth.value);
  const year = Number(cardYear.value);
  const cvc = Number(cardCvc.value);

  if (!num || typeof num !== "number" || num.toString().length !== 16) {
    cardNum.style.border = errorStyle;
    errorNum.style.display = "inline";
  }
  if (!month || typeof month !== "number" || month.toString().length !== 2) {
    cardMonth.style.border = errorStyle;
    errorDate.style.display = "inline";
  }
  if (!year || typeof year !== "number" || year.toString().length !== 2) {
    cardYear.style.border = errorStyle;
    errorDate.style.display = "inline";
  }
  if (!cvc || typeof cvc !== "number" || cvc.toString().length !== 3) {
    cardCvc.style.border = errorStyle;
    errorCvc.style.display = "inline";
  } else {
    userData.style.display = "none";
    thanks.style.display = "inline";
  }
});

document.querySelector(".continue").addEventListener("click", () => {
  userData.style.display = "inline";
  thanks.style.display = "none";
  cardUser.value = "";
  cardNum.value = "";
  cardMonth.value = "";
  cardYear.value = "";
  cardCvc.value = "";
});
