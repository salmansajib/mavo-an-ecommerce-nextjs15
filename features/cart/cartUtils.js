export const recalculateTotals = (cartItems) => {
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return { totalQuantity, totalPrice };
};
