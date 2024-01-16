function addRemoveItem(cart, id, quantity) {
  let foundItemInCart = false;

  cart.forEach((d) => {
    let newCount = d.count;

    if (d.id === id) {
      foundItemInCart = true;
      newCount = newCount + quantity;
    }

    d.count = newCount;
  });

  if (!foundItemInCart && quantity > 0) {
    cart.push({ id, count: quantity });
  }

  return cart.filter((d) => d.count > 0);
}

function addItem(cart, id, quantity) {
  return addRemoveItem(cart, id, quantity);
}

function removeItem(cart, id, quantity) {
  return addRemoveItem(cart, id, -quantity);
}

module.exports = {
  addItem,
  removeItem,
};
