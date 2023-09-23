import "./styles.css";
const contentColor = ['Black', 'Orange', 'Pink', 'Yellow'];
const contentSize = [2, 3, 4, 5];
const dropdownColor = document.querySelector('.product__dropdownColor');
const dropdownSize = document.querySelector('.product__dropdownSize');
let timer = 24 * 3600 * 1000;

function currentTime() {
    timer = timer - 1000;
    var date = new Date(timer);
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.querySelector(".image__timer").innerText = hour + ":" + min + ":" + sec; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000); /* настраиваем таймер */
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime();
  addCard();
  addCardPreview();
  addStars();
  addDropDown(contentColor, dropdownColor);
  addDropDown(contentSize, dropdownSize);

  import { addCard } from "./components/card";
  import { addCardPreview } from "./components/preview";
  import { addStars } from "./components/star";
  import { addDropDown } from "./components/dropdown";