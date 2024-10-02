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
menuItem.style.width = "500px";
// console.log(menuItem);

// using bom alerts to get the username
const submitBtn = document.getElementById("submit-btn");

// Function to create the food grid in the html page
function createItems(ary) {
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

    foodBox.appendChild(foodName);
    foodBox.appendChild(price);
    foodBox.appendChild(button);
    menuItem.appendChild(foodBox);
  });
}

createItems(itemAry);

// click event for the button in the order menu
const orderBtn = document.querySelector();

// function for cart - adding the cart items, showing the cart items,
