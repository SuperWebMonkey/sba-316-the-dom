import "./style.css";

// testing if the js file is connected
console.log("hello world");

// object of menu items, each category will contain 3-5 items
const shopItems = {
  appetizers: [
    { name: "orange", price: 0.5 },
    { name: "mandarin orange salse", price: 8.5 },
    { name: "orange goat cheese bruschetta", price: 9.45 },
  ],
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

// function for cart - adding the cart items, showing the cart items,

// using bom alerts to get the username

const submitBtn = document.getElementById("submit-btn");
