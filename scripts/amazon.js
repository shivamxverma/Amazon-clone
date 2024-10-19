import { cart , addtocart } from '../data/cart.js';  
import { products } from '../data/products.js'; 
let parenthtml = '';

products.forEach((product) => {
  let str = product.rating.stars.toString();
  let newStr = str.includes('.') ? str.replace('.', '') : str + '0';
  parenthtml += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>
      <div class="product-rating-container">
        <img class="product-rating-stars" src="images/ratings/rating-${newStr}.png" alt="Rating">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>
      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>
      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div class="product-spacer js-product-spacer"></div>
      <div class="added-to-cart js-added-to-cart" style="display:none;">
        <img src="images/icons/checkmark.png" alt="Added">
        Added
      </div>
      <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}"
      ">
        Add to Cart
      </button>
    </div>
  `;
});

document.querySelector('.products-grid').innerHTML = parenthtml;

function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    addtocart(productId);
    updateCartQuantity();
    console.log(cart);
  });
});
