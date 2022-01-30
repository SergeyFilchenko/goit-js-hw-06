
let counterValue = 0;
const counter = document.querySelector("#counter");
const value = document.querySelector("#value");

const decrement = counter.querySelector('[data-action = "decrement"]');
const increment = counter.querySelector('[data-action = "increment"]');

const mouseClick = decrement.addEventListener("click", ()=>{
    counterValue -=1;
    console.log("button decrement was clicked", counterValue);
    value.textContent = counterValue;
    decrement.style.borderRadius = '50%';
})

const mouseClickI = increment.addEventListener("click", () =>{
    counterValue +=1;
    console.log("button increment was clicked", counterValue);
    value.textContent = counterValue;
    increment.style.borderRadius = '50%';
   
})



