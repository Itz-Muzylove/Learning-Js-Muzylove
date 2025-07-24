let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice) {

  const existingItem = cart.find(item => item.name === productName);

  if (existingItem) {
    
    existingItem.quantity += 1;
  } else {
    
    cart.push({ name: productName, price: productPrice, quantity: 1 });
  }

  saveCartToLocalStorage(); 
  updateCart(); 
}

function removeFromCart(productName) {
  cart = cart.filter(item => item.name !== productName); 
  saveCartToLocalStorage(); 
  updateCart(); 
}

function clearCart() {
  cart = []; 
  saveCartToLocalStorage(); 
  updateCart(); 
}

function calculateTotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}


function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');

  cartItemsContainer.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item.name} (x${item.quantity})</span>
      <span>${(item.price * item.quantity).toFixed(1)}FCFA</span>
      <button onclick="removeFromCart('${item.name}')">Remove</button>
    `;
    cartItemsContainer.appendChild(li);
  });

  totalDisplay.textContent = `Total = ${calculateTotal().toFixed(1)} FCFA`;
}

function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

updateCart();