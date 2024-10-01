import "./styles.css";

// object of menu items, each category will contain 3-5 items
const shopItems = {
  appetizers: [{ name: "orange", price: 0.5 }],
  entrees: [
    { name: "orange chicken", price: 6.75 },
    { name: "orange pumpkin soup cup", price: 3.99 },
    { name: "Carrot and Ginger Stir-Fry", price: 14.49 },
  ],
  desserts: [
    { name: "mango and orange rice", price: 4.5 },
    { name: "pumpkin pie", price: 5.4 },
    { name: "sweet potato pie", price: 7.3 },
  ],
};

// Creating a menu item form from the dom
const contactEl = document.querySelector("#contact-container");
contactEl.style.backgroundColor = "var(--contact-bg)";

// Create a chart of selectable pictures

const submitBtn = document.getElementById("submit-btn");
