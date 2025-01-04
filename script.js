const cart = [];

document.querySelectorAll('.slider-btn').forEach(button => {
  button.addEventListener('click', event => {
    const next = event.target.getAttribute('add');
    addToCart(next);
  });
});

function addToCart(next) {
  const existingItem = cart.find(item => item.id === next);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  updateBasketMenu();
}

function updateBasketMenu() {
  const basketMenu = document.getElementById('basket-items');
  basketMenu.innerHTML = '';

  cart.forEach(item => {
    const productElement = document.createElement('div');
    productElement.innerHTML = `next: ${item.id}, Quantity: ${item.quantity}`;
    basketMenu.appendChild(productElement);
  });
}
