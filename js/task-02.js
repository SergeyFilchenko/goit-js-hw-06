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

const ItemEl = (elements) => {
  return elements.map(element => {
    const ingredientItem = document.createElement("li");
    ingredientItem.classList.add("item");
    ingredientItem.textContent = element;
    return ingredientItem;
  });
};
const ingredientItemsEl = ItemEl(ingredients);
ingredientsUL.append(...ingredientItemsEl);

