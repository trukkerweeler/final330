import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();

const cart = new ShoppingCart("so-cart", ".product-list");
cart.renderCartContents();

// function renderCartContents() {
//   let cartItems; // = getLocalStorage("so-cart");
//   try {
//     cartItems = JSON.parse(localStorage.getItem("so-cart"));
//     if (!Array.isArray(cartItems)) cartItems = [cartItems];
//   } catch(err) {
//     cartItems = [];
//   }
//   const htmlItems = cartItems.map((item) => cartItemTemplate(item));
//   document.querySelector(".product-list").innerHTML = htmlItems.join("");
// }


// function getItemCount() {
//   let cartItems = localStorage.getItem("so-cart");
//   if (cartItems === null || typeof cartItems === "undefined") {
//       document.querySelector("#itemcount").textContent = "0";
//       // console.log("0");

//   } else {
//       let parsedCartItems = [JSON.parse(cartItems)];
//       document.querySelector('#itemcount').textContent = parsedCartItems.length;
//   }

// }
// getItemCount()

// renderCartContents();
