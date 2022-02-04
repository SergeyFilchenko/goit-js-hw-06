const text = document.querySelector('#text');
const fSControl = document.querySelector('#font-size-control');

text.style.fontSize = fSControl.value + "px";

fSControl.oninput = function () {
    text.style.fontSize = fSControl.value + "px";
  };



