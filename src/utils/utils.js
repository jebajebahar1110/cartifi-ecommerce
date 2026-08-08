// ============================================
// Utility Functions
// Team Cartifi - E-Commerce Project
// ============================================

/*
  Function:
  calculateTotal()

  Purpose:
  Calculates the total price of all products
  inside the shopping cart.

  Example:
  Cart:
  [
    { price: 20 },
    { price: 30 },
    { price: 15 }
  ]

  Result:
  65
*/

export const calculateTotal = (cartItems) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return totalPrice;
};

/*
  Function:
  formatCurrency()

  Purpose:
  Converts a number into a currency string.

  Example:

  formatCurrency(45)

  Output:

  $45.00
*/

export const formatCurrency = (amount) => {
  return `$${amount.toFixed(2)}`;
};

/*
  Function:
  getCartItemCount()

  Purpose:
  Returns the total number of products
  currently available in the cart.
*/

export const getCartItemCount = (cartItems) => {
  return cartItems.length;
};