function REMOVE_ONE_REDUCER(state, action) {
  const currentProductId = action.payload.id;
  const currentPrductSize = action.payload.size;

  let currentStateItem = null;

  if (currentPrductSize) {
    currentStateItem = state.bag.items.find((item) => {
      return item.id === currentProductId && item.size === currentPrductSize;
    });
  } else {
    currentStateItem = state.bag.items.find((item) => {
      return item.id === currentProductId;
    });
  }

  let copy_stateItems = [...state.bag.items];

  const indexOf_currentStateItem = state.bag.items.indexOf(currentStateItem);

  const defaultPrice_currentStateItem =
    currentStateItem.price / currentStateItem.quantity;

  if (currentStateItem.quantity === 1) {
    copy_stateItems.splice(indexOf_currentStateItem, 1);

    return {
      ...state,
      bag: {
        totalAmount: state.bag.totalAmount - defaultPrice_currentStateItem,
        totalItems: state.bag.totalItems - 1,
        items: [...copy_stateItems],
      },
    };
  }

  const updated_currentStateItem = {
    ...state.bag.items[indexOf_currentStateItem],
    price: currentStateItem.price - defaultPrice_currentStateItem,
    quantity: currentStateItem.quantity - 1,
  };

  copy_stateItems[indexOf_currentStateItem] = updated_currentStateItem;

  return {
    ...state,
    bag: {
      totalAmount: state.bag.totalAmount - defaultPrice_currentStateItem,
      totalItems: state.bag.totalItems - 1,
      items: [...copy_stateItems],
    },
  };
}

export default REMOVE_ONE_REDUCER;
