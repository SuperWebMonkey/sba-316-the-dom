// import "./style.css";

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

// Create a chart of selectable pictures
const menuItem = document.getElementById("menu");
menuItem.style.width = "600px";
// console.log(menuItem);

// using bom alerts to get the username
const cartButton = document.querySelector(".cart");

// Keep track of ordered items
let orderedItems = {};

// Function to create the food grid in the html page
let totalPrice = 0;
let totalItems = 0;
function createItems(ary) {
  // may need to move it to global for the cart button function

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

    const foodImg = document.createElement("img");
    foodImg.className = "food-img";
    foodImg.setAttribute("src", "https://via.placeholder.com/50");
    foodImg.setAttribute("width", 150);
    foodImg.setAttribute("height", 70);

    foodBox.appendChild(foodImg);
    foodBox.appendChild(foodName);
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
      // Count the number of items by items
      let foodVal = foodItem.name;
      // console.log(`food name ${foodVal}`);
      if (orderedItems[foodVal]) {
        orderedItems[foodVal]++;
      } else {
        orderedItems[foodVal] = 1;
      }

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
    alert(`${cartItems}`);
  } else {
    alert(`No items ordered`);
  }
});

function roundNumber(num) {
  return Math.round(num * 100) / 100;
}

// update cart count
function cartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = totalItems;
}

// click event for the button in the order menu

createItems(itemAry);
// function for cart - adding the cart items, showing the cart items,
