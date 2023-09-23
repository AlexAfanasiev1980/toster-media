const slider = document.querySelector('.slider__container');
import black from '../images/cards_1.png';
import orange from '../images/cards_2.png';
import pink from '../images/cards_3.png';
import yellow from '../images/cards_4.png';

const cards = [black, orange, pink, yellow];

// функция создания экземпляра элемента DOM из template
function createCard(img, index) {
  const template = document.querySelector("#element").content;
  const card = template.querySelector('.element').cloneNode(true);
  const image = card.querySelector('.img');
  image.src = img;
  image.alt = 'Фото';
  card.id = index;
  return card;
};

//Функция добавления новой карточки в DOM
function addCard() {
    cards.forEach((img, index) => {
        const newCard = createCard(img, index);
        slider.append(newCard);
    })
}

export {addCard};
