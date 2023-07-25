
elForm = document.querySelector(".currency__form");
elInput = document.querySelector(".currency__input");
elSelect = document.querySelector(".currency__select");
elOption = document.querySelector(".currency__option");
elContent = document.querySelector(".text");
elBtn = document.querySelector(".currency__button");



elForm.addEventListener("submit", function (evt) {

  evt.preventDefault();

  let totalCash = Number(elInput.value) * Number(elSelect.value);
  elContent.textContent = `Your money is in Uzbek soums: ${totalCash}`;
});