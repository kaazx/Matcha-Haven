const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
}));

//Array JS code
const matchaFinds = ["Matcha Latte", "Matcha Salt", "Matcha Face Mask"];
console.log("Available Matcha Recipes & DIY:", matchaFinds.join(", "))

//Loop JS code
for (let i = 0; i < matchaFinds.length; i++) {
  console.log("Item " + (i + 1) + ": " + matchaFinds[i]);
}

//Condition JS code
const userFave = "Matcha Latte";
if (matchaFinds.includes(userFave)) {
  console.log(`You chose ${userFave} — excellent choice!`);} 
else {
  console.log("That type isn't on our list.");}