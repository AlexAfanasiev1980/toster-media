const preview = document.querySelector(".prewiev");
const slider = document.querySelector(".slider__container");
import black from "../images/cards_1.png";
import orange from "../images/cards_2.png";
import pink from "../images/cards_3.png";
import yellow from "../images/cards_4.png";

const cards = [black, orange, pink, yellow];

// функция создания экземпляра элемента DOM из template
function createCard(img, index) {
  const style = `transform: translateX(${index * -390}px)`;
  const template = document.querySelector("#element").content;
  const card = template.querySelector(".element").cloneNode(true);
  const image = card.querySelector(".img");
  image.src = img;
  image.alt = "Фото";
  card.id = index;
  card.classList.add("element__card");
  image.classList.add("element__image");
  if (index === 0) {
    card.setAttribute("style",`opacity: ${0.5}`);
  }
  
  card.addEventListener("click", () => {
    slider.setAttribute("style", style);
    preview.childNodes.forEach((card) => {
        card.setAttribute("style",`opacity: ${1}`);
    })
    card.setAttribute("style",`opacity: ${0.5}`);
  });
  return card;
}

//Функция добавления новой карточки в DOM
function addCardPreview() {
  cards.forEach((img, index) => {
    const newCard = createCard(img, index);
    preview.append(newCard);
  });
}

export { addCardPreview };
