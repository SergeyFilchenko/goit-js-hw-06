
const categories = document.querySelector("#categories");
console.log(categories);

const menuItems = categories.querySelectorAll(".item");
console.log("Number of categories:", menuItems.length);

for( const menuItem of menuItems){
  const title = menuItem.querySelector("h2");
  console.log("Category:", title.textContent);

  const element = menuItem.querySelectorAll("li");
  console.log("Elements:", element.length);
}