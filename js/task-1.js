const categories = document.querySelectorAll("#categories .item");

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const items = category.querySelectorAll("ul li");

  console.log("Category:", categoryName);
  console.log("Number of categories:", items.length);
});
