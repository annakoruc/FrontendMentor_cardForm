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

const imgNum = document.querySelector(".img-number");
const imgName = document.querySelector(".img-name");
const imgDate = document.querySelector(".img-date");
const imgCvc = document.querySelector(".img-cvc");

const errorStyle = "solid 1px hsl(0, 100%, 66%)";

let spaceAfterFour = (s) => {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
};

let spaceInInput = (e) => {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
};

document.querySelector(".confirm").addEventListener("click", () => {
  cardNum.addEventListener("input", spaceInInput);
  const num = Number(cardNum.value.replace(/\s/g, ""));
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
    thanks.style.display = "flex";
    imgNum.textContent = spaceAfterFour(num);
    imgName.textContent = cardUser.value;
    imgDate.textContent = `${month}/${year}`;
    imgCvc.textContent = cardCvc.value;
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

  imgNum.textContent = "0000 0000 0000 0000";
  imgName.textContent = "Jane Appleseed";
  imgDate.textContent = "00/00";
  imgCvc.textContent = "000";
});
