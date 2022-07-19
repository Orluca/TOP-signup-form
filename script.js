const btnSubmit = document.querySelector(".submit-button");

const inputFirstName = document.querySelector("#first-name");
const inputLastName = document.querySelector("#last-name");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone-number");
const inputPassword = document.querySelector("#password");
const inputPasswordConfirm = document.querySelector("#confirm-password");
const form = document.querySelector(".form-inputs-container");

function makeInvalid(element, errorMsg) {
  element.style.border = "2px solid red";
  errorMsg.classList.remove("hidden");
}

function makeValid(element, errorMsg) {
  element.style.border = "2px solid greenyellow";
  errorMsg.classList.add("hidden");
}

function checkNames(element) {
  const errorMsg = element.closest("div").querySelector("p");
  if (element.value.length < 2) makeInvalid(element, errorMsg);
  else makeValid(element, errorMsg);
}

function checkEmail(element) {
  const errorMsg = element.closest("div").querySelector("p");
  if (!element.value.includes("@")) makeInvalid(element, errorMsg);
  else makeValid(element, errorMsg);
}

function checkPhone(element) {
  const errorMsg = element.closest("div").querySelector("p");
  if (element.value.length === 0) return;
  if (element.value.length < 4) makeInvalid(element, errorMsg);
  else makeValid(element, errorMsg);
}

function checkPassword(element) {
  const errorMsg = element.closest("div").querySelector("p");
  if (element.value.length < 8) makeInvalid(element, errorMsg);
  else makeValid(element, errorMsg);
}

function checkPasswordConfirm(element) {
  const errorMsg = element.closest("div").querySelector("p");
  if (element.value !== inputPassword.value || !inputPassword.value) makeInvalid(element, errorMsg);
  else makeValid(element, errorMsg);
}

function checkAllInputs() {
  checkNames(inputFirstName);
  checkNames(inputLastName);
  checkEmail(inputEmail);
  checkPhone(inputPhone);
  checkPassword(inputPassword);
  checkPasswordConfirm(inputPasswordConfirm);
}

btnSubmit.addEventListener("click", checkAllInputs);

form.addEventListener("keypress", function (e) {
  if (e.key !== "Enter") return;
  checkAllInputs();
});
