const mainUl = document.querySelector("#categories");
const elLi = document.querySelectorAll(".item");
console.log(`Number of categories: ${mainUl.children.length}`);
elLi.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elCount = item.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Element: ${elCount}`);
});
