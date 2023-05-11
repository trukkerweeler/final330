import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  let cartItems; // = getLocalStorage("so-cart");
  try {
    cartItems = JSON.parse(localStorage.getItem("so-cart"));
    if (!Array.isArray(cartItems)) cartItems = [cartItems];
  } catch(err) {
    cartItems = [];
  }
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function getItemCount() {
  let cartItems = localStorage.getItem("so-cart");
  if (cartItems === null || typeof cartItems === "undefined") {
      document.querySelector("#itemcount").textContent = "0";
      // console.log("0");

  } else {
      let parsedCartItems = [JSON.parse(cartItems)];
      document.querySelector('#itemcount').textContent = parsedCartItems.length;
  }

}
getItemCount()

renderCartContents();
