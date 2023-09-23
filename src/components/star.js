const starContainer = document.querySelector('.product__star');
import star from '../images/stars.svg';

// функция создания экземпляра элемента DOM из template
function createCard(index) {
  const template = document.querySelector("#element").content;
  const card = template.querySelector('.element').cloneNode(true);
  const image = card.querySelector('.img');
  image.src = star;
  image.alt = 'Иконка';
  card.classList.add("element__imageStar");
  card.id = index;
  return card;
};

//Функция добавления новой карточки в DOM
function addStars() {
    [0,1,2,3,4].forEach((index) => {
        const newCard = createCard(index);
        starContainer.append(newCard);
    })
}

export {addStars};