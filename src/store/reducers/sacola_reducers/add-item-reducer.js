function ADD_ITEM_REDUCER(state, action) {
  const enteredProduct = action.payload;
  const bagState = state.bag;

  let existingProduct = null;

  if (enteredProduct.size) {
    existingProduct = bagState.items.find((item) => {
      return item.id === enteredProduct.id && item.size === enteredProduct.size;
    });
  } else {
    existingProduct = bagState.items.find((item) => {
      return item.id === enteredProduct.id;
    });
  }

  if (existingProduct) {
    const indexOf_existingProduct = bagState.items.indexOf(existingProduct);

    const updated_existingProduct = {
      ...existingProduct,
      price:
        existingProduct.price + enteredProduct.price * enteredProduct.quantity,
      quantity: existingProduct.quantity + enteredProduct.quantity,
    };

    const copyOfBagStateItems = [...bagState.items];
    copyOfBagStateItems[indexOf_existingProduct] = updated_existingProduct;

    return {
      ...state,
      bag: {
        totalItems: bagState.totalItems + enteredProduct.quantity,
        totalAmount:
          bagState.totalAmount + enteredProduct.price * enteredProduct.quantity,
        items: [...copyOfBagStateItems],
      },
    };
  }

  const newProduct = {
    ...enteredProduct,
    price: enteredProduct.price * enteredProduct.quantity,
  };

  return {
    ...state,
    bag: {
      totalItems: bagState.totalItems + enteredProduct.quantity,
      totalAmount:
        bagState.totalAmount + enteredProduct.price * enteredProduct.quantity,
      items: bagState.items.concat(newProduct),
    },
  };
}

export default ADD_ITEM_REDUCER;
