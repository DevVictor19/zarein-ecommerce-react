// constants
export const ADD_ITEM = "zarein/bag/add-item";
export const CLEAR_ITEMS = "zarein/bag/clear-items";
export const ADD_ONE = "zarein/bag/add-one-item";
export const REMOVE_ONE = "zarein/bag/remove-one-item";

const initialState = {
  totalItems: 0,
  totalAmount: 0,
  items: [],
};

// reducer
export default function reducer(state = initialState, action) {
  if (action.type === ADD_ITEM) {
    const enteredProduct = action.payload;

    let existingProduct = null;

    if (enteredProduct.size) {
      existingProduct = state.items.find((item) => {
        return (
          item.id === enteredProduct.id && item.size === enteredProduct.size
        );
      });
    } else {
      existingProduct = state.items.find((item) => {
        return item.id === enteredProduct.id;
      });
    }

    if (existingProduct) {
      const indexOf_existingProduct = state.items.indexOf(existingProduct);

      const updated_existingProduct = {
        ...existingProduct,
        price:
          existingProduct.price +
          enteredProduct.price * enteredProduct.quantity,
        quantity: existingProduct.quantity + enteredProduct.quantity,
      };

      const itemsStateCopy = [...state.items];
      itemsStateCopy[indexOf_existingProduct] = updated_existingProduct;

      return {
        totalItems: state.totalItems + enteredProduct.quantity,
        totalAmount:
          state.totalAmount + enteredProduct.price * enteredProduct.quantity,
        items: [...itemsStateCopy],
      };
    }

    const newProduct = {
      ...enteredProduct,
      price: enteredProduct.price * enteredProduct.quantity,
    };

    return {
      totalItems: state.totalItems + enteredProduct.quantity,
      totalAmount:
        state.totalAmount + enteredProduct.price * enteredProduct.quantity,
      items: state.items.concat(newProduct),
    };
  }

  if (action.type === CLEAR_ITEMS) {
    return initialState;
  }

  if (action.type === ADD_ONE) {
    const enteredItemId = action.payload.id;
    const enteredItemSize = action.payload.size;

    let currentStateItem = null;

    if (enteredItemSize) {
      currentStateItem = state.items.find((item) => {
        return item.id === enteredItemId && item.size === enteredItemSize;
      });
    } else {
      currentStateItem = state.items.find((item) => {
        return item.id === enteredItemId;
      });
    }

    const indexOf_currentStateItem = state.items.indexOf(currentStateItem);

    const defaultPrice_currentStateItem =
      currentStateItem.price / currentStateItem.quantity;

    const updated_currentStateItem = {
      ...state.items[indexOf_currentStateItem],
      price: currentStateItem.price + defaultPrice_currentStateItem,
      quantity: currentStateItem.quantity + 1,
    };

    const copy_stateItems = [...state.items];
    copy_stateItems[indexOf_currentStateItem] = updated_currentStateItem;

    return {
      totalAmount: state.totalAmount + defaultPrice_currentStateItem,
      totalItems: state.totalItems + 1,
      items: [...copy_stateItems],
    };
  }

  if (action.type === REMOVE_ONE) {
    const currentProductId = action.payload.id;
    const currentPrductSize = action.payload.size;

    let currentStateItem = null;

    if (currentPrductSize) {
      currentStateItem = state.items.find((item) => {
        return item.id === currentProductId && item.size === currentPrductSize;
      });
    } else {
      currentStateItem = state.items.find((item) => {
        return item.id === currentProductId;
      });
    }

    let copy_stateItems = [...state.items];

    const indexOf_currentStateItem = state.items.indexOf(currentStateItem);

    const defaultPrice_currentStateItem =
      currentStateItem.price / currentStateItem.quantity;

    if (currentStateItem.quantity === 1) {
      copy_stateItems.splice(indexOf_currentStateItem, 1);

      return {
        totalAmount: state.totalAmount - defaultPrice_currentStateItem,
        totalItems: state.totalItems - 1,
        items: [...copy_stateItems],
      };
    }

    const updated_currentStateItem = {
      ...state.items[indexOf_currentStateItem],
      price: currentStateItem.price - defaultPrice_currentStateItem,
      quantity: currentStateItem.quantity - 1,
    };

    copy_stateItems[indexOf_currentStateItem] = updated_currentStateItem;

    return {
      totalAmount: state.totalAmount - defaultPrice_currentStateItem,
      totalItems: state.totalItems - 1,
      items: [...copy_stateItems],
    };
  }

  return state;
}

// actions
export const addItem = (item) => {
  return { type: ADD_ITEM, payload: item };
};

export const clearBag = () => {
  return { type: CLEAR_ITEMS, payload: null };
};

export const addOne = (id, size) => {
  return { type: ADD_ONE, payload: { id, size } };
};

export const removeOne = (id, size) => {
  return { type: REMOVE_ONE, payload: { id, size } };
};
