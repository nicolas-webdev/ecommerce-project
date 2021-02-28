//商品はカートに追加済なら、新規追加しない、+１カウントする
export const addItemToCart = (cartItems, cartItemToAdd) => {
  //入っているかをチェック
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.name === cartItemToAdd.name
  );

  //入っていれば＋１
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.name === cartItemToAdd.name
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //入ってなければ、Quantityは１
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
