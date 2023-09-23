// функция создания экземпляра элемента DOM из template
function createCard(content) {
  const template = document.querySelector("#element_dropdown").content;
  const dropdown = template.querySelector(".dropdown").cloneNode(true);
  const dropbtn = dropdown.querySelector(".dropbtn");
  const text = dropdown.querySelector(".dropbtn__text");
  const list = dropdown.querySelector("#myDropdown");
  const image = dropdown.querySelector(".dropdown_image");
  let dropOpen = false;
  text.textContent = content[0];
  image.setAttribute("style", "transform: rotate(0deg)");
  list.setAttribute("style", "display: none");
  dropbtn.addEventListener("click", () => {
    list.setAttribute("style", "display: flex");
    if (dropOpen) {
      image.setAttribute("style", "transform: rotate(0deg)");
      list.setAttribute("style", "display: none");
      dropOpen = false;
    } else {
      image.setAttribute("style", "transform: rotate(180deg)");
      list.setAttribute("style", "display: flex");
      dropOpen = true;
    }
  });
  content.forEach((item) => {
    const btn = document.createElement("button");
    btn.textContent = item;
    btn.classList.add("dropdown__btn");
    btn.addEventListener("click", () => {
      text.textContent = item;
      list.setAttribute("style", "display: none");
      image.setAttribute("style", "transform: rotate(0deg)");
    });

    list.append(btn);
  });
  return dropdown;
}

//Функция добавления новой карточки в DOM
function addDropDown(content, domElement) {
  const newCard = createCard(content);
  console.log(newCard);
  domElement.append(newCard);
}

export { addDropDown };
