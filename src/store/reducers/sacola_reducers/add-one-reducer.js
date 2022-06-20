function ADD_ONE_REDUCER(state, action) {
  const enteredItemId = action.payload.id;
  const enteredItemSize = action.payload.size;

  let currentStateItem = null;

  if (enteredItemSize) {
    currentStateItem = state.bag.items.find((item) => {
      return item.id === enteredItemId && item.size === enteredItemSize;
    });
  } else {
    currentStateItem = state.bag.items.find((item) => {
      return item.id === enteredItemId;
    });
  }

  const indexOf_currentStateItem = state.bag.items.indexOf(currentStateItem);

  const defaultPrice_currentStateItem =
    currentStateItem.price / currentStateItem.quantity;

  const updated_currentStateItem = {
    ...state.bag.items[indexOf_currentStateItem],
    price: currentStateItem.price + defaultPrice_currentStateItem,
    quantity: currentStateItem.quantity + 1,
  };

  const copy_stateItems = [...state.bag.items];
  copy_stateItems[indexOf_currentStateItem] = updated_currentStateItem;

  return {
    ...state,
    bag: {
      totalAmount: state.bag.totalAmount + defaultPrice_currentStateItem,
      totalItems: state.bag.totalItems + 1,
      items: [...copy_stateItems],
    },
  };
}

export default ADD_ONE_REDUCER;
