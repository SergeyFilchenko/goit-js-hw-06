const randomColor = document.querySelector(".color");
const bodyTarg = document.querySelector("body");
const  changeBtn = document.querySelector(".change-color");

changeBtn.addEventListener("click", getRandomHexColor);

function getRandomHexColor(event) {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  bodyTarg.style.backgroundColor = color;
  randomColor.textContent = `Текущий цвет: ${color}`;

}
 