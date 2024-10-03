// import "./style.css";
"use strict";

// testing if the js file is connected
// console.log("hello world");

// object of menu items, each category will contain 3-5 items
const shopItems = {
  appetizers: [
    { name: "orange", price: 0.5 },
    { name: "mandarin orange salsa", price: 8.5 },
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

// Object containing the description of each food item
const descriptionAry = [
  "random description 1",
  "random description 2",
  "random description 3",
  "random description 4",
  "random description 5",
  "random description 5",
  "random description 7",
  "random description 8",
  "random description 9",
];

// Convert to an ary
const menuAry = Object.keys(shopItems).map((key) => ({
  key,
  value: shopItems[key],
}));

// console.log(menuAry);

// Get all the values of each object and put them into an array
const itemAry = [];
for (let i = 0; i < menuAry.length; i++) {
  const itemObj = menuAry[i];
  // console.log(itemObj);
  const objAry = itemObj.value;
  // Use the keys to iterate
  // console.log(objAry);
  for (let j = 0; j < objAry.length; j++) {
    itemAry.push(objAry[j]);
  }
}
// console.log(itemAry);

// for the document frag
const menuContainer = document.querySelector(".order-title");
const docFrag = document.createDocumentFragment();
const title = document.createElement("h1");
title.textContent = "Order Selection:";
const instruction = document.createElement("p");
instruction.textContent =
  "Select order to choose the item. Click the cart to finish ordering.";
docFrag.appendChild(title);
docFrag.appendChild(instruction);
menuContainer.prepend(docFrag);

// Create a chart of selectable pictures
const menuItem = document.getElementById("menu");
menuItem.style.width = "600px";
// console.log(menuItem);

// using bom alerts to get the username
const cartButton = document.querySelector(".cart");

// Getting the first a tag of the nav bar
const navbarEl = document.getElementById("navbar");
const shopTitle = navbarEl.firstElementChild;

// Get the submit button for the form
const helpForm = document.querySelector("#help-form");

// Keep track of ordered items
let orderedItems = {};

// Function to create the food grid in the html page
let totalPrice = 0;
let totalItems = 0;
function createItems(ary, ary2) {
  // may need to move it to global for the cart button function
  let i = 0;
  ary.forEach((foodItem) => {
    const foodBox = document.createElement("div");
    foodBox.className = "food-box";

    const foodName = document.createElement("h4");
    foodName.textContent = foodItem.name;

    const price = document.createElement("p");
    price.textContent = `$${foodItem.price}`;

    const button = document.createElement("button");
    button.textContent = "order";
    button.className = "order-button";

    // adding description
    const details = ary2[i];
    const pEl = document.createElement("p");
    pEl.textContent = details;
    i++;

    const foodImg = document.createElement("img");
    foodImg.className = "food-img";
    foodImg.setAttribute("src", "https://via.placeholder.com/50");
    foodImg.setAttribute("width", 150);
    foodImg.setAttribute("height", 70);

    foodBox.appendChild(foodImg);
    foodBox.appendChild(foodName);
    foodBox.appendChild(pEl);
    foodBox.appendChild(price);
    foodBox.appendChild(button);
    menuItem.appendChild(foodBox);

    // add event when the mouse is over the box
    foodBox.addEventListener("mouseover", (e) => {
      e.preventDefault();
      console.log("mouseover event happens");
    });

    // Pop-up appears when the button is clicked
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const isClicked = false;
      // Count the number of items by items
      let foodVal = foodItem.name;
      // console.log(`food name ${foodVal}`);
      if (orderedItems[foodVal]) {
        orderedItems[foodVal]++;
      } else {
        orderedItems[foodVal] = 1;
      }

      foodImg.setAttribute("style", "border-radius:0");
      foodName.setAttribute("style", "color: gold");

      totalPrice += Number(foodItem.price);
      totalItems++;
      // update the card count value in html
      cartCount();
      // Alert the total item count and price
      alert(
        `Total Items is ${totalItems} \ntotal price is ${roundNumber(
          totalPrice
        )}\n`
      );
    });
  });
}

// Need to add the cartButton
cartButton.addEventListener("click", (e) => {
  e.preventDefault();
  const cartItems = Object.entries(orderedItems)
    .map(([key, total]) => `${key}: ${total}`)
    .join("\n");

  if (cartItems) {
    let isConfirm = confirm(
      `Here's your order:\n${cartItems}\nClick ok to finish ordering`
    );
    if (isConfirm) {
      location.reload();
      alert("order has been complted.");
    }
    // resetCount();
  } else {
    alert(`No items ordered`);
  }
});

function roundNumber(num) {
  return Math.round(num * 100) / 100;
}

// mouseover event on the shop title to change it to all capitals
shopTitle.addEventListener("mouseover", (e) => {
  e.preventDefault();
  shopTitle.textContent = shopTitle.textContent.toUpperCase();
});

// mouseout event on the shop title to change back to lower case
shopTitle.addEventListener("mouseout", (e) => {
  e.preventDefault();
  shopTitle.textContent = shopTitle.textContent.toLowerCase();
});

helpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#contact-container #uname");
  const email = document.querySelector("#contact-container #email");
  const errorMsg = document.querySelector("#contact-container #text-area");
  // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const bannedEmailRegex = /^[a-zA-Z0-9._%+-]+@protonmail.com$/;
  const isCorrect = true;

  if (bannedEmailRegex.test(email.value)) {
    console.log("here");
    alert(`Used a banned email`);
    isCorrect = false;
  }

  if (isCorrect) {
    alert(
      `Hello ${name.value}\n
     We are letting you know that we received your message:\n
     ${errorMsg.value}\n
     We will contact you from your email, ${email.value}, if we have any further questions\n`
    );
  }
});

// update cart count
function cartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = totalItems;
}

function resetCount() {
  cartCount.textContent = 0;
  totalPrice = 0;
  totalItems = 0;
}

// change food item styling
function foodStyling(ary) {
  const divList = document.querySelectorAll("#menu > div");
  // console.log(divList);
  divList.forEach((div) => {
    const firstChild = div.children[0];
    const secondChild = div.children[1];
    const thirdChild = div.children[2];
    firstChild.style.borderRadius = "30%";
    secondChild.style.color = "white";
    thirdChild.style.fontStyle = "italic";
  });
}

createItems(itemAry, descriptionAry);
foodStyling(descriptionAry);
