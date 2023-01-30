const label = document.querySelector(".js-buzz-label");
const checkbox = document.querySelector(".js-checkbox");
const buzz = document.querySelector(".js-buzz");
const hidingBuzz = document.querySelector(".js-hiding-buzz")
export function removeFakeBtn() {
  label.remove();
  checkbox.remove();
}

export function addBtn() {
  const closeBtnEl = document.createElement("button");
  closeBtnEl.classList.add("close-btn", "header-buzz__btn");
  closeBtnEl.addEventListener("click", () => {
    hidingBuzz.classList.add("header-buzz_hide")
  });
  buzz.appendChild(closeBtnEl);
}