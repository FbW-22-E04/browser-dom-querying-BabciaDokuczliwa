const body = document.querySelector(`body`);
console.log(body);
body.style.fontFamily = "Arial";

document.querySelector(`h1`).style.textAlign = "center";

const category = document.getElementsByClassName("category");

for (let i = 0; i < category.length; i++) {
  category[i].style.color = "red";
  category[i].style.fontStyle = "italic";
}

function colorGenerator() {
  const alpha = Math.floor(Math.random() * 255);
  const beta = Math.floor(Math.random() * 255);
  const gamma = Math.floor(Math.random() * 255);
  const opacity = Math.random().toFixed(2);
  return `rgba(${alpha}, ${beta}, ${gamma}, ${opacity})`;
}

const mediaQuery = window.matchMedia("(max-width: 768px)");

const foodCategory = document.querySelectorAll(".food-category");
foodCategory.forEach((item) => {
  item.style.background = colorGenerator();
  item.style.display = "flex";
  item.style.justifyContent = "space-between";
  item.style.width = "70%";
  item.style.paddingRight = "16px";
  if (mediaQuery.matches) {
    item.style.flexDirection = "column";
  }
});

let warning = document.getElementById("warning");
warning.style.fontSize = "x-large";
warning.style.fontFamily = "verdana";

let evenElements = document.querySelectorAll(".allergy-info:nth-child(even)");
console.log(evenElements);
evenElements.forEach((item) => {
  item.style.color = "blue";
});

let food = document.querySelectorAll(".food-desc");

food.forEach((item) => {
  item.style.background = colorGenerator();
  item.style.borderRadius = "40%";
  item.style.width = "10%";
  item.style.height = "50px";
  item.style.textAlign = "center";
});
let footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.flexDirection = "";
footer.style.width = "100%";
