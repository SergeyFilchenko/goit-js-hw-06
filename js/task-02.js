const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];



const ingredientsUL = document.querySelector("ul");
console.log(ingredientsUL);

for (const ingredient of ingredients) {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  ingredientItem.textContent =ingredient;
  console.log(ingredientItem);
  ingredientsUL.appendChild(ingredientItem, ingredientsUL.firstElementChild)
}

