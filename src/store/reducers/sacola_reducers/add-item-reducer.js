function ADD_ITEM_REDUCER(state, action) {
  const enteredProduct = action.payload;
  const state_items = state.bag.items;

  let existingProduct = null;

  if (enteredProduct.size) {
    existingProduct = state_items.find((item) => {
      return item.id === enteredProduct.id && item.size === enteredProduct.size;
    });
  } else {
    existingProduct = state_items.find((item) => {
      return item.id === enteredProduct.id;
    });
  }

  if (existingProduct) {
    const indexOf_existingProduct = state_items.indexOf(existingProduct);

    const updated_existingProduct = {
      ...existingProduct,
      price:
        existingProduct.price + enteredProduct.price * enteredProduct.quantity,
      quantity: existingProduct.quantity + enteredProduct.quantity,
    };

    const updated_state_items = [...state_items];
    updated_state_items[indexOf_existingProduct] = updated_existingProduct;

    return {
      ...state,
      bag: {
        totalItems: state.bag.totalItems + enteredProduct.quantity,
        totalAmount:
          state.bag.totalAmount +
          enteredProduct.price * enteredProduct.quantity,
        items: [...updated_state_items],
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
      totalItems: state.bag.totalItems + action.payload.quantity,
      totalAmount:
        state.bag.totalAmount + action.payload.price * action.payload.quantity,
      items: state.bag.items.concat(newProduct),
    },
  };
}

export default ADD_ITEM_REDUCER;
