
const categories = document.querySelector("#categories");
console.log(categories);

const menuItems = categories.querySelectorAll(".item");
console.log("Количество категорий:", menuItems.length);

for( const menuItem of menuItems){
  const title = menuItem.querySelector("h2");
  console.log("Категория:", title.textContent);

  const element = menuItem.querySelectorAll("li");
  console.log("Количество елементов:", element.length);
}